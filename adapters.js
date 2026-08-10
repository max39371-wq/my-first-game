/**
 * adapters.js
 * Unified async askAgent(provider, payload) and local simulation engine.
 */

const SYSTEM_PROMPT = `You are the simulation engine of a political simulation game. Input: country institutional card JSON, current stats, player decree. Output ONLY strict JSON: {"nar_ar": string, "nar_en": string, "fx": {"eco": int, "stb": int, "pop": int, "mil": int, "corr": int}} with fx values between -15 and 15, consistent with the country's real institutions.`;

/**
 * Local simulation engine used as default and fallback.
 * Generates structured JSON responses with localized narratives and stat impacts.
 */
function runLocalSimulation(payload) {
  const { countryCard, currentStats, decree } = payload;
  const dec = (decree || "").toLowerCase();

  // Basic impact variables
  let eco = 0;
  let stb = 0;
  let pop = 0;
  let mil = 0;
  let corr = 0;

  // Let's inspect decree keywords for standard items
  // Arabic keywords
  const hasTaxAr = dec.includes("ضريبة") || dec.includes("ضرائب");
  const hasInvestAr = dec.includes("استثمار") || dec.includes("مشاريع") || dec.includes("تنمية");
  const hasSupportAr = dec.includes("دعم") || dec.includes("رواتب") || dec.includes("مساعدات");
  const hasMilitaryAr = dec.includes("جيش") || dec.includes("دفاع") || dec.includes("تسليح") || dec.includes("عسكري");
  const hasSecurityAr = dec.includes("أمن") || dec.includes("استقرار") || dec.includes("شرطة");
  const hasFreedomAr = dec.includes("حرية") || dec.includes("حريات") || dec.includes("ديمقراطية") || dec.includes("انتخابات");
  const hasCorruptionAr = dec.includes("فساد") || dec.includes("نزاهة") || dec.includes("محاسبة") || dec.includes("رقابة");

  // English keywords
  const hasTaxEn = dec.includes("tax") || dec.includes("levy");
  const hasInvestEn = dec.includes("invest") || dec.includes("project") || dec.includes("develop");
  const hasSupportEn = dec.includes("support") || dec.includes("salary") || dec.includes("subsidy") || dec.includes("wage");
  const hasMilitaryEn = dec.includes("military") || dec.includes("army") || dec.includes("defense") || dec.includes("weapon");
  const hasSecurityEn = dec.includes("security") || dec.includes("stability") || dec.includes("police");
  const hasFreedomEn = dec.includes("freedom") || dec.includes("democracy") || dec.includes("election") || dec.includes("liberty");
  const hasCorruptionEn = dec.includes("corruption") || dec.includes("audit") || dec.includes("integrity") || dec.includes("anti-corr");

  // Determine effects
  if (hasTaxAr || hasTaxEn) {
    eco += 4;
    pop -= 5;
    stb -= 2;
  }
  if (hasInvestAr || hasInvestEn) {
    eco += 5;
    stb += 2;
    pop += 3;
    corr -= 1;
  }
  if (hasSupportAr || hasSupportEn) {
    eco -= 4;
    pop += 6;
    stb += 3;
  }
  if (hasMilitaryAr || hasMilitaryEn) {
    mil += 6;
    eco -= 3;
    pop -= 2;
    stb += 2;
  }
  if (hasSecurityAr || hasSecurityEn) {
    stb += 5;
    pop -= 2;
    mil += 2;
  }
  if (hasFreedomAr || hasFreedomEn) {
    pop += 6;
    stb -= 3;
    if (countryCard.form === "monarchy" && countryCard.sys === "absolute") {
      stb -= 5; // Monarchies dislike direct freedom decrees
    }
  }
  if (hasCorruptionAr || hasCorruptionEn) {
    corr -= 6;
    stb += 2;
    pop += 4;
    eco += 2;
  }

  // Fallback to random if all 0
  if (eco === 0 && stb === 0 && pop === 0 && mil === 0 && corr === 0) {
    eco = Math.floor(Math.random() * 9) - 4; // -4 to 4
    stb = Math.floor(Math.random() * 9) - 4;
    pop = Math.floor(Math.random() * 9) - 4;
    mil = Math.floor(Math.random() * 9) - 4;
    corr = Math.floor(Math.random() * 9) - 4;
  }

  // Clamp values between -15 and 15
  eco = Math.min(15, Math.max(-15, eco));
  stb = Math.min(15, Math.max(-15, stb));
  pop = Math.min(15, Math.max(-15, pop));
  mil = Math.min(15, Math.max(-15, mil));
  corr = Math.min(15, Math.max(-15, corr));

  // Build narrative based on effects and country context
  const countryNameAr = countryCard.name?.ar || countryCard.ar || "الدولة";
  const countryNameEn = countryCard.name?.en || countryCard.en || "The country";
  const userRoleAr = countryCard.player === "monarch" ? "جلالة الملك" : countryCard.player === "prime_minister" ? "دولة رئيس الوزراء" : "سيادة الرئيس";
  const userRoleEn = countryCard.player === "monarch" ? "Your Majesty" : countryCard.player === "Mr. Prime Minister" ? "Mr. Prime Minister" : "Mr. President";

  const arText = `أصدر ${userRoleAr} مرسوماً بخصوص: "${decree || "تنظيم شؤون الدولة"}". استجابت مؤسسات ${countryNameAr} فوراً لهذا القرار. وقد أدى ذلك إلى تغييرات ملموسة في الاقتصاد والاستقرار والأمن العام ومستويات الفساد في البلاد.`;
  const enText = `${userRoleEn} issued a decree regarding: "${decree || "state affairs regulation"}". The institutions of ${countryNameEn} reacted immediately to this decision. This has led to noticeable shifts in the economy, stability, public support, and corruption levels across the nation.`;

  return {
    nar_ar: arText,
    nar_en: enText,
    fx: { eco, stb, pop, mil, corr }
  };
}

/**
 * Normalizes API response to ensure strict format compliance.
 */
function normalizeResponse(jsonObj) {
  if (!jsonObj) throw new Error("Empty response");

  // Check structure
  const nar_ar = jsonObj.nar_ar || jsonObj.narrative_ar || "";
  const nar_en = jsonObj.nar_en || jsonObj.narrative_en || "";

  let fx = jsonObj.fx || {};
  if (jsonObj.effects) {
    fx = jsonObj.effects;
  }

  const normalizedFx = {
    eco: typeof fx.eco === "number" ? Math.round(fx.eco) : 0,
    stb: typeof fx.stb === "number" ? Math.round(fx.stb) : 0,
    pop: typeof fx.pop === "number" ? Math.round(fx.pop) : 0,
    mil: typeof fx.mil === "number" ? Math.round(fx.mil) : 0,
    corr: typeof fx.corr === "number" ? Math.round(fx.corr) : 0
  };

  // Clamp each to -15 and 15
  for (const k in normalizedFx) {
    normalizedFx[k] = Math.min(15, Math.max(-15, normalizedFx[k]));
  }

  return {
    nar_ar: String(nar_ar).trim() || "تمت معالجة القرار بنجاح.",
    nar_en: String(nar_en).trim() || "The decree has been processed successfully.",
    fx: normalizedFx
  };
}

/**
 * Unified askAgent function
 */
async function askAgent(provider, payload, apiKey, extraModel) {
  if (provider === "local") {
    return runLocalSimulation(payload);
  }

  if (!apiKey || !apiKey.trim()) {
    throw new Error("API Key is missing");
  }

  const promptText = `
System Instruction: ${SYSTEM_PROMPT}

Input Data:
${JSON.stringify({
  countryCard: payload.countryCard,
  currentStats: payload.currentStats,
  decree: payload.decree
}, null, 2)}
`;

  let response;
  let responseText = "";

  // Set timeout of 15 seconds
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  try {
    if (provider === "gemini") {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
      response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [
            { parts: [{ text: promptText }] }
          ],
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          },
          generationConfig: {
            responseMimeType: "application/json"
          }
        })
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Gemini API Error: Status ${response.status}`);
      }

      const resJson = await response.json();
      responseText = resJson.candidates?.[0]?.content?.parts?.[0]?.text || "";

    } else if (provider === "claude") {
      const url = "https://api.anthropic.com/v1/messages";
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        signal: controller.signal,
        body: JSON.stringify({
          model: "claude-3-5-sonnet-20241022",
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          messages: [
            { role: "user", content: promptText }
          ]
        })
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Claude API Error: Status ${response.status}`);
      }

      const resJson = await response.json();
      responseText = resJson.content?.[0]?.text || "";

    } else if (provider === "openai") {
      const url = "https://api.openai.com/v1/chat/completions";
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        signal: controller.signal,
        body: JSON.stringify({
          model: "gpt-4o-mini",
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: promptText }
          ]
        })
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`OpenAI API Error: Status ${response.status}`);
      }

      const resJson = await response.json();
      responseText = resJson.choices?.[0]?.message?.content || "";

    } else if (provider === "deepseek") {
      const url = "https://api.deepseek.com/chat/completions";
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        signal: controller.signal,
        body: JSON.stringify({
          model: "deepseek-chat",
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: promptText }
          ]
        })
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`DeepSeek API Error: Status ${response.status}`);
      }

      const resJson = await response.json();
      responseText = resJson.choices?.[0]?.message?.content || "";

    } else if (provider === "openrouter") {
      const url = "https://openrouter.ai/api/v1/chat/completions";
      const model = extraModel || "x-ai/grok-3-mini";
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        signal: controller.signal,
        body: JSON.stringify({
          model: model,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: promptText }
          ]
        })
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`OpenRouter API Error: Status ${response.status}`);
      }

      const resJson = await response.json();
      responseText = resJson.choices?.[0]?.message?.content || "";

    } else {
      throw new Error(`Unknown provider: ${provider}`);
    }

    // Parse Response
    responseText = responseText.trim();
    // Sometimes models wrap JSON in markdown block: ```json ... ```
    if (responseText.startsWith("```")) {
      responseText = responseText.replace(/^```json\s*/i, "").replace(/```$/, "").trim();
    }

    const parsed = JSON.parse(responseText);
    return normalizeResponse(parsed);

  } catch (err) {
    clearTimeout(timeoutId);
    console.error(`askAgent error for ${provider}:`, err);
    throw err;
  }
}

// Attach functions to window scope
window.askAgent = askAgent;
window.runLocalSimulation = runLocalSimulation;

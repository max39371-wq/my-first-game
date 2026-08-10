/**
 * Game Engine v1 Configuration and Scripting
 * Handles localizations, asynchronous file fetching and merging, UI rendering, search logic,
 * single page application (SPA) screen toggles, and dummy state progression.
 */

// UI translation objects
const STRINGS = {
  ar: {
    appTitle: "🏛️ لعبة الحكم",
    searchPlaceholder: "ابحث عن دولة بالاسم العربي أو الإنجليزي...",
    republics: "🏛️ الجمهوريات",
    monarchies: "👑 الملكيات",
    back: "⬅",
    republicsTitle: "الجمهوريات",
    monarchiesTitle: "الملكيات",
    searchResultsTitle: "نتائج البحث",
    countryDetails: "تفاصيل الدولة",
    startRule: "ابدأ الحكم ▶",
    yourRole: "دورك",
    constructionText: "نظام الأحداث قيد البناء — قريبًا أول قرار لك هنا 🔧",
    economy: "اقتصاد",
    stability: "استقرار",
    popularity: "شعبية",
    military: "جيش",
    corruption: "فساد",

    // Advisor strings
    advisor_title: "🤖 مستشارك",
    opt_local: "المستشار المحلي — مجاني",
    api_key_note: "مفتاحك يبقى في متصفحك فقط",
    submit_decree: "إصدار المرسوم 📜",
    submitting: "جاري استشارة المستشار... ⏳",
    apiKeyPlaceholder: "أدخل مفتاح الـ API لـ {provider}...",
    decreePlaceholder: "اكتب مرسومك هنا لتغيير سياسة الدولة...",
    local_advisor_badge: "🤖 المستشار المحلي",
    err_api: "تعذر الاتصال بالمستشار البعيد. تم استخدام المستشار المحلي كبديل تلقائي.",

    // Attribute labels
    sys: "نظام الحكم",
    legType: "نوع البرلمان",
    legPower: "سلطة البرلمان",
    jud: "القضاء",
    mil: "الجيش",
    parties: "الأحزاب",
    federal: "فدرالي",
    terms: "الفترات الرئاسية",
    royalCourt: "البلاط الملكي",
    succession: "وراثة العهد / انتقال الحكم",

    // Attribute values translations
    form_monarchy: "ملكي",
    form_republic: "جمهوري",

    sys_constitutional_parliamentary: "ملكي دستوري برلماني",
    sys_constitutional_semi: "ملكي دستوري شبه رئاسي",
    sys_co_principality: "إمارة مشتركة",
    sys_theocratic_elective: "ثيوقراطي انتخابي",
    sys_theocratic: "ثيوقراطي",
    sys_absolute: "ملكي مطلق",
    sys_elective: "انتخابي",
    sys_presidential: "رئاسي",
    sys_parliamentary: "برلماني",
    sys_semi_presidential: "شبه رئاسي",
    sys_council: "مجلس حكومي",
    sys_one_party: "حزب واحد",
    sys_military: "عسكري",
    sys_provisional: "مؤقت",

    legType_unicameral: "أحادي المجلس",
    legType_bicameral: "ثنائي المجلس",
    legType_none: "بلا برلمان",
    legType_consultative: "مجلس استشاري",

    legPower_none: "عديمة",
    legPower_low: "ضعيفة",
    legPower_moderate: "متوسطة",
    legPower_high: "عالية",
    legPower_consultative: "استشارية فقط",

    jud_limited: "محدود الاستقلالية",
    jud_moderate: "متوسط الاستقلالية",
    jud_high: "مستقل تماماً",

    mil_civilian: "سيطرة مدنية",
    mil_mixed: "مشترك / مختلط",
    mil_military: "سيطرة عسكرية مباشرة",
    mil_monarch: "تحت سلطة الملك",

    parties_none: "محظورة",
    parties_one: "حزب واحد مهيمن",
    parties_multi: "تعددية حزبية",

    bool_yes: "نعم",
    bool_no: "لا",

    terms_format: "{maxTerms} فترات، {years} سنوات لكل فترة",
    terms_no_limit: "غير محدود الفترات",

    royalCourt_none: "لا يوجد",
    royalCourt_limited: "محدود الصلاحيات",
    royalCourt_moderate: "متوسط الصلاحيات",
    royalCourt_high: "صلاحيات واسعة",

    succession_hereditary: "وراثي",
    succession_elective: "انتخابي",
    succession_family_selection: "اختيار عائلي",

    player_prime_minister: "رئيس الوزراء",
    player_president: "الرئيس",
    player_monarch: "الملك / الحاكم",
    player_council: "المجلس العسكري / القيادة",

    searchNoResults: "لم يتم العثور على نتائج تطابق \"{query}\"",
    searchResultsCount: "تم العثور على {count} دولة تطابق البحث"
  },
  en: {
    appTitle: "🏛️ Game of Rule",
    searchPlaceholder: "Search country by Arabic or English name...",
    republics: "🏛️ Republics",
    monarchies: "👑 Monarchies",
    back: "⬅",
    republicsTitle: "Republics",
    monarchiesTitle: "Monarchies",
    searchResultsTitle: "Search Results",
    countryDetails: "Country Details",
    startRule: "Start Governing ▶",
    yourRole: "Your Role",
    constructionText: "Event system under construction — first decision coming soon 🔧",
    economy: "Economy",
    stability: "Stability",
    popularity: "Popularity",
    military: "Military",
    corruption: "Corruption",

    // Advisor strings
    advisor_title: "🤖 Your Advisor",
    opt_local: "Local Advisor — Free",
    api_key_note: "Your key stays in your browser only",
    submit_decree: "Issue Decree 📜",
    submitting: "Consulting advisor... ⏳",
    apiKeyPlaceholder: "Enter API key for {provider}...",
    decreePlaceholder: "Write your decree here to change state policy...",
    local_advisor_badge: "🤖 Local Advisor",
    err_api: "Could not reach remote advisor. Local advisor was used as a fallback.",

    // Attribute labels
    sys: "Government System",
    legType: "Legislature Type",
    legPower: "Legislative Power",
    jud: "Judiciary",
    mil: "Military Control",
    parties: "Political Parties",
    federal: "Federal System",
    terms: "Presidential Terms",
    royalCourt: "Royal Court",
    succession: "Succession Method",

    // Attribute values translations
    form_monarchy: "Monarchy",
    form_republic: "Republic",

    sys_constitutional_parliamentary: "Constitutional Parliamentary",
    sys_constitutional_semi: "Constitutional Semi-Presidential",
    sys_co_principality: "Co-Principality",
    sys_theocratic_elective: "Theocratic Elective",
    sys_theocratic: "Theocratic",
    sys_absolute: "Absolute Monarchy",
    sys_elective: "Elective",
    sys_presidential: "Presidential",
    sys_parliamentary: "Parliamentary",
    sys_semi_presidential: "Semi-Presidential",
    sys_council: "Governing Council",
    sys_one_party: "One Party",
    sys_military: "Military Junta",
    sys_provisional: "Provisional",

    legType_unicameral: "Unicameral",
    legType_bicameral: "Bicameral",
    legType_none: "No Legislature",
    legType_consultative: "Consultative Assembly",

    legPower_none: "None",
    legPower_low: "Low",
    legPower_moderate: "Moderate",
    legPower_high: "High",
    legPower_consultative: "Consultative Only",

    jud_limited: "Limited",
    jud_moderate: "Moderate",
    jud_high: "High/Independent",

    mil_civilian: "Civilian",
    mil_mixed: "Mixed Control",
    mil_military: "Direct Military Control",
    mil_monarch: "Under the Monarch",

    parties_none: "Banned / None",
    parties_one: "Single Dominant Party",
    parties_multi: "Multi-party System",

    bool_yes: "Yes",
    bool_no: "No",

    terms_format: "{maxTerms} terms, {years} years each",
    terms_no_limit: "No term limits",

    royalCourt_none: "None",
    royalCourt_limited: "Limited Powers",
    royalCourt_moderate: "Moderate Powers",
    royalCourt_high: "High Powers",

    succession_hereditary: "Hereditary",
    succession_elective: "Elective",
    succession_family_selection: "Selected by Ruling Family",

    player_prime_minister: "Prime Minister",
    player_president: "President",
    player_monarch: "Monarch",
    player_council: "Governing Council",

    searchNoResults: "No countries matching \"{query}\" found",
    searchResultsCount: "Found {count} matching countries"
  }
};

// Global App State
const state = {
  lang: localStorage.getItem("game_lang") || "ar", // Default to Arabic (ar)
  countries: [], // Loaded countries
  currentScreen: "screen-home",
  activeFamily: null, // "republic" or "monarchy" or "search"
  selectedCountry: null,
  searchQuery: "",

  // Game session stats
  currentStats: {
    eco: 50,
    stb: 50,
    pop: 50,
    mil: 50,
    corr: 50
  },
  profiles: {} // Map country id -> profile object
};

// Files to fetch
const DATA_FILES = [
  "data/monarchies.json",
  "data/republics_africa.json",
  "data/republics_americas_oceania.json",
  "data/republics_asia.json",
  "data/republics_europe.json" // This file might fail, skip gracefully
];

// Initialize application on load
window.addEventListener("DOMContentLoaded", async () => {
  setupLanguage();
  setupEventListeners();
  await loadData();
  renderCurrentScreen();
});

// Setup language, HTML layout directivity & fonts
function setupLanguage() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";

  // Toggle button content
  const langToggleBtn = document.getElementById("lang-toggle-btn");
  if (langToggleBtn) {
    langToggleBtn.innerText = state.lang === "ar" ? "🌐 EN" : "🌐 AR";
  }

  // Update static text across the index.html template
  translateStaticUI();
}

// Function to translate components with direct translation key data-key
function translateStaticUI() {
  const dict = STRINGS[state.lang];

  // Title
  document.getElementById("app-title").innerText = dict.appTitle;

  // Search placeholder
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.placeholder = dict.searchPlaceholder;
  }

  // Family Buttons Labels
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  // Update advisor labels and placeholder elements if on Screen 4
  const advisorSelect = document.getElementById("advisor-select");
  if (advisorSelect) {
    const optLocal = advisorSelect.querySelector('option[value="local"]');
    if (optLocal) optLocal.innerText = dict.opt_local;
  }

  const apiKeyInput = document.getElementById("api-key-input");
  if (apiKeyInput) {
    const provider = advisorSelect ? advisorSelect.value : "local";
    apiKeyInput.placeholder = dict.apiKeyPlaceholder.replace("{provider}", provider.toUpperCase());
  }

  const decreeTextarea = document.getElementById("decree-textarea");
  if (decreeTextarea) {
    decreeTextarea.placeholder = dict.decreePlaceholder;
  }

  const submitText = document.getElementById("btn-submit-text");
  if (submitText) {
    const isSubmitting = document.getElementById("decree-submit-btn")?.disabled;
    submitText.innerText = isSubmitting ? dict.submitting : dict.submit_decree;
  }

  const keyNote = document.querySelector('[data-key="api_key_note"]');
  if (keyNote) {
    keyNote.innerText = dict.api_key_note;
  }

  const advisorTitle = document.querySelector('[data-key="advisor_title"]');
  if (advisorTitle) {
    advisorTitle.innerText = dict.advisor_title;
  }
}

// Fetch and merge arrays
async function loadData() {
  const allCountries = [];

  for (const url of DATA_FILES) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.warn(`Could not load ${url} (Status: ${response.status}) - skipping gracefully.`);
        continue;
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        allCountries.push(...data);
      }
    } catch (err) {
      console.warn(`Failed fetching/parsing ${url} - skipping gracefully:`, err);
    }
  }

  state.countries = allCountries;
  console.log(`Loaded ${state.countries.length} countries in total.`);

  // Load profiles
  try {
    const profRes = await fetch("data/profiles.json");
    if (profRes.ok) {
      const profilesArray = await profRes.json();
      if (Array.isArray(profilesArray)) {
        profilesArray.forEach(p => {
          if (p.id) {
            state.profiles[p.id] = p;
          }
        });
        console.log(`Loaded ${profilesArray.length} country profiles.`);
      }
    }
  } catch (err) {
    console.error("Failed loading country profiles:", err);
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Lang toggle button
  document.getElementById("lang-toggle-btn").addEventListener("click", () => {
    state.lang = state.lang === "ar" ? "en" : "ar";
    localStorage.setItem("game_lang", state.lang);
    setupLanguage();

    // Rerender active screen components to update localized state
    renderCurrentScreen();
  });

  // Home Screen family button: Republics
  document.getElementById("btn-republics").addEventListener("click", () => {
    state.activeFamily = "republic";
    state.searchQuery = "";
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";
    navigateTo("screen-list");
  });

  // Home Screen family button: Monarchies
  document.getElementById("btn-monarchies").addEventListener("click", () => {
    state.activeFamily = "monarchy";
    state.searchQuery = "";
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";
    navigateTo("screen-list");
  });

  // Search input change or submit
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (query.length > 0) {
      state.activeFamily = "search";
      state.searchQuery = query;
      // Navigate to list screen to display matching countries
      renderListScreen();
      // Ensure we switch view if we are on home screen
      if (state.currentScreen === "screen-home") {
        navigateTo("screen-list");
      }
    } else {
      // If cleared, and we are on search view, go back to home screen
      if (state.activeFamily === "search") {
        state.activeFamily = null;
        state.searchQuery = "";
        navigateTo("screen-home");
      }
    }
  });

  // Back buttons
  document.getElementById("list-back-btn").addEventListener("click", () => {
    // Clear search if we were in search view
    if (state.activeFamily === "search") {
      state.searchQuery = "";
      const sInput = document.getElementById("search-input");
      if (sInput) sInput.value = "";
    }
    navigateTo("screen-home");
  });

  document.getElementById("card-back-btn").addEventListener("click", () => {
    navigateTo("screen-list");
  });

  document.getElementById("game-back-btn").addEventListener("click", () => {
    navigateTo("screen-card");
  });

  // Screen 4 advisor selection change
  const advisorSelect = document.getElementById("advisor-select");
  if (advisorSelect) {
    advisorSelect.addEventListener("change", (e) => {
      const selected = e.target.value;
      localStorage.setItem("game_advisor", selected);

      const dict = STRINGS[state.lang];
      const keyInput = document.getElementById("api-key-input");
      if (keyInput) {
        keyInput.placeholder = dict.apiKeyPlaceholder.replace("{provider}", selected.toUpperCase());
        // Load stored key
        keyInput.value = localStorage.getItem(`game_api_key_${selected}`) || "";
      }

      // Toggle display containers
      const apiKeyContainer = document.getElementById("api-key-container");
      if (apiKeyContainer) {
        apiKeyContainer.style.display = selected === "local" ? "none" : "block";
      }

      const openrouterContainer = document.getElementById("openrouter-model-container");
      if (openrouterContainer) {
        openrouterContainer.style.display = selected === "openrouter" ? "block" : "none";
      }
    });
  }

  // API Key input change persistence
  const apiKeyInput = document.getElementById("api-key-input");
  if (apiKeyInput) {
    apiKeyInput.addEventListener("input", (e) => {
      const selectedAdvisor = advisorSelect ? advisorSelect.value : "local";
      if (selectedAdvisor !== "local") {
        localStorage.setItem(`game_api_key_${selectedAdvisor}`, e.target.value);
      }
    });
  }

  // OpenRouter model select persistence
  const orModelSelect = document.getElementById("openrouter-model-select");
  if (orModelSelect) {
    orModelSelect.addEventListener("change", (e) => {
      localStorage.setItem("game_openrouter_model", e.target.value);
    });
  }

  // Decree submission handling
  const submitBtn = document.getElementById("decree-submit-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", async () => {
      await handleDecreeSubmit();
    });
  }
}

// Navigation wrapper
function navigateTo(screenId) {
  state.currentScreen = screenId;

  // Hide all screens
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  // Show selected screen
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add("active");
  }

  // Handle updates specific to screens
  renderCurrentScreen();
}

// Global Screen Rerendering Orchestration
function renderCurrentScreen() {
  switch (state.currentScreen) {
    case "screen-home":
      // Reset any active states if home
      break;
    case "screen-list":
      renderListScreen();
      break;
    case "screen-card":
      renderCardScreen();
      break;
    case "screen-game":
      renderGameScreen();
      break;
  }
}

// Screen 2: Render List Grid
function renderListScreen() {
  const dict = STRINGS[state.lang];
  const listTitleEl = document.getElementById("list-title");
  const countriesGridEl = document.getElementById("countries-grid");
  const searchInfoEl = document.getElementById("search-info");

  countriesGridEl.innerHTML = "";

  // Title translation
  if (state.activeFamily === "republic") {
    listTitleEl.innerText = dict.republicsTitle;
    searchInfoEl.style.display = "none";
  } else if (state.activeFamily === "monarchy") {
    listTitleEl.innerText = dict.monarchiesTitle;
    searchInfoEl.style.display = "none";
  } else if (state.activeFamily === "search") {
    listTitleEl.innerText = dict.searchResultsTitle;
    searchInfoEl.style.display = "block";
  }

  // Filter countries based on category / query
  let filtered = [];
  if (state.activeFamily === "republic") {
    filtered = state.countries.filter(c => c.form === "republic");
  } else if (state.activeFamily === "monarchy") {
    filtered = state.countries.filter(c => c.form === "monarchy");
  } else if (state.activeFamily === "search") {
    const q = state.searchQuery.toLowerCase();
    filtered = state.countries.filter(c => {
      const nameAr = (c.name?.ar || c.ar || "").toLowerCase();
      const nameEn = (c.name?.en || c.en || "").toLowerCase();
      return nameAr.includes(q) || nameEn.includes(q);
    });

    // Translate search result stats
    if (filtered.length === 0) {
      searchInfoEl.innerText = dict.searchNoResults.replace("{query}", state.searchQuery);
    } else {
      searchInfoEl.innerText = dict.searchResultsCount
        .replace("{count}", filtered.length)
        .replace("{query}", state.searchQuery);
    }
  }

  // Render country cards (chips)
  filtered.forEach(country => {
    const chip = document.createElement("div");
    chip.className = "country-chip";

    // Country name and system localization
    const localizedName = state.lang === "ar" ? (country.name?.ar || country.ar) : (country.name?.en || country.en);
    const sysTranslationKey = `sys_${country.sys}`;
    const localizedSys = dict[sysTranslationKey] || country.sys;

    chip.innerHTML = `
      <div class="chip-flag">${country.flag || "🏳️"}</div>
      <div class="chip-name">${localizedName}</div>
      <div class="chip-sys">${localizedSys}</div>
    `;

    chip.addEventListener("click", () => {
      state.selectedCountry = country;
      navigateTo("screen-card");
    });

    countriesGridEl.appendChild(chip);
  });
}

// Screen 3: Render Selected Country Card Details
function renderCardScreen() {
  const dict = STRINGS[state.lang];

  // Translate screen header title
  const cardTitleEl = document.getElementById("card-title");
  if (cardTitleEl) {
    cardTitleEl.innerText = dict.countryDetails;
  }

  const container = document.getElementById("country-card-container");
  container.innerHTML = "";

  if (!state.selectedCountry) {
    container.innerHTML = `<p style="text-align:center; color: var(--text-muted);">No country selected.</p>`;
    return;
  }

  const country = state.selectedCountry;

  // Basic translations
  const localizedName = state.lang === "ar" ? (country.name?.ar || country.ar) : (country.name?.en || country.en);
  const localizedDesc = state.lang === "ar" ? (country.desc?.ar || "") : (country.desc?.en || "");
  const sysTranslationKey = `sys_${country.sys}`;
  const localizedSys = dict[sysTranslationKey] || country.sys;

  // Build role line dynamic translation with potential playerNote
  const playerTypeKey = `player_${country.player}`;
  const playerTranslation = dict[playerTypeKey] || country.player;

  let roleLineText = "";
  if (state.lang === "ar") {
    roleLineText = `دورك: ${playerTranslation}`;
    if (country.playerNote) {
      // If playerNote is localized or a string
      const note = typeof country.playerNote === "object"
        ? (country.playerNote.ar || country.playerNote.en || "")
        : country.playerNote;
      if (note) {
        roleLineText += ` (${note})`;
      }
    }
  } else {
    roleLineText = `Your Role: ${playerTranslation}`;
    if (country.playerNote) {
      const note = typeof country.playerNote === "object"
        ? (country.playerNote.en || country.playerNote.ar || "")
        : country.playerNote;
      if (note) {
        roleLineText += ` (${note})`;
      }
    }
  }

  // Create Card Hero and Header
  const heroDiv = document.createElement("div");
  heroDiv.className = "card-hero";
  heroDiv.innerHTML = `
    <div class="card-flag">${country.flag || "🏳️"}</div>
    <div class="card-country-name">${localizedName}</div>
    <div class="card-sys-badge">${localizedSys}</div>
  `;
  container.appendChild(heroDiv);

  // Description Paragraph
  if (localizedDesc) {
    const descPara = document.createElement("p");
    descPara.className = "card-desc";
    descPara.innerText = localizedDesc;
    container.appendChild(descPara);
  }

  // Role banner
  const roleDiv = document.createElement("div");
  roleDiv.className = "card-role-line";
  roleDiv.innerText = roleLineText;
  container.appendChild(roleDiv);

  // Facts Box (Dynamically show existing keys)
  const factsContainer = document.createElement("div");
  factsContainer.className = "card-facts";

  // List of fields that we can map and format:
  // "sys", "legType", "legPower", "jud", "mil", "parties", "federal", "terms", "royalCourt", "succession"
  const attributes = [
    { key: "sys", label: dict.sys, translateVal: (v) => dict[`sys_${v}`] || v },
    { key: "legType", label: dict.legType, translateVal: (v) => dict[`legType_${v}`] || v },
    { key: "legPower", label: dict.legPower, translateVal: (v) => dict[`legPower_${v}`] || v },
    { key: "jud", label: dict.jud, translateVal: (v) => dict[`jud_${v}`] || v },
    { key: "mil", label: dict.mil, translateVal: (v) => dict[`mil_${v}`] || v },
    { key: "parties", label: dict.parties, translateVal: (v) => dict[`parties_${v}`] || v },
    { key: "federal", label: dict.federal, translateVal: (v) => v ? dict.bool_yes : dict.bool_no },
    {
      key: "terms",
      label: dict.terms,
      translateVal: (v) => {
        if (Array.isArray(v) && v.length === 2) {
          return dict.terms_format.replace("{maxTerms}", v[0]).replace("{years}", v[1]);
        }
        return dict.terms_no_limit;
      }
    },
    { key: "royalCourt", label: dict.royalCourt, translateVal: (v) => dict[`royalCourt_${v}`] || v },
    { key: "succession", label: dict.succession, translateVal: (v) => dict[`succession_${v}`] || v }
  ];

  attributes.forEach(attr => {
    if (country[attr.key] !== undefined && country[attr.key] !== null) {
      const row = document.createElement("div");
      row.className = "fact-row";
      row.innerHTML = `
        <span class="fact-label">${attr.label}</span>
        <span class="fact-value">${attr.translateVal(country[attr.key])}</span>
      `;
      factsContainer.appendChild(row);
    }
  });

  container.appendChild(factsContainer);

  // Action Button "ابدأ الحكم ▶"
  const startBtn = document.createElement("button");
  startBtn.className = "start-rule-btn";
  startBtn.innerHTML = `<span>${dict.startRule}</span>`;
  startBtn.addEventListener("click", () => {
    navigateTo("screen-game");
  });
  container.appendChild(startBtn);
}

// Screen 4: Render Game Screen v1
function renderGameScreen() {
  const dict = STRINGS[state.lang];
  const topBar = document.getElementById("game-top-bar");

  if (!state.selectedCountry) {
    topBar.innerHTML = "";
    return;
  }

  const country = state.selectedCountry;
  const localizedName = state.lang === "ar" ? (country.name?.ar || country.ar) : (country.name?.en || country.en);
  const playerTypeKey = `player_${country.player}`;
  const playerTranslation = dict[playerTypeKey] || country.player;

  topBar.innerHTML = `
    <span class="game-flag">${country.flag || "🏳️"}</span>
    <div class="game-title-info">
      <span class="game-country-name">${localizedName}</span>
      <span class="game-player-role">${playerTranslation}</span>
    </div>
  `;

  // Determine starting stats for the country from profiles
  const profile = state.profiles[country.id];
  if (profile) {
    state.currentStats = {
      eco: profile.eco !== undefined ? profile.eco : 50,
      stb: profile.stb !== undefined ? profile.stb : 50,
      pop: profile.pop !== undefined ? profile.pop : 50,
      mil: profile.mil !== undefined ? profile.mil : 50,
      corr: profile.corr !== undefined ? profile.corr : 50
    };
  } else {
    // Fallback if no profile is loaded
    state.currentStats = { eco: 50, stb: 50, pop: 50, mil: 50, corr: 50 };
  }

  // Set initial UI elements
  updateStatsUI();

  // Load advisor settings from localStorage or default to local
  const savedAdvisor = localStorage.getItem("game_advisor") || "local";
  const advisorSelect = document.getElementById("advisor-select");
  if (advisorSelect) {
    advisorSelect.value = savedAdvisor;
  }

  const apiKeyInput = document.getElementById("api-key-input");
  if (apiKeyInput) {
    apiKeyInput.value = localStorage.getItem(`game_api_key_${savedAdvisor}`) || "";
    apiKeyInput.placeholder = dict.apiKeyPlaceholder.replace("{provider}", savedAdvisor.toUpperCase());
  }

  const apiKeyContainer = document.getElementById("api-key-container");
  if (apiKeyContainer) {
    apiKeyContainer.style.display = savedAdvisor === "local" ? "none" : "block";
  }

  const openrouterContainer = document.getElementById("openrouter-model-container");
  if (openrouterContainer) {
    openrouterContainer.style.display = savedAdvisor === "openrouter" ? "block" : "none";
  }

  const openrouterModelSelect = document.getElementById("openrouter-model-select");
  if (openrouterModelSelect) {
    openrouterModelSelect.value = localStorage.getItem("game_openrouter_model") || "x-ai/grok-3-mini";
  }

  // Reset decree input
  const decreeTextarea = document.getElementById("decree-textarea");
  if (decreeTextarea) {
    decreeTextarea.value = "";
    decreeTextarea.placeholder = dict.decreePlaceholder;
  }

  // Hide the previous result panel on initial render
  const resultPanel = document.getElementById("narrative-result-panel");
  if (resultPanel) {
    resultPanel.style.display = "none";
  }
}

/**
 * Updates UI stats progress bars & numeric texts
 */
function updateStatsUI() {
  const statsMap = {
    economy: state.currentStats.eco,
    stability: state.currentStats.stb,
    popularity: state.currentStats.pop,
    military: state.currentStats.mil,
    corruption: state.currentStats.corr
  };

  for (const [key, val] of Object.entries(statsMap)) {
    const bar = document.getElementById(`stat-bar-${key}`);
    const label = document.getElementById(`stat-val-${key}`);
    if (bar) {
      bar.style.width = `${val}%`;
    }
    if (label) {
      label.innerText = `${val}%`;
    }
  }
}

/**
 * Validates normalized output format
 */
function validateOutput(data) {
  if (!data) return false;
  if (typeof data.nar_ar !== "string" || data.nar_ar.trim() === "") return false;
  if (typeof data.nar_en !== "string" || data.nar_en.trim() === "") return false;
  if (!data.fx) return false;

  const keys = ["eco", "stb", "pop", "mil", "corr"];
  for (const k of keys) {
    const v = data.fx[k];
    if (typeof v !== "number" || isNaN(v)) return false;
    if (v < -15 || v > 15) return false;
  }

  return true;
}

/**
 * Formats provider name into clean badge title
 */
function getAdvisorBadgeLabel(provider, success) {
  const dict = STRINGS[state.lang];
  if (!success || provider === "local") {
    return dict.local_advisor_badge;
  }
  // Map remote provider to stylized label
  const pMap = {
    gemini: "🤖 Gemini",
    claude: "🤖 Claude",
    openai: "🤖 OpenAI",
    deepseek: "🤖 DeepSeek",
    openrouter: "🤖 OpenRouter"
  };
  return pMap[provider] || `🤖 ${provider.toUpperCase()}`;
}

/**
 * Handle Decree submit logic
 */
async function handleDecreeSubmit() {
  const dict = STRINGS[state.lang];
  const decreeTextarea = document.getElementById("decree-textarea");
  const submitBtn = document.getElementById("decree-submit-btn");
  const submitText = document.getElementById("btn-submit-text");
  const advisorSelect = document.getElementById("advisor-select");
  const orModelSelect = document.getElementById("openrouter-model-select");

  if (!decreeTextarea || !submitBtn || !state.selectedCountry) return;

  const decreeVal = decreeTextarea.value.trim();
  if (!decreeVal) return;

  const provider = advisorSelect ? advisorSelect.value : "local";
  const model = orModelSelect ? orModelSelect.value : "x-ai/grok-3-mini";
  const apiKey = localStorage.getItem(`game_api_key_${provider}`) || "";

  // Set submitting states
  decreeTextarea.disabled = true;
  submitBtn.disabled = true;
  if (submitText) {
    submitText.innerText = dict.submitting;
  }

  // Construct simulation payload
  const payload = {
    countryCard: state.selectedCountry,
    currentStats: state.currentStats,
    decree: decreeVal
  };

  let finalResult = null;
  let useFallback = false;

  if (provider === "local") {
    finalResult = window.runLocalSimulation(payload);
  } else {
    try {
      finalResult = await window.askAgent(provider, payload, apiKey, model);
      if (!validateOutput(finalResult)) {
        throw new Error("Invalid output received from advisor");
      }
    } catch (err) {
      console.warn("Error calling agent, falling back to local simulation:", err);
      useFallback = true;
      // Fail silently and run local simulation
      finalResult = window.runLocalSimulation(payload);
    }
  }

  // Apply narrative, badges and stats
  const resultPanel = document.getElementById("narrative-result-panel");
  const advisorBadge = document.getElementById("advisor-badge");
  const narrativeText = document.getElementById("narrative-text");
  const effectsBadgeRow = document.getElementById("effects-badge-row");

  if (resultPanel) {
    resultPanel.style.display = "block";
  }

  // Set Badge
  if (advisorBadge) {
    advisorBadge.innerText = getAdvisorBadgeLabel(provider, !useFallback);
    // Style badge differently for fallback
    if (useFallback && provider !== "local") {
      advisorBadge.classList.add("fallback-badge");
      advisorBadge.title = dict.err_api;
    } else {
      advisorBadge.classList.remove("fallback-badge");
      advisorBadge.removeAttribute("title");
    }
  }

  // Set Narrative Text based on current active language
  if (narrativeText) {
    const textVal = state.lang === "ar" ? finalResult.nar_ar : finalResult.nar_en;
    narrativeText.innerText = textVal;
  }

  // Render change effects badges
  if (effectsBadgeRow) {
    effectsBadgeRow.innerHTML = "";
    const statLabels = {
      eco: "💰",
      stb: "⚖️",
      pop: "📣",
      mil: "🎖️",
      corr: "😈"
    };

    for (const [k, v] of Object.entries(finalResult.fx)) {
      if (v !== 0) {
        const badgeSpan = document.createElement("span");
        const sign = v > 0 ? "+" : "";
        badgeSpan.className = `effect-badge ${v > 0 ? "positive" : "negative"}`;
        badgeSpan.innerText = `${statLabels[k] || ""} ${sign}${v}`;
        effectsBadgeRow.appendChild(badgeSpan);
      }
    }
  }

  // Apply stat impacts & clamp between [0, 100]
  state.currentStats.eco = Math.min(100, Math.max(0, state.currentStats.eco + finalResult.fx.eco));
  state.currentStats.stb = Math.min(100, Math.max(0, state.currentStats.stb + finalResult.fx.stb));
  state.currentStats.pop = Math.min(100, Math.max(0, state.currentStats.pop + finalResult.fx.pop));
  state.currentStats.mil = Math.min(100, Math.max(0, state.currentStats.mil + finalResult.fx.mil));
  state.currentStats.corr = Math.min(100, Math.max(0, state.currentStats.corr + finalResult.fx.corr));

  // Update UI progress bars
  updateStatsUI();

  // Reset submit buttons states
  decreeTextarea.disabled = false;
  submitBtn.disabled = false;
  if (submitText) {
    submitText.innerText = dict.submit_decree;
  }
}

/**
 * Game Engine Configuration and Scripting
 * Handles localizations, asynchronous file fetching and merging, UI rendering, search logic,
 * single page application (SPA) screen toggles, and decree-driven simulation progression.
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

    // New strings for simulation
    decreePanelTitle: "ديوان القرارات",
    issueDecreeBtn: "أصدر المرسوم",
    chipEconomic: "اقتصادي",
    chipSecurity: "أمني",
    chipDiplomatic: "دبلوماسي",
    chipReform: "إصلاح سياسي",
    eventLogTitle: "📜 سجل الأحداث",
    yearLabel: "السنة",
    finalStatsLabel: "الإحصائيات النهائية:",
    replayBtn: "إعادة اللعب",
    decreePlaceholder: "اكتب مرسومك... مثال: مرسوم بدعم الخبز وخفض الضرائب",

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

    // New strings for simulation
    decreePanelTitle: "Decree Council",
    issueDecreeBtn: "Issue Decree",
    chipEconomic: "Economic",
    chipSecurity: "Security",
    chipDiplomatic: "Diplomatic",
    chipReform: "Political Reform",
    eventLogTitle: "📜 Event Log",
    yearLabel: "Year",
    finalStatsLabel: "Final Stats:",
    replayBtn: "Replay",
    decreePlaceholder: "Write your decree... e.g. Decree to subsidize bread and lower taxes",

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
  profiles: {}, // Loaded profiles from data/profiles.json
  currentScreen: "screen-home",
  activeFamily: null, // "republic" or "monarchy" or "search"
  selectedCountry: null,
  searchQuery: "",
  gameState: null // Current active game state
};

// Files to fetch
const DATA_FILES = [
  "data/monarchies.json",
  "data/republics_africa.json",
  "data/republics_americas_oceania.json",
  "data/republics_asia.json",
  "data/republics_europe.json"
];

// Quick Chips Suggestions
const CHIP_SUGGESTIONS = {
  ar: {
    economic: "مرسوم لدعم السلع الأساسية وتنشيط التجارة",
    security: "مرسوم لتعزيز الأمن ومكافحة الشغب في المدن",
    diplomatic: "مرسوم لتوقيع معاهدة تجارية وتسهيل حركة المرور",
    reform: "مرسوم لإجراء إصلاحات سياسية وتعزيز دور المجتمع المدني"
  },
  en: {
    economic: "Decree to subsidize basic goods and boost trade",
    security: "Decree to enhance security and crack down on riots in cities",
    diplomatic: "Decree to sign a trade treaty and ease border crossings",
    reform: "Decree to enact political reforms and empower civil society"
  }
};

// Synonym Sets for classification
const SYNONYMS = {
  spend: {
    ar: ["دعم", "زيادة الرواتب", "إنفاق", "سلع", "خبز", "توظيف", "رواتب", "معاشات", "مساعدات", "رعاية", "منح", "مجاني", "تمويل", "بناء", "خدمات", "مستشفيات", "مدارس"],
    en: ["subsidize", "subsidy", "spend", "increase salaries", "salaries", "welfare", "funding", "grants", "free", "aid", "pension", "invest", "infrastructure", "healthcare", "education", "schools", "hospitals"]
  },
  austerity: {
    ar: ["تقشف", "خفض الإنفاق", "زيادة الضرائب", "ضرائب", "ضريبة", "رسوم", "ترشيد", "تجميد", "تقليل الميزانية", "رفع الدعم", "ضرائب جديدة"],
    en: ["austerity", "taxes", "tax", "increase taxes", "lower subsidies", "cut spending", "freeze", "reduce budget", "taxation", "budget cut", "reduce deficit"]
  },
  crackdown: {
    ar: ["أمني", "مكافحة", "قمع", "اعتقال", "حظر التجول", "شغب", "طوارئ", "اعتقالات", "فض", "عنف", "تفتيش", "شرطة", "قوات الأمن", "حظر"],
    en: ["crackdown", "police", "arrest", "curfew", "security operations", "emergency", "suppress", "combat riots", "ban", "detain", "riot", "protest"]
  },
  military_build: {
    ar: ["جيش", "تسليح", "قوات", "صواريخ", "دبابات", "عسكري", "الدفاع", "شراء أسلحة", "صفقات سلاح", "تدريب عسكري", "مناورات", "تعبئة", "عتاد", "طائرات حربية"],
    en: ["military", "army", "arms", "weapons", "tank", "fighter jet", "missile", "spending", "defense", "rearmament", "soldiers", "navy", "airforce", "warship"]
  },
  diplomacy: {
    ar: ["دبلوماسي", "سفارة", "معاهدة", "سفير", "علاقات", "تحالف", "اتفاقية", "سلام", "وساطة", "مفاوضات", "قمة", "تعاون دولي", "اتفاق"],
    en: ["diplomacy", "treaty", "embassy", "ambassador", "relations", "alliance", "peace", "summit", "negotiation", "bilateral", "pact", "cooperation", "foreign affairs"]
  },
  anti_corruption: {
    ar: ["فساد", "مكافحة الفساد", "نزاهة", "محاسبة", "محاكمة الفاسدين", "مراقبة", "اعتقال الفاسدين", "كشف الفساد", "شفافية", "قوانين النزاهة", "استرداد الأموال"],
    en: ["corruption", "anti-corruption", "transparency", "accountability", "fight corruption", "prosecute", "integrity", "audit", "anti corruption", "graft", "embezzlement"]
  },
  power_grab: {
    ar: ["صلاحيات", "تعديل الدستور", "تمديد", "حل البرلمان", "السيطرة", "تركيز السلطة", "مرسوم رئاسي", "تعيين", "سلطات واسعة", "إلغاء الانتخابات", "حالة طوارئ مطلقة", "حصانة"],
    en: ["power grab", "constitutional amendment", "extend term", "dissolve parliament", "absolute power", "decree power", "consolidate power", "cancel elections", "veto", "dissolve", "bypass"]
  }
};

// Economic Sectors Deterministic Classifier
const SECTORS = ['resources', 'industry', 'trade', 'agriculture', 'services'];
function getCountrySector(country) {
  const explicit = {
    'sa': 'resources', 'dz': 'resources', 'ao': 'resources', 'iq': 'resources', 'kw': 'resources', 'qa': 'resources', 'ae': 'resources', 'om': 'resources', 'bh': 'resources', 'ly': 'resources',
    'cn': 'industry', 'de': 'industry', 'jp': 'industry', 'kr': 'industry', 'us': 'industry', 'it': 'industry', 'fr': 'industry',
    'sg': 'trade', 'nl': 'trade', 'pa': 'trade', 'hk': 'trade', 'gb': 'trade',
    'ua': 'agriculture', 'br': 'agriculture', 'in': 'agriculture', 'vn': 'agriculture', 'eg': 'agriculture',
    'ch': 'services', 'ky': 'services', 'lu': 'services', 'es': 'services'
  };
  if (explicit[country.id]) return explicit[country.id];

  let hash = 0;
  for (let i = 0; i < country.id.length; i++) {
    hash += country.id.charCodeAt(i);
  }
  return SECTORS[hash % SECTORS.length];
}

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
  const appTitleEl = document.getElementById("app-title");
  if (appTitleEl) appTitleEl.innerText = dict.appTitle;

  // Search placeholder
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.placeholder = dict.searchPlaceholder;
  }

  // Family Buttons Labels & Static data-key elements
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  // Textarea placeholder
  const decreeInput = document.getElementById("decree-input");
  if (decreeInput) {
    decreeInput.placeholder = dict.decreePlaceholder;
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

  // Load profiles.json fallback to 50
  try {
    const res = await fetch("data/profiles.json");
    if (res.ok) {
      state.profiles = await res.json();
      console.log("Loaded profiles successfully.");
    } else {
      console.warn("Could not load profiles.json (Status: " + res.status + ") - falling back to 50.");
    }
  } catch (err) {
    console.warn("Failed fetching profiles.json - falling back to 50:", err);
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

  // Setup Quick Chips click event
  document.querySelectorAll(".quick-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const type = chip.getAttribute("data-chip");
      const text = CHIP_SUGGESTIONS[state.lang][type];
      const decreeInput = document.getElementById("decree-input");
      if (decreeInput && text) {
        decreeInput.value = text;
      }
    });
  });

  // Issue Decree Button click event
  const issueBtn = document.getElementById("issue-decree-btn");
  if (issueBtn) {
    issueBtn.addEventListener("click", handleIssueDecree);
  }

  // Replay button click event
  const replayBtn = document.getElementById("replay-btn");
  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      if (state.selectedCountry) {
        localStorage.removeItem(`game_save_${state.selectedCountry.id}`);
        initGameSession(state.selectedCountry);
        navigateTo("screen-game");
      }
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
    case "screen-ending":
      renderEndingScreen();
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
    initGameSession(country);
    navigateTo("screen-game");
  });
  container.appendChild(startBtn);
}

// Initialize active game session (stats, corruption, year, log)
function initGameSession(country) {
  const saved = localStorage.getItem(`game_save_${country.id}`);
  if (saved) {
    try {
      state.gameState = JSON.parse(saved);
      return;
    } catch (e) {
      console.error("Failed to parse saved game state, starting fresh", e);
    }
  }

  // Fallback to profiles.json, otherwise 50
  let profile = {};
  if (Array.isArray(state.profiles)) {
    profile = state.profiles.find(p => p.id === country.id) || {};
  } else if (state.profiles && typeof state.profiles === "object") {
    profile = state.profiles[country.id] || {};
  }

  const ecoVal = profile.eco !== undefined ? profile.eco : (profile.economy !== undefined ? profile.economy : 50);
  const stbVal = profile.stb !== undefined ? profile.stb : (profile.stability !== undefined ? profile.stability : 50);
  const popVal = profile.pop !== undefined ? profile.pop : (profile.popularity !== undefined ? profile.popularity : 50);
  const milVal = profile.mil !== undefined ? profile.mil : (profile.military !== undefined ? profile.military : 50);
  const corrVal = profile.corr !== undefined ? profile.corr : (profile.corruption !== undefined ? profile.corruption : 50);

  state.gameState = {
    countryId: country.id,
    stats: {
      economy: ecoVal,
      stability: stbVal,
      popularity: popVal,
      military: milVal,
      corruption: corrVal
    },
    year: 1,
    decreeCount: 0,
    log: []
  };
  saveGameSession();
}

function saveGameSession() {
  if (state.gameState && state.selectedCountry) {
    localStorage.setItem(`game_save_${state.selectedCountry.id}`, JSON.stringify(state.gameState));
  }
}

// Screen 4: Render Game Screen
function renderGameScreen() {
  const dict = STRINGS[state.lang];
  const topBar = document.getElementById("game-top-bar");

  if (!state.selectedCountry || !state.gameState) {
    topBar.innerHTML = "";
    return;
  }

  const country = state.selectedCountry;
  const gs = state.gameState;

  const localizedName = state.lang === "ar" ? (country.name?.ar || country.ar) : (country.name?.en || country.en);
  const playerTypeKey = `player_${country.player}`;
  const playerTranslation = dict[playerTypeKey] || country.player;

  // Add Year Label to top bar dynamically
  const yearText = state.lang === "ar" ? `السنة ${gs.year}` : `Year ${gs.year}`;

  topBar.innerHTML = `
    <span class="game-flag">${country.flag || "🏳️"}</span>
    <div class="game-title-info">
      <span class="game-country-name">${localizedName} (${yearText})</span>
      <span class="game-player-role">${playerTranslation}</span>
    </div>
  `;

  // Update progress bars
  const statKeys = ["economy", "stability", "popularity", "military", "corruption"];
  statKeys.forEach(stat => {
    const val = gs.stats[stat];
    const bar = document.getElementById(`stat-bar-${stat}`);
    const label = document.getElementById(`stat-val-${stat}`);
    if (bar) bar.style.width = `${val}%`;
    if (label) label.innerText = `${val}%`;
  });

  // Render log
  const logContainer = document.getElementById("event-log-container");
  if (logContainer) {
    logContainer.innerHTML = "";
    if (gs.log.length === 0) {
      const emptyMsg = document.createElement("p");
      emptyMsg.style.textAlign = "center";
      emptyMsg.style.color = "var(--text-muted)";
      emptyMsg.style.fontSize = "0.9rem";
      emptyMsg.innerText = state.lang === "ar" ? "لا توجد مراسيم صادرة بعد." : "No decrees issued yet.";
      logContainer.appendChild(emptyMsg);
    } else {
      // Show log in reverse chronological order
      const reversedLog = [...gs.log].reverse();
      reversedLog.forEach(entry => {
        const row = document.createElement("div");
        row.className = "log-entry";

        const titleText = state.lang === "ar" ? `السنة ${entry.year}: ${escapeHTML(entry.decreeText)}` : `Year ${entry.year}: ${escapeHTML(entry.decreeText)}`;
        const narrative = state.lang === "ar" ? entry.narrativeAr : entry.narrativeEn;
        const effectStr = state.lang === "ar" ? entry.effectAr : entry.effectEn;

        row.innerHTML = `
          <div class="log-entry-year">${titleText}</div>
          <div class="log-entry-text">${narrative}</div>
          <div class="log-entry-effect">${effectStr}</div>
        `;
        logContainer.appendChild(row);
      });
    }
  }

  // Clear inputs
  const decreeInput = document.getElementById("decree-input");
  if (decreeInput) decreeInput.value = "";
}

// Handle Issuing a Decree
function handleIssueDecree() {
  const decreeInput = document.getElementById("decree-input");
  if (!decreeInput) return;

  const text = decreeInput.value.trim();
  if (!text) {
    alert(state.lang === "ar" ? "من فضلك اكتب نص المرسوم أولاً!" : "Please write a decree first!");
    return;
  }

  const country = state.selectedCountry;
  const gs = state.gameState;
  if (!country || !gs) return;

  // Classify Decree
  const category = classifyDecree(text);

  // Setup base modifications
  let eco_ch = 0;
  let stb_ch = 0;
  let pop_ch = 0;
  let mil_ch = 0;
  let corr_ch = 0;

  let extraLinesAr = [];
  let extraLinesEn = [];

  const corrFactor = 1 - (gs.stats.corruption / 200);

  switch (category) {
    case "spend":
      pop_ch = Math.round(15 * corrFactor);
      stb_ch = Math.round(10 * corrFactor);
      eco_ch = -15;
      break;

    case "austerity":
      eco_ch = 15;
      pop_ch = -15;
      break;

    case "crackdown":
      stb_ch = 15;
      pop_ch = -15;
      if (country.jud === "high") {
        pop_ch -= 8;
        extraLinesAr.push("⚖️ القضاء المستقل يدين استخدام القوة المفرطة ويعتبر التدابير غير دستورية!");
        extraLinesEn.push("⚖️ The independent judiciary condemns the excessive use of force and declares the measures unconstitutional!");
      }
      break;

    case "military_build":
      mil_ch = 15;
      eco_ch = -12;
      break;

    case "diplomacy":
      stb_ch = 12;
      const sector = getCountrySector(country);
      if (sector === "trade" || sector === "services") {
        eco_ch = 10;
      } else {
        eco_ch = 3;
      }
      break;

    case "anti_corruption":
      corr_ch = -15;
      if (country.royalCourt === "high" || country.sys === "one_party" || country.mil === "mixed" || country.mil === "military") {
        stb_ch = -15;
        extraLinesAr.push("⚠️ النخبة الحاكمة ومراكز القوى تقاوم تدابير مكافحة الفساد، مما يثير اضطرابات داخلية!");
        extraLinesEn.push("⚠️ The ruling elites and power centers resist the anti-corruption measures, stirring internal instability!");
      }
      break;

    case "power_grab":
      stb_ch = 15;
      pop_ch = -15;
      if (country.legPower === "high") {
        stb_ch -= 5;
        pop_ch -= 5;
        extraLinesAr.push("🗳️ البرلمان ذو السلطة العالية يعترض على تركيز السلطة، وهناك خطر متزايد لسحب الثقة!");
        extraLinesEn.push("🗳️ The high-power parliament objects to the concentration of power, posing an imminent risk of a no-confidence vote!");
      }
      if (country.jud === "high") {
        stb_ch -= 5;
        extraLinesAr.push("⚖️ القضاة المستقلون يعلنون إضراباً عاماً احتجاجاً على المساس بالدستور وفصل السلطات!");
        extraLinesEn.push("⚖️ Independent judges declare a nationwide strike in protest against the constitutional violations and erosion of separation of powers!");
      }
      break;

    case "unknown":
    default:
      // small drift -3 to +3
      eco_ch = Math.floor(Math.random() * 7) - 3;
      stb_ch = Math.floor(Math.random() * 7) - 3;
      pop_ch = Math.floor(Math.random() * 7) - 3;
      mil_ch = Math.floor(Math.random() * 7) - 3;
      corr_ch = Math.floor(Math.random() * 7) - 3;
      break;
  }

  // Category Narratives
  const NARRATIVES = {
    spend: {
      ar: "تم إصدار مرسوم بزيادة الإنفاق الاجتماعي ودعم السلع الأساسية لمساعدة المواطنين.",
      en: "Issued a decree increasing social spending and subsidizing basic goods to assist citizens."
    },
    austerity: {
      ar: "تم فرض إجراءات تقشفية صارمة لخفض عجز الموازنة العامة وحماية العملة.",
      en: "Enforced strict austerity measures to reduce the budget deficit and protect the currency."
    },
    crackdown: {
      ar: "تم إعلان حملة أمنية واسعة النطاق لفرض النظام العام والحد من التجمعات والاحتجاجات.",
      en: "Declared a large-scale security crackdown to enforce public order and limit assemblies and protests."
    },
    military_build: {
      ar: "تم تخصيص اعتمادات إضافية لشراء الأسلحة وتحديث المعدات ورفع جاهزية القوات المسلحة.",
      en: "Allocated additional funds for weapon procurement, equipment modernization, and military readiness."
    },
    diplomacy: {
      ar: "تم توقيع اتفاقيات دبلوماسية جديدة لتعزيز مكانة الدولة وتوطيد العلاقات الدولية.",
      en: "Signed new diplomatic treaties to elevate the state's status and strengthen international relations."
    },
    anti_corruption: {
      ar: "تم إطلاق حملة نزاهة وطنية لملاحقة قضايا الرشوة ومراجعة العقود الحكومية المشبوهة.",
      en: "Launched a national integrity campaign to prosecute bribery cases and audit suspicious government contracts."
    },
    power_grab: {
      ar: "تم تفعيل مراسيم استثنائية لتركيز الصلاحيات وتعديل القواعد لتوسيع نفوذ السلطة التنفيذية.",
      en: "Activated exceptional decrees to centralize authority and amend rules to expand executive power."
    },
    unknown: {
      ar: "❓ المرسوم غير واضح أو غير مصنف. البيروقراطية تواجه صعوبة في التنفيذ وتطلب توجيهات أكثر وضوحاً.",
      en: "❓ The decree is ambiguous or unclassified. The bureaucracy struggles to implement it and requests clearer orders."
    }
  };

  // Econ-flavor lines
  const ECON_FLAVORS = {
    resources: {
      ar: "🛢️ تقلبات أسعار الموارد في الأسواق العالمية تؤثر على الميزانية العامة.",
      en: "🛢️ Volatility in resource prices in global markets impacts the national budget."
    },
    industry: {
      ar: "🏭 المصانع الوطنية تسجل مستويات إنتاج جديدة تماشياً مع خطة التطوير.",
      en: "🏭 National factories record new output levels in line with the development plan."
    },
    trade: {
      ar: "🚢 حركة الملاحة في الموانئ التجارية تسجل نشاطاً قياسياً هذا العام.",
      en: "🚢 Shipping traffic at commercial ports records peak activity this year."
    },
    agriculture: {
      ar: "🌾 تقارير مواسم الحصاد تشير إلى إنتاج زراعي مستقر يغطي الاحتياجات الأساسية.",
      en: "🌾 Harvest season reports indicate stable agricultural yields covering basic needs."
    },
    services: {
      ar: "📈 قطاع الخدمات والسياحة يسجل نمواً ملحوظاً مع بداية الموسم الجديد.",
      en: "📈 The services and tourism sector registers solid growth at the start of the new season."
    }
  };

  const cSector = getCountrySector(country);
  const econFlavorAr = ECON_FLAVORS[cSector].ar;
  const econFlavorEn = ECON_FLAVORS[cSector].en;

  // Build narrative
  let finalNarrativeAr = NARRATIVES[category].ar;
  let finalNarrativeEn = NARRATIVES[category].en;

  if (extraLinesAr.length > 0) {
    finalNarrativeAr += " " + extraLinesAr.join(" ");
    finalNarrativeEn += " " + extraLinesEn.join(" ");
  }

  // Append economic flavor line
  finalNarrativeAr += " " + econFlavorAr;
  finalNarrativeEn += " " + econFlavorEn;

  // Apply changes with clamping 0-100
  gs.stats.economy = Math.max(0, Math.min(100, gs.stats.economy + eco_ch));
  gs.stats.stability = Math.max(0, Math.min(100, gs.stats.stability + stb_ch));
  gs.stats.popularity = Math.max(0, Math.min(100, gs.stats.popularity + pop_ch));
  gs.stats.military = Math.max(0, Math.min(100, gs.stats.military + mil_ch));
  gs.stats.corruption = Math.max(0, Math.min(100, gs.stats.corruption + corr_ch));

  // Construct effect line
  const formatChange = (val, symbol) => {
    if (val === 0) return "";
    return `${symbol} ${val > 0 ? "+" : ""}${val}`;
  };

  const effects = [
    formatChange(eco_ch, "💰"),
    formatChange(stb_ch, "⚖️"),
    formatChange(pop_ch, "📣"),
    formatChange(mil_ch, "🎖️"),
    formatChange(corr_ch, "🛑")
  ].filter(Boolean).join(" | ");

  const effectAr = effects || "لا توجد تأثيرات مباشرة على المؤشرات العامة.";
  const effectEn = effects || "No direct impacts on main indicators.";

  // Save to Log
  gs.log.push({
    year: gs.year,
    decreeText: text,
    narrativeAr: finalNarrativeAr,
    narrativeEn: finalNarrativeEn,
    effectAr: effectAr,
    effectEn: effectEn
  });

  // Increment year & decree count
  gs.year += 1;
  gs.decreeCount += 1;

  // Save State
  saveGameSession();

  // Re-render game screen to animate bars and display log
  renderGameScreen();

  // Check Endings
  setTimeout(() => {
    checkGameEndings();
  }, 400); // Small timeout to allow transition/animations to complete
}

// Check Endings (stats 0, corruption >= 90, or after 10 decrees)
function checkGameEndings() {
  const gs = state.gameState;
  if (!gs) return;

  // 1. Instantly trigger collapse/fall if any stat reaches 0 or corr >= 90
  if (gs.stats.economy <= 0) {
    triggerEnding("collapse_economy");
  } else if (gs.stats.stability <= 0) {
    triggerEnding("collapse_stability");
  } else if (gs.stats.popularity <= 0) {
    triggerEnding("collapse_popularity");
  } else if (gs.stats.military <= 0) {
    triggerEnding("collapse_military");
  } else if (gs.stats.corruption >= 90) {
    triggerEnding("collapse_corruption");
  } else if (gs.decreeCount >= 10) {
    // 2. Win or Tenure end after 10 decrees
    if (gs.stats.economy >= 70 && gs.stats.stability >= 70 && gs.stats.popularity >= 70 && gs.stats.corruption < 30) {
      triggerEnding("historical_leader");
    } else if (gs.stats.popularity < 40) {
      triggerEnding("hated_leader");
    } else if (gs.stats.economy < 40) {
      triggerEnding("bankrupt_treasury");
    } else if (gs.stats.stability < 40) {
      triggerEnding("lost_control");
    } else if (gs.stats.military < 40) {
      triggerEnding("palace_coup");
    } else {
      triggerEnding("political_survivor");
    }
  }
}

// Trigger specific ending screen
function triggerEnding(endingId) {
  state.currentEndingId = endingId;
  navigateTo("screen-ending");
}

// Screen 5: Render Ending Screen
function renderEndingScreen() {
  const dict = STRINGS[state.lang];
  const gs = state.gameState;
  const endingId = state.currentEndingId;

  if (!gs || !endingId) return;

  // Clear save game when ending is reached
  if (state.selectedCountry) {
    localStorage.removeItem(`game_save_${state.selectedCountry.id}`);
  }

  const ENDING_DETAILS = {
    collapse_economy: {
      icon: "💸",
      title: { ar: "خزينة مفلسة / انهيار اقتصادي", en: "Bankrupt Treasury / Economic Collapse" },
      desc: {
        ar: "أفلست الخزينة العامة وعجزت الدولة عن دفع الرواتب والديون، مما أدى إلى انهيار اقتصادي كامل وسقوط نظام الحكم.",
        en: "The public treasury went bankrupt and the state failed to pay salaries or debts, leading to a complete economic collapse and system fall."
      }
    },
    collapse_stability: {
      icon: "🔥",
      title: { ar: "فوضى عارمة واضطراب عام", en: "Total Chaos and Disruption" },
      desc: {
        ar: "تلاشت هيبة الدولة وانتشرت الفوضى والنزاعات المسلحة في المدن، وفقدت السلطة السيطرة تماماً على مفاصل الحكم.",
        en: "State authority vanished, and armed conflicts and chaos spread through cities, leaving the government entirely powerless."
      }
    },
    collapse_popularity: {
      icon: "📢",
      title: { ar: "ثورة شعبية كبرى", en: "Great Popular Revolution" },
      desc: {
        ar: "خرجت الجماهير الغاضبة إلى الشوارع في احتجاجات عارمة أطاحت بنظام الحكم بالكامل بسبب تدهور أحوالهم المعيشية.",
        en: "Furious crowds flooded the streets in massive protests, completely overthrowing the ruling regime due to deteriorating life conditions."
      }
    },
    collapse_military: {
      icon: "⚔️",
      title: { ar: "انقلاب عسكري مطبق", en: "Direct Military Coup" },
      desc: {
        ar: "أصبح الجيش ضعيفاً للغاية وعاجزاً عن حماية الدولة، مما شجع قادة الوحدات على التحرك والانقلاب على سلطتك.",
        en: "The military became extremely weak and unable to protect the state, encouraging division commanders to depose your rule."
      }
    },
    collapse_corruption: {
      icon: "🛑",
      title: { ar: "انهيار مؤسساتي", en: "Institutional Collapse" },
      desc: {
        ar: "استشرى الفساد في مفاصل الدولة بالكامل وتلاشت فاعلية المؤسسات، مما أدى إلى سقوط نظام الحكم والتحكم النخبوي.",
        en: "Corruption completely consumed all state organs and institutional efficacy vanished, triggering a total collapse of the system."
      }
    },
    historical_leader: {
      icon: "👑",
      title: { ar: "قائد تاريخي عظيم", en: "Great Historical Leader" },
      desc: {
        ar: "لقد حفرت اسمك بمداد من ذهب كأحد أعظم القادة الذين حققوا الرخاء الاقتصادي والأمن ومحاربة الفساد بكفاءة نادرة.",
        en: "You have engraved your name in gold as one of the greatest leaders, achieving economic prosperity, security, and integrity."
      }
    },
    hated_leader: {
      icon: "👿",
      title: { ar: "مكروه من الشعب", en: "Hated by the People" },
      desc: {
        ar: "نجحت في الحفاظ على استقرار مؤسسات الدولة ولكن الشعب يحمل لك ضغينة كبيرة بسبب سياستك الصارمة والتقشف المفرط.",
        en: "The state stabilized, but the people bear immense resentment towards you due to your harsh and austere policies."
      }
    },
    bankrupt_treasury: {
      icon: "📉",
      title: { ar: "خزينة مفلسة", en: "Bankrupt Treasury" },
      desc: {
        ar: "رغم شعبيتك الكبيرة واستقرار الحكم، إلا أن خزينة الدولة أفرغت تماماً وأصبحت البلاد على حافة الانهيار المالي الشامل.",
        en: "Despite your popularity and stability, the state treasury has been entirely drained, placing the country on the verge of financial collapse."
      }
    },
    lost_control: {
      icon: "🌀",
      title: { ar: "فاقد السيطرة والقيادة", en: "Lost Control" },
      desc: {
        ar: "فقدت التحكم في مفاصل الدولة والوزارات وانتشرت الاضطرابات الداخلية في الأقاليم، رغم شعبية بعض قراراتك الاجتماعية.",
        en: "You lost control of state institutions, and internal disturbances spread despite the popularity of some of your decrees."
      }
    },
    palace_coup: {
      icon: "🏰",
      title: { ar: "انقلاب في القصر", en: "Palace Coup" },
      desc: {
        ar: "نجحت في الحفاظ على تماسك الاقتصاد، لكن إهمالك الطويل للمؤسسة العسكرية دفع القادة لعزلك في انقلاب صامت داخل القصر.",
        en: "You managed to protect the economy, but neglecting the military apparatus prompted commanders to depose you in a silent coup."
      }
    },
    political_survivor: {
      icon: "🛡️",
      title: { ar: "ناجٍ سياسي محنك", en: "Political Survivor" },
      desc: {
        ar: "لقد واجهت العواصف وتغلبت على الأزمات المعقدة لتنهي فترة حكمك بنجاح نسبي، مبرهناً على براعة سياسية كبيرة.",
        en: "You weathered the storms and navigated complex crises, successfully finishing your reign, showing robust political capability."
      }
    }
  };

  const end = ENDING_DETAILS[endingId] || ENDING_DETAILS.political_survivor;

  // Set values
  document.querySelector(".ending-icon").innerText = end.icon;
  document.getElementById("ending-title").innerText = state.lang === "ar" ? end.title.ar : end.title.en;
  document.getElementById("ending-desc").innerText = state.lang === "ar" ? end.desc.ar : end.desc.en;

  // Years value
  // Years governed is count of decrees issued
  document.getElementById("ending-years-val").innerText = gs.decreeCount;

  // Draw final stats summary
  const summaryEl = document.getElementById("ending-stats-summary");
  if (summaryEl) {
    summaryEl.innerHTML = "";
    const statsMeta = [
      { key: "economy", icon: "💰", name: dict.economy },
      { key: "stability", icon: "⚖️", name: dict.stability },
      { key: "popularity", icon: "📣", name: dict.popularity },
      { key: "military", icon: "🎖️", name: dict.military },
      { key: "corruption", icon: "🛑", name: dict.corruption }
    ];

    statsMeta.forEach(meta => {
      const item = document.createElement("div");
      item.className = "ending-summary-item";
      item.innerHTML = `
        <span class="ending-summary-label">${meta.icon} ${meta.name}</span>
        <span class="ending-summary-val">${gs.stats[meta.key]}%</span>
      `;
      summaryEl.appendChild(item);
    });
  }
}

// Escapes HTML special characters to prevent Self-XSS
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Simple deterministic synonym-based classifier
function classifyDecree(text) {
  const t = text.toLowerCase().trim();
  if (!t) return "unknown";

  const scores = {
    spend: 0,
    austerity: 0,
    crackdown: 0,
    military_build: 0,
    diplomacy: 0,
    anti_corruption: 0,
    power_grab: 0
  };

  for (const category of Object.keys(SYNONYMS)) {
    // Check Arabic synonyms
    for (const syn of SYNONYMS[category].ar) {
      if (t.includes(syn.toLowerCase())) {
        scores[category] += 1;
      }
    }
    // Check English synonyms
    for (const syn of SYNONYMS[category].en) {
      if (t.includes(syn.toLowerCase())) {
        scores[category] += 1;
      }
    }
  }

  let bestCategory = "unknown";
  let maxScore = 0;

  for (const category of Object.keys(scores)) {
    if (scores[category] > maxScore) {
      maxScore = scores[category];
      bestCategory = category;
    }
  }

  return bestCategory;
}

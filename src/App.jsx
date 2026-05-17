import { useState } from "react";
import klaroLogo from "./assets/klaro-logo-white.png";

const colors = {
  navy: "#0F2744",
  blueMid: "#1E6FA4",
  gold: "#B8943F",
  carbon: "#1A1A2E",
  grayMid: "#5A6577",
  grayCool: "#F4F6F9",
  white: "#FFFFFF",
  greenTint: "#D6F0E2",
  whatsapp: "#25D366",
};

const categoryIcons = {
  laptop: (
    <svg viewBox="0 0 80 80" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="16" width="52" height="34" rx="3" stroke="#0F2744" strokeWidth="2.5"/>
      <rect x="18" y="20" width="44" height="26" rx="1.5" fill="#E8F0FE"/>
      <path d="M8 52h64l-4 8H12l-4-8z" stroke="#0F2744" strokeWidth="2.5" fill="#F4F6F9"/>
      <rect x="34" y="54" width="12" height="2" rx="1" fill="#B8943F"/>
    </svg>
  ),
  desktop: (
    <svg viewBox="0 0 80 80" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="10" width="56" height="38" rx="3" stroke="#0F2744" strokeWidth="2.5"/>
      <rect x="16" y="14" width="48" height="30" rx="1.5" fill="#E8F0FE"/>
      <rect x="34" y="48" width="12" height="8" stroke="#0F2744" strokeWidth="2"/>
      <rect x="26" y="56" width="28" height="4" rx="2" stroke="#0F2744" strokeWidth="2"/>
      <circle cx="40" cy="46" r="1.5" fill="#B8943F"/>
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 80 80" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="64" height="40" rx="3" stroke="#0F2744" strokeWidth="2.5"/>
      <rect x="12" y="16" width="56" height="32" rx="1.5" fill="#E8F0FE"/>
      <rect x="32" y="52" width="16" height="8" stroke="#0F2744" strokeWidth="2"/>
      <rect x="24" y="60" width="32" height="4" rx="2" stroke="#0F2744" strokeWidth="2"/>
      <polygon points="34,30 34,40 42,35" fill="#B8943F" opacity="0.6"/>
    </svg>
  ),
  smartphone: (
    <svg viewBox="0 0 80 80" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="6" width="36" height="68" rx="6" stroke="#0F2744" strokeWidth="2.5"/>
      <rect x="26" y="16" width="28" height="44" rx="2" fill="#E8F0FE"/>
      <rect x="34" y="10" width="12" height="3" rx="1.5" fill="#D0D7E2"/>
      <circle cx="40" cy="66" r="3" stroke="#B8943F" strokeWidth="2" fill="none"/>
    </svg>
  ),
  tablet: (
    <svg viewBox="0 0 80 80" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="8" width="52" height="64" rx="5" stroke="#0F2744" strokeWidth="2.5"/>
      <rect x="18" y="16" width="44" height="48" rx="2" fill="#E8F0FE"/>
      <circle cx="40" cy="12" r="1.5" fill="#D0D7E2"/>
      <rect x="34" y="68" width="12" height="2" rx="1" fill="#B8943F"/>
    </svg>
  ),
  server: (
    <svg viewBox="0 0 80 80" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="6" width="48" height="68" rx="3" stroke="#0F2744" strokeWidth="2.5"/>
      <rect x="20" y="12" width="40" height="16" rx="2" fill="#E8F0FE" stroke="#0F2744" strokeWidth="1.5"/>
      <circle cx="28" cy="20" r="2.5" fill="#B8943F"/>
      <rect x="44" y="17" width="12" height="2" rx="1" fill="#D0D7E2"/>
      <rect x="44" y="21" width="12" height="2" rx="1" fill="#D0D7E2"/>
      <rect x="20" y="34" width="40" height="16" rx="2" fill="#E8F0FE" stroke="#0F2744" strokeWidth="1.5"/>
      <circle cx="28" cy="42" r="2.5" fill="#B8943F" opacity="0.7"/>
      <rect x="44" y="39" width="12" height="2" rx="1" fill="#D0D7E2"/>
      <rect x="44" y="43" width="12" height="2" rx="1" fill="#D0D7E2"/>
      <rect x="20" y="56" width="40" height="16" rx="2" fill="#E8F0FE" stroke="#0F2744" strokeWidth="1.5"/>
      <circle cx="28" cy="64" r="2.5" fill="#B8943F" opacity="0.4"/>
      <rect x="44" y="61" width="12" height="2" rx="1" fill="#D0D7E2"/>
      <rect x="44" y="65" width="12" height="2" rx="1" fill="#D0D7E2"/>
    </svg>
  ),
};

const brandLogos = {
  // LAPTOPS
  "Apple": "/brands/apple.svg",
  "Dell": "/brands/dell.svg",
  "HP": "/brands/hp.svg",
  "Lenovo": "/brands/lenovo.svg",
  "Microsoft Surface": "/brands/microsoft.svg",
  "Asus": "/brands/asus.svg",
  "Acer": "/brands/acer.svg",

  // MONITORES
  "LG": "/brands/lg.svg",
  "Samsung": "/brands/samsung.svg",
  "BenQ": "/brands/benq.svg",
  "ViewSonic": "/brands/viewsonic.svg",

  // SMARTPHONES
  "Apple (iPhone)": "/brands/apple.svg",
  "Huawei": "/brands/huawei.svg",
  "Google Pixel": "/brands/google.svg",
  "OnePlus": "/brands/oneplus.svg",

  // TABLETS
  "Apple (iPad)": "/brands/apple.svg",

  // SERVERS
  "Dell (PowerEdge)": "/brands/dell.svg",
  "HP (ProLiant)": "/brands/hp.svg",
  "Lenovo (ThinkSystem)": "/brands/lenovo.svg",
  "IBM": "/brands/ibm.svg",
};

const deviceData = {
  categories: [
    { id: "laptop", en: "Laptop", ar: "لابتوب" },
    { id: "desktop", en: "Desktop", ar: "كمبيوتر مكتبي" },
    { id: "monitor", en: "Monitor", ar: "شاشة" },
    { id: "smartphone", en: "Smartphone", ar: "هاتف ذكي" },
    { id: "tablet", en: "Tablet", ar: "تابلت" },
    { id: "server", en: "Server / Enterprise", ar: "سيرفر" },
  ],
  brands: {
    laptop: ["Apple", "Dell", "HP", "Lenovo", "Microsoft Surface", "Asus", "Acer"],
    desktop: ["Dell", "HP", "Apple", "Lenovo", "Acer"],
    monitor: ["Dell", "LG", "Samsung", "HP", "BenQ", "ViewSonic"],
    smartphone: ["Apple (iPhone)", "Samsung", "Huawei", "Google Pixel", "OnePlus"],
    tablet: ["Apple (iPad)", "Samsung", "Microsoft Surface", "Lenovo"],
    server: ["Dell (PowerEdge)", "HP (ProLiant)", "Lenovo (ThinkSystem)", "IBM"],
  },
  models: {
    "laptop-Apple": ["MacBook Air M1", "MacBook Air M2", "MacBook Air M3", "MacBook Pro 13 M1", "MacBook Pro 14 M2", "MacBook Pro 14 M3"],
    "laptop-Dell": ["Latitude 5540", "Latitude 5530", "Latitude 5520", "Latitude 5510", "XPS 13", "XPS 15", "Inspiron 15", "Precision 5570"],
    "laptop-HP": ["EliteBook 840 G9", "EliteBook 840 G8", "EliteBook 840 G7", "ProBook 450 G9", "ProBook 450 G8", "ZBook Firefly 14"],
    "laptop-Lenovo": ["ThinkPad X1 Carbon (2023)", "ThinkPad X1 Carbon (2022)", "ThinkPad T14 Gen 3", "ThinkPad E15"],
    "laptop-Microsoft Surface": ["Surface Laptop 5", "Surface Laptop 4", "Surface Laptop Go 3", "Surface Pro 9"],
    "laptop-Asus": ["ZenBook 14", "VivoBook 15", "ROG Zephyrus G14", "ExpertBook B5"],
    "laptop-Acer": ["Swift 3", "Aspire 5", "TravelMate P6", "Predator Helios 300"],
    "desktop-Dell": ["OptiPlex 7090", "OptiPlex 5090", "Precision 3660", "XPS Desktop"],
    "desktop-HP": ["ProDesk 400 G7", "EliteDesk 800 G9", "Z2 Tower G9"],
    "desktop-Apple": ["iMac 24\" M1", "iMac 27\" 2020", "Mac Mini M2", "Mac Studio M2"],
    "desktop-Lenovo": ["ThinkCentre M90q", "ThinkCentre M70s", "IdeaCentre 5"],
    "desktop-Acer": ["Veriton X2690", "Aspire TC"],
    "monitor-Dell": ["UltraSharp U2723QE", "UltraSharp U2422H", "P2723QE", "S2722QC"],
    "monitor-LG": ["27UK850", "32UN880", "27GP950", "34WN80C"],
    "monitor-Samsung": ["ViewFinity S8", "Odyssey G7", "Smart Monitor M8"],
    "monitor-HP": ["Z27k G3", "E27 G4", "M27fw"],
    "monitor-BenQ": ["PD2700U", "EW3280U", "GW2780"],
    "monitor-ViewSonic": ["VP2768a", "VG2755", "XG2705"],
    "smartphone-Apple (iPhone)": ["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro", "iPhone 14", "iPhone 13"],
    "smartphone-Samsung": ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy S23", "Galaxy S22 Ultra", "Galaxy A54"],
    "smartphone-Huawei": ["P60 Pro", "Mate 50 Pro", "Nova 11"],
    "smartphone-Google Pixel": ["Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro", "Pixel 7"],
    "smartphone-OnePlus": ["12", "11", "Nord 3"],
    "tablet-Apple (iPad)": ["iPad Pro 13 M4", "iPad Pro 11 M4", "iPad Air M2", "iPad Air M1", "iPad 10th gen", "iPad mini 6"],
    "tablet-Samsung": ["Galaxy Tab S9 Ultra", "Galaxy Tab S9+", "Galaxy Tab S9", "Galaxy Tab A9"],
    "tablet-Microsoft Surface": ["Surface Pro 10", "Surface Pro 9", "Surface Go 4"],
    "tablet-Lenovo": ["Tab P12 Pro", "Tab P11 Plus"],
    "server-Dell (PowerEdge)": ["PowerEdge R750", "PowerEdge R650", "PowerEdge R450", "PowerEdge R350", "PowerEdge T550"],
    "server-HP (ProLiant)": ["ProLiant DL380 Gen10", "ProLiant DL360 Gen10", "ProLiant ML350 Gen10"],
    "server-Lenovo (ThinkSystem)": ["ThinkSystem SR650", "ThinkSystem SR630", "ThinkSystem ST550"],
    "server-IBM": ["Power System S922", "Power System S914"],
  },
  years: ["2024", "2023", "2022", "2021", "2020", "2019", "Before 2019"],
  conditions: [
    { id: "COND_A", label: "Like New", multiplier: 1.0, description: "No visible signs of use. Screen undamaged. All original functions working. May include original box and accessories.", color: "#D6F0E2", borderColor: "#34C759" },
    { id: "COND_B", label: "Good", multiplier: 0.85, description: "Minor scratches or marks on the casing. Screen free of cracks or dead pixels. All functions work correctly. May not include accessories.", color: "#E8F0FE", borderColor: "#1E6FA4" },
    { id: "COND_C", label: "Acceptable", multiplier: 0.65, description: "Visible wear, dents or scratches on body. Screen intact and functional. One or more minor defects (weak battery, missing key, worn hinge). Device turns on and operates.", color: "#FFF8E1", borderColor: "#B8943F" },
    { id: "COND_D", label: "Poor", multiplier: 0.4, description: "Significant physical damage or functional failures. Device still turns on. If device does NOT turn on, select Poor and note it in comments.", color: "#FEE2E2", borderColor: "#DC3545" },
  ],
  questions: {
    laptop: [
      { q: "Does the battery hold charge for at least 2 hours?", penalty: 0.125 },
      { q: "Is the screen free of cracks, dead pixels, and discoloration?", penalty: 0.25 },
      { q: "Does the keyboard work fully (no missing or stuck keys)?", penalty: 0.05 },
      { q: "Is the charger included?", penalty: 0.05 },
    ],
    smartphone: [
      { q: "Is the screen free of cracks?", penalty: 0.325 },
      { q: "Does Face ID / fingerprint recognition work fully?", penalty: 0.125 },
      { q: "Is the original charger included?", penalty: 0.03 },
    ],
    monitor: [
      { q: "Are there any dead pixels or discoloration on the screen?", penalty: 0.35, inverted: true },
      { q: "Is the stand included?", penalty: 0.05 },
    ],
    desktop: [
      { q: "Does the unit turn on and operate normally?", penalty: 1.0 },
      { q: "Does it include RAM and storage drives (HDD/SSD)?", penalty: 0.15 },
    ],
    tablet: [
      { q: "Is the screen free of cracks?", penalty: 0.30 },
      { q: "Does charging work correctly?", penalty: 0.10 },
    ],
    server: [
      { q: "Is the unit rack or tower format?", penalty: 0, infoOnly: true },
      { q: "Are all drive bays populated?", penalty: -0.125 },
    ],
  },
  quantities: [
    { id: "1", label: "1 unit", tag: null },
    { id: "2-5", label: "2–5 units", tag: null },
    { id: "6-10", label: "6–10 units", tag: "VOLUME — FOLLOW UP" },
    { id: "10+", label: "More than 10 units", tag: "B2B" },
  ],
  dubaiZones: ["JLT", "DIFC", "Business Bay", "Dubai Marina", "Jumeirah", "Deira", "Bur Dubai", "Al Barsha", "Other"],
};

const basePrices = {
  "MacBook Air M1": 1200, "MacBook Air M2": 1600, "MacBook Air M3": 2000, "MacBook Pro 13 M1": 1400, "MacBook Pro 14 M2": 2200, "MacBook Pro 14 M3": 2800,
  "Latitude 5540": 900, "Latitude 5530": 800, "Latitude 5520": 650, "Latitude 5510": 500, "XPS 13": 1100, "XPS 15": 1400, "Inspiron 15": 400, "Precision 5570": 1600,
  "EliteBook 840 G9": 950, "EliteBook 840 G8": 750, "EliteBook 840 G7": 550, "ProBook 450 G9": 600, "ProBook 450 G8": 450, "ZBook Firefly 14": 1100,
  "ThinkPad X1 Carbon (2023)": 1200, "ThinkPad X1 Carbon (2022)": 950, "ThinkPad T14 Gen 3": 700, "ThinkPad E15": 400,
  "iPhone 16 Pro Max": 3200, "iPhone 16 Pro": 2800, "iPhone 16": 2200, "iPhone 15 Pro Max": 2600, "iPhone 15 Pro": 2200, "iPhone 15": 1600, "iPhone 14 Pro": 1800, "iPhone 14": 1200, "iPhone 13": 900,
  "Galaxy S24 Ultra": 2800, "Galaxy S24+": 2200, "Galaxy S24": 1800, "Galaxy S23 Ultra": 2200, "Galaxy S23": 1400, "Galaxy S22 Ultra": 1600, "Galaxy A54": 500,
  "iPad Pro 13 M4": 2800, "iPad Pro 11 M4": 2200, "iPad Air M2": 1400, "iPad Air M1": 1000, "iPad 10th gen": 600, "iPad mini 6": 700,
  "iMac 24\" M1": 2200, "iMac 27\" 2020": 1800, "Mac Mini M2": 1200, "Mac Studio M2": 2800,
  "OptiPlex 7090": 600, "OptiPlex 5090": 450, "ProDesk 400 G7": 350, "EliteDesk 800 G9": 700,
  "PowerEdge R750": 4000, "PowerEdge R650": 3200, "PowerEdge R450": 2200,
};

const yearMultipliers = { "2024": 1.0, "2023": 0.9, "2022": 0.78, "2021": 0.65, "2020": 0.52, "2019": 0.40, "Before 2019": 0.28, "Not sure": 0.65 };

function calculatePrice(model, year, conditionId, answers, questions) {
  const base = basePrices[model] || 500;
  const yearMult = yearMultipliers[year] || 0.65;
  const condMult = deviceData.conditions.find(c => c.id === conditionId)?.multiplier || 0.65;
  let questionMult = 1.0;
  if (answers && questions) {
    questions.forEach((q, i) => {
      if (q.infoOnly) return;
      const answered = answers[i];
      if (q.inverted) { if (answered === true) questionMult -= q.penalty; }
      else if (q.penalty < 0) { if (answered === true) questionMult -= q.penalty; }
      else { if (answered === false) questionMult -= q.penalty; }
    });
  }
  questionMult = Math.max(questionMult, 0.1);
  const calculated = base * yearMult * condMult * questionMult;
  const low = Math.round((calculated * 0.9) / 25) * 25;
  const high = Math.round((calculated * 1.1) / 25) * 25;
  return { low: Math.max(low, 25), high: Math.max(high, 50), tooLow: calculated < 75 };
}

function ProgressBar({ step, totalSteps }) {
  const progress = (step / totalSteps) * 100;
  return (
    <div style={{ padding: "0 24px", marginBottom: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontFamily: "Inter,sans-serif", fontSize: 13, fontWeight: 500, color: colors.grayMid }}>Step {step} of {totalSteps}</span>
        <span style={{ fontFamily: "Inter,sans-serif", fontSize: 13, fontWeight: 500, color: colors.blueMid }}>{Math.round(progress)}%</span>
      </div>
      <div style={{ width: "100%", height: 6, background: "#E2E8F0", borderRadius: 3 }}>
        <div style={{ width: `${progress}%`, height: "100%", background: colors.navy, borderRadius: 3, transition: "width 0.4s ease" }} />
      </div>
    </div>
  );
}

function WizardHeader({ step, onBack, onHome }) {
  return (
    <div style={{ background: colors.navy, height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
      <div style={{ width: 80 }}>
        {step > 1 && (
          <button onClick={onBack} style={{ background: "none", border: "none", color: colors.white, fontSize: 15, cursor: "pointer", fontFamily: "Inter,sans-serif", fontWeight: 500, padding: 0 }}>← Back</button>
        )}
      </div>
      <button onClick={onHome} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
        <img src={klaroLogo} alt="KLARO" style={{ height: 28 }} />
      </button>
      <div style={{ width: 80, textAlign: "right" }}>
        <span style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.white, opacity: 0.7 }}>EN</span>
        <span style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.white, opacity: 0.4 }}> | </span>
        <span style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.white, opacity: 0.4 }}>AR</span>
      </div>
    </div>
  );
}

function ScreenTitle({ title, subtitle }) {
  return (
    <div style={{ padding: "0 24px", marginBottom: 24 }}>
      <h2 style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 24, color: colors.carbon, margin: "0 0 8px 0" }}>{title}</h2>
      {subtitle && <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, color: colors.grayMid, margin: 0 }}>{subtitle}</p>}
    </div>
  );
}

function SummaryChips({ selections, onEdit }) {
  const chips = [];
  if (selections.category) chips.push({ label: deviceData.categories.find(c => c.id === selections.category)?.en || selections.category, step: 1 });
  if (selections.brand) chips.push({ label: selections.brand, step: 2 });
  if (selections.model) chips.push({ label: selections.model, step: 3 });
  if (selections.year) chips.push({ label: selections.year, step: 4 });
  if (selections.condition) chips.push({ label: deviceData.conditions.find(c => c.id === selections.condition)?.label || selections.condition, step: 5 });
  if (chips.length === 0) return null;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: "0 24px", marginBottom: 16 }}>
      {chips.map(chip => (
        <button key={chip.step} onClick={() => onEdit(chip.step)} style={{ background: colors.grayCool, border: "none", borderRadius: 20, padding: "6px 14px", fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: colors.navy, cursor: "pointer" }}>{chip.label} ✎</button>
      ))}
    </div>
  );
}

function Screen1({ onSelect }) {
  return (
    <div>
      <ScreenTitle title="What are you selling?" subtitle="Select your device category" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, padding: "0 24px" }}>
        {deviceData.categories.map(cat => (
          <button key={cat.id} onClick={() => onSelect(cat.id)} style={{ background: colors.white, border: "2px solid #E2E8F0", borderRadius: 12, padding: "24px 16px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, transition: "all 0.15s ease" }}
            onMouseOver={e => { e.currentTarget.style.borderColor = colors.blueMid; e.currentTarget.style.transform = "scale(0.98)"; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.transform = "scale(1)"; }}>
            {categoryIcons[cat.id]}
            <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 15, color: colors.carbon }}>{cat.en}</span>
            <span style={{ fontFamily: "Inter,sans-serif", fontSize: 12, color: colors.grayMid }}>{cat.ar}</span>
          </button>
        ))}
      </div>
      <div style={{ margin: "24px", padding: "16px 20px", background: "#FFF8E1", borderRadius: 8, borderLeft: `4px solid ${colors.gold}` }}>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, color: colors.carbon, margin: 0, fontWeight: 500 }}>Device not working? We still make an offer.</p>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.grayMid, margin: "4px 0 0 0" }}>Select your category and continue.</p>
      </div>
    </div>
  );
}

function Screen2({ category, onSelect }) {
  const brands = deviceData.brands[category] || [];
  return (
    <div>
      <ScreenTitle title="Select the brand" subtitle="Choose your device manufacturer" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, padding: "0 24px" }}>
        {brands.map(brand => (
          <button key={brand} onClick={() => onSelect(brand)} style={{ background: colors.white, border: "2px solid #E2E8F0", borderRadius: 12, padding: "20px 12px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, transition: "all 0.15s ease" }}
            onMouseOver={e => { e.currentTarget.style.borderColor = colors.blueMid; e.currentTarget.style.transform = "scale(0.98)"; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.transform = "scale(1)"; }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: colors.grayCool, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              {brandLogos[brand] ? (
                <img src={brandLogos[brand]} alt={brand} style={{ width: 36, height: 36, objectFit: "contain" }} onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
              ) : null}
              <div style={{ display: brandLogos[brand] ? "none" : "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 18, color: colors.navy }}>{brand.charAt(0)}</div>
            </div>
            <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 13, color: colors.carbon, textAlign: "center" }}>{brand}</span>
          </button>
        ))}
        <button onClick={() => onSelect("Other")} style={{ background: colors.white, border: "2px dashed #D0D7E2", borderRadius: 12, padding: "20px 12px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: colors.grayCool, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: colors.grayMid }}>+</div>
          <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 13, color: colors.grayMid }}>Other</span>
        </button>
      </div>
    </div>
  );
}

function Screen3({ category, brand, onSelect }) {
  const key = `${category}-${brand}`;
  const models = deviceData.models[key] || [];
  const [search, setSearch] = useState("");
  const filtered = models.filter(m => m.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <ScreenTitle title="Select the model" subtitle={`${brand} — choose your specific model`} />
      <div style={{ padding: "0 24px", marginBottom: 16 }}>
        <input type="text" placeholder="Search model..." value={search} onChange={e => setSearch(e.target.value)}
          style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #D0D7E2", fontFamily: "Inter,sans-serif", fontSize: 15, color: colors.carbon, outline: "none", boxSizing: "border-box" }}
          onFocus={e => e.target.style.borderColor = colors.blueMid} onBlur={e => e.target.style.borderColor = "#D0D7E2"} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "0 24px" }}>
        {filtered.length > 0 ? filtered.map(model => (
          <button key={model} onClick={() => onSelect(model)} style={{ background: colors.white, border: "1.5px solid #E2E8F0", borderRadius: 8, padding: "16px 20px", cursor: "pointer", textAlign: "left", fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 15, color: colors.carbon, transition: "all 0.15s ease" }}
            onMouseOver={e => { e.currentTarget.style.borderColor = colors.blueMid; e.currentTarget.style.background = colors.grayCool; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.background = colors.white; }}>
            {model}
          </button>
        )) : (
          <div style={{ textAlign: "center", padding: 24 }}>
            <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, color: colors.grayMid }}>Model not found? No problem.</p>
            <button onClick={() => onSelect(search || "Other model")} style={{ background: colors.navy, color: colors.white, border: "none", borderRadius: 8, padding: "12px 24px", fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer", marginTop: 8 }}>
              Continue with &quot;{search || "Other"}&quot;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Screen4({ brand, model, onSelect }) {
  const [showWarning, setShowWarning] = useState(false);
  const handleSelect = year => {
    if (year === "Before 2019") { setShowWarning(true); setTimeout(() => onSelect(year), 2000); }
    else onSelect(year);
  };
  return (
    <div>
      <ScreenTitle title="Year of manufacture" subtitle={`${brand} ${model}`} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, padding: "0 24px" }}>
        {deviceData.years.map(year => (
          <button key={year} onClick={() => handleSelect(year)} style={{ background: colors.white, border: "2px solid #E2E8F0", borderRadius: 8, padding: "18px 16px", cursor: "pointer", fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 16, color: colors.carbon, transition: "all 0.15s ease", gridColumn: year === "Before 2019" ? "1 / -1" : "auto" }}
            onMouseOver={e => { e.currentTarget.style.borderColor = colors.blueMid; e.currentTarget.style.transform = "scale(0.98)"; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.transform = "scale(1)"; }}>
            {year}
          </button>
        ))}
        <button onClick={() => onSelect("Not sure")} style={{ background: "transparent", border: "2px dashed #D0D7E2", borderRadius: 8, padding: "18px 16px", cursor: "pointer", fontFamily: "Inter,sans-serif", fontWeight: 500, fontSize: 14, color: colors.grayMid, gridColumn: "1 / -1" }}>
          I am not sure
        </button>
      </div>
      {showWarning && (
        <div style={{ margin: "24px", padding: "16px 20px", background: "#FFF8E1", borderRadius: 8, borderLeft: `4px solid ${colors.gold}` }}>
          <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, color: colors.carbon, margin: 0, fontWeight: 500 }}>Devices manufactured before 2019 may have limited market value.</p>
          <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.grayMid, margin: "4px 0 0 0" }}>We will still evaluate your device — continue to see our offer.</p>
        </div>
      )}
    </div>
  );
}

function Screen5({ onSelect }) {
  return (
    <div>
      <ScreenTitle title="Device condition" subtitle="Be honest — it helps us give you the most accurate price" />
      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 24px" }}>
        {deviceData.conditions.map(cond => (
          <button key={cond.id} onClick={() => onSelect(cond.id)} style={{ background: cond.color, border: `2px solid ${cond.borderColor}`, borderRadius: 12, padding: "20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s ease" }}
            onMouseOver={e => e.currentTarget.style.transform = "scale(0.99)"} onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 16, color: colors.carbon }}>{cond.label}</span>
            </div>
            <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.grayMid, margin: 0, lineHeight: 1.5 }}>{cond.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function Screen6({ category, onComplete }) {
  const questions = deviceData.questions[category] || [];
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const allAnswered = answers.every(a => a !== null);
  const setAnswer = (idx, val) => { const n = [...answers]; n[idx] = val; setAnswers(n); };
  return (
    <div>
      <ScreenTitle title="A few quick questions" subtitle="This helps us give you the most accurate price" />
      <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "0 24px" }}>
        {questions.map((q, i) => (
          <div key={i} style={{ background: colors.white, borderRadius: 12, padding: "20px", border: "1.5px solid #E2E8F0" }}>
            <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 500, color: colors.carbon, margin: "0 0 12px 0" }}>{q.q}</p>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => setAnswer(i, true)} style={{ flex: 1, padding: "12px", borderRadius: 8, border: `2px solid ${answers[i] === true ? "#34C759" : "#E2E8F0"}`, background: answers[i] === true ? "#D6F0E2" : colors.white, fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 14, color: answers[i] === true ? "#1B7A3D" : colors.carbon, cursor: "pointer" }}>Yes</button>
              <button onClick={() => setAnswer(i, false)} style={{ flex: 1, padding: "12px", borderRadius: 8, border: `2px solid ${answers[i] === false ? "#DC3545" : "#E2E8F0"}`, background: answers[i] === false ? "#FEE2E2" : colors.white, fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 14, color: answers[i] === false ? "#DC3545" : colors.carbon, cursor: "pointer" }}>No</button>
            </div>
          </div>
        ))}
      </div>
      {allAnswered && (
        <div style={{ padding: "24px" }}>
          <button onClick={() => onComplete(answers)} style={{ width: "100%", padding: "16px", background: colors.navy, color: colors.white, border: "none", borderRadius: 8, fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 16, cursor: "pointer" }}>Continue</button>
        </div>
      )}
    </div>
  );
}

function Screen7({ onSelect }) {
  return (
    <div>
      <ScreenTitle title="How many units?" subtitle="This helps us tailor the right process for you" />
      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 24px" }}>
        {deviceData.quantities.map(q => (
          <button key={q.id} onClick={() => onSelect(q.id)} style={{ background: colors.white, border: `2px solid ${q.id === "10+" ? colors.gold : "#E2E8F0"}`, borderRadius: 12, padding: "20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s ease" }}
            onMouseOver={e => { e.currentTarget.style.borderColor = colors.blueMid; e.currentTarget.style.transform = "scale(0.99)"; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = q.id === "10+" ? colors.gold : "#E2E8F0"; e.currentTarget.style.transform = "scale(1)"; }}>
            <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 16, color: colors.carbon }}>{q.label}</span>
            {q.id === "10+" && <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.gold, margin: "4px 0 0 0", fontWeight: 500 }}>Corporate volume pricing available</p>}
          </button>
        ))}
      </div>
    </div>
  );
}

function Screen8({ selections, price, onAccept, onWhatsApp }) {
  if (price.tooLow) {
    return (
      <div>
        <ScreenTitle title="Price estimate" />
        <div style={{ padding: "0 24px", textAlign: "center" }}>
          <div style={{ background: "#FEE2E2", borderRadius: 12, padding: 32, marginBottom: 24 }}>
            <p style={{ fontFamily: "Inter,sans-serif", fontSize: 16, fontWeight: 600, color: "#DC3545", margin: 0 }}>We cannot make an offer for this device at this time.</p>
            <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, color: colors.grayMid, margin: "12px 0 0 0" }}>The current market value is below our minimum threshold.</p>
          </div>
          <button onClick={onWhatsApp} style={{ width: "100%", padding: "16px", background: colors.whatsapp, color: colors.white, border: "none", borderRadius: 8, fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 16, cursor: "pointer" }}>Contact us on WhatsApp</button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <ScreenTitle title="Your price estimate" />
      <div style={{ padding: "0 24px" }}>
        <div style={{ background: colors.white, borderRadius: 16, padding: 32, textAlign: "center", border: "2px solid #E2E8F0", marginBottom: 24 }}>
          <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, color: colors.grayMid, margin: "0 0 8px 0" }}>Your device is worth between</p>
          <p style={{ fontFamily: "Inter,sans-serif", fontSize: 40, fontWeight: 700, color: colors.navy, margin: "0 0 4px 0" }}>AED {price.low} — {price.high}</p>
          <p style={{ fontFamily: "Inter,sans-serif", fontSize: 12, color: colors.grayMid, margin: 0 }}>{selections.brand} {selections.model} · {selections.year} · {deviceData.conditions.find(c => c.id === selections.condition)?.label}</p>
        </div>
        <div style={{ background: colors.grayCool, borderRadius: 8, padding: "12px 16px", marginBottom: 16, fontSize: 13, fontFamily: "Inter,sans-serif", color: colors.grayMid, lineHeight: 1.5 }}>
          This is an estimate based on current Dubai market prices. The final price is confirmed after our technician inspects the device. If the price changes, we explain exactly why. No surprises.
        </div>
        <div style={{ background: colors.greenTint, borderRadius: 8, padding: "16px", marginBottom: 24, borderLeft: "4px solid #34C759" }}>
          <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 600, color: colors.carbon, margin: "0 0 4px 0" }}>Certified Data Erasure included</p>
          <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.grayMid, margin: 0 }}>Your device will be erased with certified data erasure software. You will receive a signed certificate after pickup. No extra cost.</p>
        </div>
        <button onClick={onAccept} style={{ width: "100%", padding: "16px", background: colors.navy, color: colors.white, border: "none", borderRadius: 8, fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 16, cursor: "pointer", marginBottom: 12 }}>Accept and Book Pickup</button>
        <button onClick={onWhatsApp} style={{ width: "100%", padding: "16px", background: colors.whatsapp, color: colors.white, border: "none", borderRadius: 8, fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 16, cursor: "pointer", marginBottom: 12 }}>Send to my WhatsApp</button>
        <button onClick={onWhatsApp} style={{ width: "100%", padding: "12px", background: "transparent", color: colors.blueMid, border: `1.5px solid ${colors.blueMid}`, borderRadius: 8, fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Not happy with this price? Talk to us.</button>
      </div>
    </div>
  );
}

function Screen9({ onSubmit }) {
  const [form, setForm] = useState({ name: "", whatsapp: "", zone: "", date: "", timeSlot: "", notes: "" });
  const update = (k, v) => setForm({ ...form, [k]: v });
  const minDate = new Date(Date.now() + 86400000).toISOString().split("T")[0];
  const maxDate = new Date(Date.now() + 14 * 86400000).toISOString().split("T")[0];
  const canSubmit = form.name && form.whatsapp && form.zone && form.date;
  const inputStyle = { width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #D0D7E2", fontFamily: "Inter,sans-serif", fontSize: 15, color: colors.carbon, outline: "none", boxSizing: "border-box", marginTop: 6 };
  const labelStyle = { fontFamily: "Inter,sans-serif", fontSize: 13, fontWeight: 600, color: colors.carbon, display: "block" };
  return (
    <div>
      <ScreenTitle title="Book your pickup" subtitle="We come to you — free of charge" />
      <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "0 24px" }}>
        <div><label style={labelStyle}>Full name *</label><input type="text" value={form.name} onChange={e => update("name", e.target.value)} placeholder="Your full name" style={inputStyle} /></div>
        <div><label style={labelStyle}>WhatsApp number *</label>
          <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
            <span style={{ padding: "14px 12px", background: colors.grayCool, borderRadius: 8, fontFamily: "Inter,sans-serif", fontSize: 15, color: colors.grayMid, border: "1.5px solid #D0D7E2" }}>+971</span>
            <input type="tel" value={form.whatsapp} onChange={e => update("whatsapp", e.target.value)} placeholder="50 123 4567" style={{ ...inputStyle, marginTop: 0 }} />
          </div>
        </div>
        <div><label style={labelStyle}>Area in Dubai *</label>
          <select value={form.zone} onChange={e => update("zone", e.target.value)} style={{ ...inputStyle, background: colors.white }}>
            <option value="">Select your area</option>
            {deviceData.dubaiZones.map(z => <option key={z} value={z}>{z}</option>)}
            <option value="Sharjah">Sharjah</option><option value="Abu Dhabi">Abu Dhabi</option>
          </select>
        </div>
        <div><label style={labelStyle}>Preferred pickup date *</label><input type="date" value={form.date} min={minDate} max={maxDate} onChange={e => update("date", e.target.value)} style={inputStyle} /></div>
        <div><label style={labelStyle}>Preferred time slot</label>
          <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
            {["Morning (8-12)", "Afternoon (12-17)", "Evening (17-20)"].map(slot => (
              <button key={slot} onClick={() => update("timeSlot", slot)} style={{ flex: 1, padding: "10px 4px", borderRadius: 8, border: `1.5px solid ${form.timeSlot === slot ? colors.blueMid : "#D0D7E2"}`, background: form.timeSlot === slot ? "#E8F0FE" : colors.white, fontFamily: "Inter,sans-serif", fontSize: 11, fontWeight: 500, color: colors.carbon, cursor: "pointer" }}>{slot}</button>
            ))}
          </div>
        </div>
        <div><label style={labelStyle}>Notes (optional)</label><textarea value={form.notes} onChange={e => update("notes", e.target.value)} placeholder="Access instructions, additional details..." maxLength={200} rows={3} style={{ ...inputStyle, resize: "vertical" }} /></div>
      </div>
      <div style={{ padding: "24px", position: "sticky", bottom: 0, background: colors.grayCool }}>
        <button onClick={() => canSubmit && onSubmit(form)} disabled={!canSubmit} style={{ width: "100%", padding: "16px", background: canSubmit ? colors.navy : "#A0AEC0", color: colors.white, border: "none", borderRadius: 8, fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 16, cursor: canSubmit ? "pointer" : "not-allowed", opacity: canSubmit ? 1 : 0.7 }}>Confirm Pickup</button>
      </div>
    </div>
  );
}

function Screen10({ selections, price, form }) {
  const whatsAppMsg = encodeURIComponent(`I just booked a pickup with KLARO!\n\nDevice: ${selections.brand} ${selections.model}\nYear: ${selections.year}\nEstimated value: AED ${price.low} - ${price.high}\nPickup: ${form.date}\nArea: ${form.zone}\n\nklaro.ae`);
  return (
    <div>
      <div style={{ textAlign: "center", padding: "32px 24px 16px" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: colors.greenTint, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 36 }}>✓</div>
        <h2 style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 24, color: colors.carbon, margin: "0 0 8px 0" }}>Your pickup is booked!</h2>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, color: colors.grayMid, margin: 0 }}>We will confirm via WhatsApp shortly.</p>
      </div>
      <div style={{ margin: "0 24px 16px", background: colors.white, borderRadius: 12, padding: 20, border: "1.5px solid #E2E8F0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div><p style={{ fontFamily: "Inter,sans-serif", fontSize: 12, color: colors.grayMid, margin: "0 0 2px" }}>Device</p><p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 600, color: colors.carbon, margin: 0 }}>{selections.brand} {selections.model}</p></div>
          <div><p style={{ fontFamily: "Inter,sans-serif", fontSize: 12, color: colors.grayMid, margin: "0 0 2px" }}>Estimated value</p><p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 600, color: colors.blueMid, margin: 0 }}>AED {price.low} - {price.high}</p></div>
          <div><p style={{ fontFamily: "Inter,sans-serif", fontSize: 12, color: colors.grayMid, margin: "0 0 2px" }}>Pickup date</p><p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 600, color: colors.carbon, margin: 0 }}>{form.date}</p></div>
          <div><p style={{ fontFamily: "Inter,sans-serif", fontSize: 12, color: colors.grayMid, margin: "0 0 2px" }}>Area</p><p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 600, color: colors.carbon, margin: 0 }}>{form.zone}</p></div>
        </div>
      </div>
      <div style={{ margin: "0 24px 16px", background: colors.greenTint, borderRadius: 8, padding: 16, borderLeft: "4px solid #34C759" }}>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 600, color: colors.carbon, margin: "0 0 4px 0" }}>Certified Data Erasure</p>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.grayMid, margin: 0 }}>Your device will be erased with certified software. You will receive a signed certificate by email after pickup.</p>
      </div>
      <div style={{ margin: "0 24px 16px", background: colors.white, borderRadius: 12, padding: 20, border: "1.5px solid #E2E8F0" }}>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 600, color: colors.carbon, margin: "0 0 12px 0" }}>What happens next</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {["KLARO confirms your booking via WhatsApp within 2 hours.", `Our technician picks up at your location on ${form.date}.`, "You receive payment immediately at pickup — bank transfer or cash."].map((text, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 14, color: colors.blueMid, minWidth: 20 }}>{i + 1}.</span>
              <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.grayMid, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "0 24px 24px" }}>
        <a href={`https://wa.me/?text=${whatsAppMsg}`} target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", padding: "14px", background: colors.whatsapp, color: colors.white, border: "none", borderRadius: 8, fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer", textAlign: "center", textDecoration: "none", boxSizing: "border-box" }}>
          Know someone with old IT equipment? Share KLARO
        </a>
      </div>
    </div>
  );
}

function B2BForm({ selections, onSubmit }) {
  const [form, setForm] = useState({ name: "", company: "", role: "", whatsapp: "", email: "", units: "10+", deviceType: `${selections.category} - ${selections.brand}`, zone: "", timeSlot: "", notes: "" });
  const update = (k, v) => setForm({ ...form, [k]: v });
  const canSubmit = form.name && form.company && form.whatsapp && form.email && form.zone;
  const inputStyle = { width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid #D0D7E2", fontFamily: "Inter,sans-serif", fontSize: 15, color: colors.carbon, outline: "none", boxSizing: "border-box", marginTop: 6 };
  const labelStyle = { fontFamily: "Inter,sans-serif", fontSize: 13, fontWeight: 600, color: colors.carbon, display: "block" };
  return (
    <div>
      <ScreenTitle title="Corporate IT Buyback" subtitle="Tell us about your fleet — we will respond within 2 hours" />
      <div style={{ margin: "0 24px 20px", padding: "12px 16px", background: "#FFF8E1", borderRadius: 8, borderLeft: `4px solid ${colors.gold}` }}>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, fontWeight: 500, color: colors.carbon, margin: 0 }}>Volume pricing, individual data erasure certificates, and consolidated invoicing available.</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "0 24px" }}>
        <div><label style={labelStyle}>Full name *</label><input type="text" value={form.name} onChange={e => update("name", e.target.value)} placeholder="Your name" style={inputStyle} /></div>
        <div><label style={labelStyle}>Company name *</label><input type="text" value={form.company} onChange={e => update("company", e.target.value)} placeholder="Company name" style={inputStyle} /></div>
        <div><label style={labelStyle}>Job title</label><input type="text" value={form.role} onChange={e => update("role", e.target.value)} placeholder="IT Manager, HR Director, etc." style={inputStyle} /></div>
        <div><label style={labelStyle}>WhatsApp number *</label>
          <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
            <span style={{ padding: "14px 12px", background: colors.grayCool, borderRadius: 8, fontFamily: "Inter,sans-serif", fontSize: 15, color: colors.grayMid, border: "1.5px solid #D0D7E2" }}>+971</span>
            <input type="tel" value={form.whatsapp} onChange={e => update("whatsapp", e.target.value)} placeholder="50 123 4567" style={{ ...inputStyle, marginTop: 0 }} />
          </div>
        </div>
        <div><label style={labelStyle}>Corporate email *</label><input type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@company.ae" style={inputStyle} /></div>
        <div><label style={labelStyle}>Number of devices *</label><input type="text" value={form.units} onChange={e => update("units", e.target.value)} style={inputStyle} /></div>
        <div><label style={labelStyle}>Device type(s)</label><input type="text" value={form.deviceType} onChange={e => update("deviceType", e.target.value)} style={inputStyle} /></div>
        <div><label style={labelStyle}>Emirate / Area *</label>
          <select value={form.zone} onChange={e => update("zone", e.target.value)} style={{ ...inputStyle, background: colors.white }}>
            <option value="">Select area</option>
            {deviceData.dubaiZones.map(z => <option key={z} value={z}>{z}</option>)}
            <option value="Sharjah">Sharjah</option><option value="Abu Dhabi">Abu Dhabi</option><option value="Other">Other</option>
          </select>
        </div>
        <div><label style={labelStyle}>Preferred contact time</label>
          <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
            {["Morning (8-12)", "Afternoon (12-17)", "Evening (17-20)"].map(slot => (
              <button key={slot} onClick={() => update("timeSlot", slot)} style={{ flex: 1, padding: "10px 4px", borderRadius: 8, border: `1.5px solid ${form.timeSlot === slot ? colors.blueMid : "#D0D7E2"}`, background: form.timeSlot === slot ? "#E8F0FE" : colors.white, fontFamily: "Inter,sans-serif", fontSize: 11, fontWeight: 500, color: colors.carbon, cursor: "pointer" }}>{slot}</button>
            ))}
          </div>
        </div>
        <div><label style={labelStyle}>Additional notes</label><textarea value={form.notes} onChange={e => update("notes", e.target.value)} placeholder="Any details about the devices..." maxLength={200} rows={3} style={{ ...inputStyle, resize: "vertical" }} /></div>
      </div>
      <div style={{ padding: "24px", position: "sticky", bottom: 0, background: colors.grayCool }}>
        <button onClick={() => canSubmit && onSubmit(form)} disabled={!canSubmit} style={{ width: "100%", padding: "16px", background: canSubmit ? colors.navy : "#A0AEC0", color: colors.white, border: "none", borderRadius: 8, fontFamily: "Inter,sans-serif", fontWeight: 600, fontSize: 16, cursor: canSubmit ? "pointer" : "not-allowed" }}>Submit Corporate Request</button>
      </div>
    </div>
  );
}

function B2BConfirmation({ form }) {
  return (
    <div style={{ textAlign: "center", padding: "32px 24px" }}>
      <div style={{ width: 72, height: 72, borderRadius: "50%", background: colors.greenTint, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 36 }}>✓</div>
      <h2 style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 24, color: colors.carbon, margin: "0 0 8px 0" }}>Corporate request submitted!</h2>
      <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, color: colors.grayMid, margin: "0 0 24px 0" }}>Our team will contact you within 2 hours during business hours (8:00-20:00 Dubai time).</p>
      <div style={{ background: colors.white, borderRadius: 12, padding: 20, border: "1.5px solid #E2E8F0", textAlign: "left", marginBottom: 24 }}>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 600, color: colors.carbon, margin: "0 0 8px" }}>Your request</p>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.grayMid, margin: "4px 0" }}>Company: {form.company}</p>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.grayMid, margin: "4px 0" }}>Devices: {form.units} — {form.deviceType}</p>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.grayMid, margin: "4px 0" }}>Area: {form.zone}</p>
      </div>
      <div style={{ background: colors.greenTint, borderRadius: 8, padding: 16, borderLeft: "4px solid #34C759", textAlign: "left" }}>
        <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: colors.carbon, margin: 0 }}>Individual data erasure certificates, asset disposal report, and consolidated invoice will be provided for your fleet.</p>
      </div>
    </div>
  );
}

function WhatsAppButton() {
  return (
    <a href="https://wa.me/971XXXXXXXXX?text=Hello%20KLARO%2C%20I%20need%20help%20with%20my%20quotation" target="_blank" rel="noopener noreferrer"
      style={{ position: "fixed", bottom: 24, right: 24, width: 56, height: 56, borderRadius: "50%", background: colors.whatsapp, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.2)", zIndex: 999, textDecoration: "none", fontSize: 28, color: colors.white }}>
      💬
    </a>
  );
}

export default function App() {
  const [step, setStep] = useState(1);
  const [isB2B, setIsB2B] = useState(false);
  const [b2bForm, setB2bForm] = useState(null);
  const [selections, setSelections] = useState({ category: null, brand: null, model: null, year: null, condition: null, answers: null, quantity: null });
  const [leadForm, setLeadForm] = useState(null);
  const [price, setPrice] = useState({ low: 0, high: 0, tooLow: false });

  const totalSteps = 10;
  const reset = () => { setStep(1); setIsB2B(false); setB2bForm(null); setSelections({ category: null, brand: null, model: null, year: null, condition: null, answers: null, quantity: null }); setLeadForm(null); setPrice({ low: 0, high: 0, tooLow: false }); };
  const goBack = () => { if (step > 1) setStep(step - 1); };
  const goToStep = s => setStep(s);

  const whatsAppMessage = () => {
    const msg = encodeURIComponent(`Hello KLARO, I just completed a quote on klaro.ae:\n\nDevice: ${selections.brand} ${selections.model}\nYear: ${selections.year}\nCondition: ${deviceData.conditions.find(c => c.id === selections.condition)?.label}\nQuantity: ${selections.quantity}\nEstimated price: AED ${price.low} - ${price.high}\n\nI would like to confirm this quote and arrange a pickup.`);
    window.open(`https://wa.me/971XXXXXXXXX?text=${msg}`, "_blank");
  };

  return (
    <div style={{ fontFamily: "Inter,sans-serif", minHeight: "100vh", background: colors.grayCool, maxWidth: 480, margin: "0 auto", boxShadow: "0 0 40px rgba(0,0,0,0.08)", position: "relative" }}>
      <WizardHeader step={step} onBack={goBack} onHome={reset} />
      <div style={{ paddingTop: 24, paddingBottom: 100 }}>
        {!isB2B && step <= 10 && <ProgressBar step={step} totalSteps={totalSteps} />}
        {step > 1 && step <= 7 && <SummaryChips selections={selections} onEdit={goToStep} />}
        {step === 1 && <Screen1 onSelect={cat => { setSelections({ ...selections, category: cat }); setStep(2); }} />}
        {step === 2 && <Screen2 category={selections.category} onSelect={brand => { setSelections({ ...selections, brand }); setStep(3); }} />}
        {step === 3 && <Screen3 category={selections.category} brand={selections.brand} onSelect={model => { setSelections({ ...selections, model }); setStep(4); }} />}
        {step === 4 && <Screen4 brand={selections.brand} model={selections.model} onSelect={year => { setSelections({ ...selections, year }); setStep(5); }} />}
        {step === 5 && <Screen5 onSelect={cond => { setSelections({ ...selections, condition: cond }); setStep(6); }} />}
        {step === 6 && <Screen6 category={selections.category} onComplete={answers => { setSelections({ ...selections, answers }); setStep(7); }} />}
        {step === 7 && <Screen7 onSelect={qty => {
          setSelections({ ...selections, quantity: qty });
          if (qty === "10+") { setIsB2B(true); setStep(8); }
          else {
            const questions = deviceData.questions[selections.category] || [];
            const p = calculatePrice(selections.model, selections.year, selections.condition, selections.answers, questions);
            setPrice(p);
            setStep(8);
          }
        }} />}
        {step === 8 && !isB2B && <Screen8 selections={selections} price={price} onAccept={() => setStep(9)} onWhatsApp={whatsAppMessage} />}
        {step === 8 && isB2B && <B2BForm selections={selections} onSubmit={form => { setB2bForm(form); setStep(9); }} />}
        {step === 9 && !isB2B && <Screen9 onSubmit={form => { setLeadForm(form); setStep(10); }} />}
        {step === 9 && isB2B && <B2BConfirmation form={b2bForm} />}
        {step === 10 && !isB2B && <Screen10 selections={selections} price={price} form={leadForm} />}
      </div>
      <WhatsAppButton />
    </div>
  );
}
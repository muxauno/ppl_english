const fs = require("fs");
const path = require("path");

/**********************************************************
 * CONFIG
 **********************************************************/

const FILES_TO_CLEAN = [
  "airlaw.js",
  "performance.js"
];

/**********************************************************
 * CLEANING RULES
 **********************************************************/

const CLEAN_REGEX = [
  // Full DGCA / CAD blocks (Serbian & English)
  /ДЦВ-PEL-ОБ-1001[\s\S]*?cad\.gov\.rs/gi,
  /CAD-PEL-OB-1001[\s\S]*?cad\.gov\.rs/gi,

  // Standalone CAD address / contact fragments
  /Skadarska\s+23[\s\S]*?cad\.gov\.rs/gi,
  /dgca@cad\.gov\.rs/gi,
  /www\.cad\.gov\.rs/gi,

  // Page markers
  /Страна\s*\d+\s*\/\s*\d+/gi,
  /Page\s*\d+\s*\/\s*\d+/gi,

  // Section numbers like 030.10
  /\b030\.\d{2}\b\s*-?/g
];

/**********************************************************
 * PROCESS
 **********************************************************/

FILES_TO_CLEAN.forEach(file => {
  const filePath = path.join(__dirname, file);

  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, "utf8");
  const originalLength = content.length;

  CLEAN_REGEX.forEach(rx => {
    content = content.replace(rx, "");
  });

  // Clean formatting artefacts
  content = content
    .replace(/\s{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\s+([?.!,])/g, "$1")
    .trim() + "\n";

  fs.writeFileSync(filePath, content, "utf8");

  console.log(
    `✅ Cleaned ${file} (${originalLength} → ${content.length} chars)`
  );
});

console.log("🎯 Question cleansing complete.");

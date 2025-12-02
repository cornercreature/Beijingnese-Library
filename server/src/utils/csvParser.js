const fs = require('fs');
const { parse } = require('csv-parse/sync');

/**
 * Map Chinese grammar categories to English database enums
 */
const GRAMMAR_CATEGORY_MAP = {
  '名词': 'Noun',
  '名次': 'Noun',  // Handle typo
  '动词': 'Verb',
  '形容词': 'Adjective',
  '感叹词': 'Sayings',  // Interjections
  '说法': 'Sayings'     // Expressions/sayings
};

/**
 * Parse a CSV file and return rows as objects
 * @param {string} filePath - Path to CSV file
 * @returns {Array} Array of parsed row objects
 */
function parseCsvFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Parse CSV with options
    const records = parse(fileContent, {
      columns: ['beijingnese', 'pinyin', 'type', 'example', 'col5', 'chin_def', 'col7', 'eng_def'],
      skip_empty_lines: true,
      trim: true,
      from_line: 2  // Skip header row
    });

    return records;
  } catch (error) {
    console.error(`Error parsing CSV file ${filePath}:`, error.message);
    return [];
  }
}

/**
 * Normalize and validate a CSV row
 * @param {Object} row - Raw CSV row object
 * @returns {Object|null} Normalized row or null if invalid
 */
function normalizeRow(row) {
  // Skip if missing required fields
  if (!row.beijingnese || !row.pinyin || !row.type) {
    return null;
  }

  // Trim all string values
  const normalized = {
    chinese_characters: row.beijingnese.trim(),
    pinyin: row.pinyin.trim(),
    type: row.type.trim(),
    example: row.example ? row.example.trim() : '',
    chin_def: row.chin_def ? row.chin_def.trim() : '',
    eng_def: row.eng_def ? row.eng_def.trim() : ''
  };

  // Skip if any required field is empty after trimming
  if (!normalized.chinese_characters || !normalized.pinyin || !normalized.type) {
    return null;
  }

  // Skip if definitions are missing
  if (!normalized.chin_def || !normalized.eng_def) {
    return null;
  }

  return normalized;
}

/**
 * Map Chinese grammar category to English enum
 * @param {string} chineseType - Chinese category name
 * @returns {string|null} English category or null if unknown
 */
function mapGrammarCategory(chineseType) {
  const mapped = GRAMMAR_CATEGORY_MAP[chineseType];
  if (!mapped) {
    console.warn(`Unknown grammar category: "${chineseType}"`);
    return null;
  }
  return mapped;
}

/**
 * Group rows by unique word (chinese_characters + pinyin)
 * @param {Array} rows - Array of normalized rows
 * @returns {Map} Map of word key to array of rows
 */
function groupRowsByWord(rows) {
  const groups = new Map();

  rows.forEach(row => {
    const key = `${row.chinese_characters}|${row.pinyin}`;

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(row);
  });

  return groups;
}

module.exports = {
  parseCsvFile,
  normalizeRow,
  mapGrammarCategory,
  groupRowsByWord,
  GRAMMAR_CATEGORY_MAP
};

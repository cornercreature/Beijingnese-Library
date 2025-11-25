/**
 * Pinyin Tone Parser
 * Parses pinyin syllables and detects tone numbers from tone marks
 * This is critical for the dynamic character sizing feature!
 */

// Tone mark mappings
const TONE_MARKS = {
  1: {
    a: 'ā', e: 'ē', i: 'ī', o: 'ō', u: 'ū', ü: 'ǖ',
    A: 'Ā', E: 'Ē', I: 'Ī', O: 'Ō', U: 'Ū', Ü: 'Ǖ'
  },
  2: {
    a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú', ü: 'ǘ',
    A: 'Á', E: 'É', I: 'Í', O: 'Ó', U: 'Ú', Ü: 'Ǘ'
  },
  3: {
    a: 'ǎ', e: 'ě', i: 'ǐ', o: 'ǒ', u: 'ǔ', ü: 'ǚ',
    A: 'Ǎ', E: 'Ě', I: 'Ǐ', O: 'Ǒ', U: 'Ǔ', Ü: 'Ǚ'
  },
  4: {
    a: 'à', e: 'è', i: 'ì', o: 'ò', u: 'ù', ü: 'ǜ',
    A: 'À', E: 'È', I: 'Ì', O: 'Ò', U: 'Ù', Ü: 'Ǜ'
  }
};

// Create reverse mapping (tone mark -> tone number)
const TONE_MAP = {};
Object.keys(TONE_MARKS).forEach(tone => {
  Object.values(TONE_MARKS[tone]).forEach(mark => {
    TONE_MAP[mark] = parseInt(tone);
  });
});

/**
 * Detect tone number from a pinyin syllable
 * @param {string} syllable - Pinyin syllable (e.g., 'hú', 'tòng', 'r')
 * @returns {number} Tone number (0-4)
 */
function detectTone(syllable) {
  if (!syllable || syllable.trim() === '') {
    return 0;
  }

  // Check each character for tone marks
  for (const char of syllable) {
    if (TONE_MAP[char]) {
      return TONE_MAP[char];
    }
  }

  // No tone mark found = neutral/light tone
  return 0;
}

/**
 * Remove tone marks from pinyin syllable
 * @param {string} syllable - Pinyin syllable with tone marks
 * @returns {string} Syllable without tone marks
 */
function removeToneMarks(syllable) {
  if (!syllable) return '';

  let result = syllable;
  Object.entries(TONE_MAP).forEach(([mark, _]) => {
    // Find base letter for this tone mark
    for (const [tone, marks] of Object.entries(TONE_MARKS)) {
      for (const [base, marked] of Object.entries(marks)) {
        if (marked === mark) {
          result = result.replace(mark, base);
        }
      }
    }
  });

  return result;
}

/**
 * Parse a full pinyin string into syllables with tone information
 * @param {string} pinyin - Full pinyin string (e.g., 'hútòng')
 * @param {string} characters - Corresponding Chinese characters (e.g., '胡同')
 * @returns {Array} Array of syllable objects with tone info
 */
function parsePinyin(pinyin, characters) {
  if (!pinyin || !characters) {
    return [];
  }

  // Split pinyin by spaces or try to match with characters
  const pinyinParts = pinyin.trim().split(/\s+/);
  const charArray = Array.from(characters);

  // If pinyin parts match character count, use direct mapping
  if (pinyinParts.length === charArray.length) {
    return pinyinParts.map((syllable, index) => ({
      syllable: syllable,
      character: charArray[index],
      tone_number: detectTone(syllable),
      position: index
    }));
  }

  // Otherwise, return best effort
  // This handles cases where pinyin might be concatenated without spaces
  console.warn(`Pinyin parsing: syllable count mismatch. Pinyin: "${pinyin}", Characters: "${characters}"`);

  // Fallback: split characters and assign neutral tone
  return charArray.map((char, index) => ({
    syllable: removeToneMarks(pinyin),
    character: char,
    tone_number: 0,
    position: index
  }));
}

/**
 * Add tone mark to a pinyin syllable
 * @param {string} syllable - Pinyin without tone marks
 * @param {number} tone - Tone number (1-4)
 * @returns {string} Syllable with tone mark
 */
function addToneMark(syllable, tone) {
  if (!syllable || tone < 1 || tone > 4) {
    return syllable;
  }

  const marks = TONE_MARKS[tone];

  // Find vowel to mark (priority: a, o, e, i, u, ü)
  const vowelPriority = ['a', 'o', 'e', 'i', 'u', 'ü'];

  for (const vowel of vowelPriority) {
    if (syllable.includes(vowel) && marks[vowel]) {
      return syllable.replace(vowel, marks[vowel]);
    }
  }

  return syllable;
}

/**
 * Validate pinyin format
 * @param {string} pinyin - Pinyin string to validate
 * @returns {boolean} True if valid pinyin format
 */
function isValidPinyin(pinyin) {
  if (!pinyin || typeof pinyin !== 'string') {
    return false;
  }

  // Check if contains valid pinyin characters (letters, tone marks, spaces)
  const pinyinRegex = /^[a-züāēīōūǖáéíóúǘǎěǐǒǔǚàèìòùǜ\s]+$/i;
  return pinyinRegex.test(pinyin.trim());
}

module.exports = {
  detectTone,
  removeToneMarks,
  parsePinyin,
  addToneMark,
  isValidPinyin,
  TONE_MARKS,
  TONE_MAP
};

// Test the pinyin tone parser
const { detectTone, parsePinyin, removeToneMarks, addToneMark, isValidPinyin } = require('./src/utils/pinyinToneParser');

console.log('🔍 Testing Pinyin Tone Parser\n');

// Test 1: Detect tones
console.log('Test 1: Detecting tones');
console.log('hú:', detectTone('hú'), '(expected: 2)');
console.log('tòng:', detectTone('tòng'), '(expected: 4)');
console.log('bèi:', detectTone('bèi'), '(expected: 4)');
console.log('r:', detectTone('r'), '(expected: 0 - light tone)');
console.log('ma:', detectTone('ma'), '(expected: 0 - no tone mark)');
console.log();

// Test 2: Parse full words
console.log('Test 2: Parsing full words');
const hutong = parsePinyin('hú tòng', '胡同');
console.log('胡同 (hú tòng):');
hutong.forEach(s => {
  console.log(`  ${s.character}: ${s.syllable} [tone ${s.tone_number}]`);
});
console.log();

const beir = parsePinyin('bèi r', '倍儿');
console.log('倍儿 (bèi r):');
beir.forEach(s => {
  const toneLabel = s.tone_number === 0 ? 'light tone - will appear smaller!' : `tone ${s.tone_number}`;
  console.log(`  ${s.character}: ${s.syllable} [${toneLabel}]`);
});
console.log();

// Test 3: Remove tone marks
console.log('Test 3: Removing tone marks');
console.log('hútòng →', removeToneMarks('hútòng'));
console.log('bèir →', removeToneMarks('bèir'));
console.log();

// Test 4: Add tone marks
console.log('Test 4: Adding tone marks');
console.log('hu + tone 2 →', addToneMark('hu', 2));
console.log('tong + tone 4 →', addToneMark('tong', 4));
console.log('bei + tone 4 →', addToneMark('bei', 4));
console.log();

// Test 5: Validate pinyin
console.log('Test 5: Validating pinyin format');
console.log('hútòng:', isValidPinyin('hútòng'), '(valid)');
console.log('bèir:', isValidPinyin('bèir'), '(valid)');
console.log('123:', isValidPinyin('123'), '(invalid)');
console.log('你好:', isValidPinyin('你好'), '(invalid)');
console.log();

console.log('✨ All tests complete!');

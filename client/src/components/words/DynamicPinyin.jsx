import React from 'react';
import './DynamicPinyin.css';

/**
 * DynamicPinyin Component
 *
 * The signature feature of Beijingnese Library!
 * Renders Chinese characters with dynamic sizing based on tone:
 * - Tone 0 (light tone/轻声): 65% size, appears smaller like subscript
 * - Tones 1-4: Normal size
 *
 * This creates the unique visual effect where light-tone characters
 * like "儿" in "倍儿" appear smaller than the main character.
 */
const DynamicPinyin = ({ word }) => {
  if (!word || !word.syllables) {
    return null;
  }

  // Sort syllables by position to ensure correct order
  const sortedSyllables = [...word.syllables].sort((a, b) => a.position - b.position);

  return (
    <div className="dynamic-pinyin">
      <div className="characters">
        {sortedSyllables.map((syl, index) => (
          <span
            key={index}
            className={`character tone-${syl.tone_number}`}
            data-tone={syl.tone_number}
            title={`${syl.syllable} (tone ${syl.tone_number})`}
          >
            {syl.character}
          </span>
        ))}
      </div>
      <div className="pinyin-line">
        {sortedSyllables.map((syl, index) => (
          <span
            key={index}
            className={`pinyin-syllable tone-${syl.tone_number}`}
          >
            {syl.syllable}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DynamicPinyin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadWordPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    chineseCharacters: '',
    pinyin: '',
    grammarCategory: 'Noun',
    chineseDefinition: '',
    englishDefinition: '',
    exampleSentence: '',
    exampleTranslation: ''
  });
  const [syllables, setSyllables] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const grammarCategories = ['Noun', 'Verb', 'Adjective', 'Sayings'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateSyllables = () => {
    // Auto-generate syllables from pinyin and characters
    const chars = Array.from(formData.chineseCharacters);
    const pinyinParts = formData.pinyin.trim().split(/\s+/);

    if (chars.length !== pinyinParts.length) {
      setError(`Mismatch: ${chars.length} characters but ${pinyinParts.length} pinyin syllables. Please adjust.`);
      return;
    }

    const generatedSyllables = chars.map((char, index) => ({
      character: char,
      syllable: pinyinParts[index],
      toneNumber: detectTone(pinyinParts[index]),
      position: index
    }));

    setSyllables(generatedSyllables);
    setError(null);
  };

  const detectTone = (syllable) => {
    const toneMap = {
      'ā': 1, 'á': 2, 'ǎ': 3, 'à': 4,
      'ē': 1, 'é': 2, 'ě': 3, 'è': 4,
      'ī': 1, 'í': 2, 'ǐ': 3, 'ì': 4,
      'ō': 1, 'ó': 2, 'ǒ': 3, 'ò': 4,
      'ū': 1, 'ú': 2, 'ǔ': 3, 'ù': 4,
      'ǖ': 1, 'ǘ': 2, 'ǚ': 3, 'ǜ': 4
    };

    for (const char of syllable) {
      if (toneMap[char]) {
        return toneMap[char];
      }
    }
    return 0; // Neutral/light tone
  };

  const handleSyllableChange = (index, field, value) => {
    setSyllables(prev => prev.map((syl, i) =>
      i === index ? { ...syl, [field]: value } : syl
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Validate required fields
    if (!formData.chineseCharacters || !formData.pinyin || !formData.chineseDefinition || !formData.englishDefinition) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    if (syllables.length === 0) {
      setError('Please generate syllables before submitting');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chinese_characters: formData.chineseCharacters,
          pinyin: formData.pinyin,
          grammar_category: formData.grammarCategory,
          putonghua_definition: formData.chineseDefinition,
          english_definition: formData.englishDefinition,
          syllables: syllables,
          example: formData.exampleSentence ? {
            chinese_sentence: formData.exampleSentence,
            english_translation: formData.exampleTranslation
          } : null
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create word');
      }

      setSuccess(true);
      // Reset form
      setFormData({
        chineseCharacters: '',
        pinyin: '',
        grammarCategory: 'Noun',
        chineseDefinition: '',
        englishDefinition: '',
        exampleSentence: '',
        exampleTranslation: ''
      });
      setSyllables([]);

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '1rem', cursor: 'pointer' }}>
        ← Back to Gallery
      </button>

      <h1>Add New Word</h1>

      {success && (
        <div style={{ padding: '1rem', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px', marginBottom: '1rem' }}>
          Word created successfully! Redirecting to gallery...
        </div>
      )}

      {error && (
        <div style={{ padding: '1rem', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '4px', marginBottom: '1rem' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Chinese Characters */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Chinese Characters (北京话) *
          </label>
          <input
            type="text"
            name="chineseCharacters"
            value={formData.chineseCharacters}
            onChange={handleInputChange}
            placeholder="e.g., 倍儿"
            required
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          />
        </div>

        {/* Pinyin */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Pinyin (with tone marks, space-separated) *
          </label>
          <input
            type="text"
            name="pinyin"
            value={formData.pinyin}
            onChange={handleInputChange}
            placeholder="e.g., bèi r (for 儿化音, put 儿 as separate syllable 'r')"
            required
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          />
          <small style={{ color: '#666', display: 'block', marginTop: '0.25rem' }}>
            For 儿化音: Each character gets its own syllable. 儿 should be entered as "r" with tone 0.
          </small>
          <button
            type="button"
            onClick={generateSyllables}
            style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
          >
            Generate Syllables
          </button>
        </div>

        {/* Syllables Preview */}
        {syllables.length > 0 && (
          <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
            <h3>Syllables Preview (Editable)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {syllables.map((syl, index) => (
                <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ minWidth: '30px' }}>#{index + 1}</span>
                  <input
                    type="text"
                    value={syl.character}
                    onChange={(e) => handleSyllableChange(index, 'character', e.target.value)}
                    style={{ width: '60px', padding: '0.25rem' }}
                    placeholder="字"
                  />
                  <input
                    type="text"
                    value={syl.syllable}
                    onChange={(e) => handleSyllableChange(index, 'syllable', e.target.value)}
                    style={{ width: '100px', padding: '0.25rem' }}
                    placeholder="pinyin"
                  />
                  <select
                    value={syl.toneNumber}
                    onChange={(e) => handleSyllableChange(index, 'toneNumber', parseInt(e.target.value))}
                    style={{ padding: '0.25rem' }}
                  >
                    <option value={0}>Tone 0 (light)</option>
                    <option value={1}>Tone 1 (ā)</option>
                    <option value={2}>Tone 2 (á)</option>
                    <option value={3}>Tone 3 (ǎ)</option>
                    <option value={4}>Tone 4 (à)</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grammar Category */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Grammar Category *
          </label>
          <select
            name="grammarCategory"
            value={formData.grammarCategory}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          >
            {grammarCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Chinese Definition */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Chinese/Putonghua Definition *
          </label>
          <textarea
            name="chineseDefinition"
            value={formData.chineseDefinition}
            onChange={handleInputChange}
            placeholder="普通话定义"
            required
            rows={3}
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          />
        </div>

        {/* English Definition */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            English Definition *
          </label>
          <textarea
            name="englishDefinition"
            value={formData.englishDefinition}
            onChange={handleInputChange}
            placeholder="English definition"
            required
            rows={3}
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          />
        </div>

        {/* Example Sentence (Optional) */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Example Sentence (Optional)
          </label>
          <textarea
            name="exampleSentence"
            value={formData.exampleSentence}
            onChange={handleInputChange}
            placeholder="例句"
            rows={2}
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          />
        </div>

        {/* Example Translation (Optional) */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Example Translation (Optional)
          </label>
          <textarea
            name="exampleTranslation"
            value={formData.exampleTranslation}
            onChange={handleInputChange}
            placeholder="Example translation"
            rows={2}
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          />
        </div>

        {/* Submit Button */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            type="submit"
            disabled={loading || syllables.length === 0}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              backgroundColor: loading || syllables.length === 0 ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading || syllables.length === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Creating...' : 'Create Word'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadWordPage;

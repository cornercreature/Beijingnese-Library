import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadWordPage = () => {
  const navigate = useNavigate();
  const [characterInputs, setCharacterInputs] = useState([
    { character: '', syllable: '', toneNumber: 1, position: 0 }
  ]);
  const [formData, setFormData] = useState({
    grammarCategory: 'Noun',
    chineseDefinition: '',
    englishDefinition: '',
    exampleSentence: '',
    exampleTranslation: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const grammarCategories = ['Noun', 'Verb', 'Adjective', 'Sayings'];
  const MAX_CHARACTERS = 8;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCharacterChange = (index, field, value) => {
    setCharacterInputs(prev => prev.map((input, i) =>
      i === index ? { ...input, [field]: value } : input
    ));
  };

  const addCharacterInput = () => {
    if (characterInputs.length < MAX_CHARACTERS) {
      setCharacterInputs(prev => [
        ...prev,
        { character: '', syllable: '', toneNumber: 1, position: prev.length }
      ]);
    }
  };

  const removeCharacterInput = (index) => {
    if (characterInputs.length > 1) {
      setCharacterInputs(prev =>
        prev.filter((_, i) => i !== index)
          .map((input, i) => ({ ...input, position: i }))
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Validate character inputs
    const validCharacters = characterInputs.filter(input => input.character.trim() !== '');
    if (validCharacters.length === 0) {
      setError('Please enter at least one character');
      setLoading(false);
      return;
    }

    // Check that all valid characters have pinyin
    const missingPinyin = validCharacters.some(input => !input.syllable.trim());
    if (missingPinyin) {
      setError('Please enter pinyin for all characters');
      setLoading(false);
      return;
    }

    // Validate required fields
    if (!formData.chineseDefinition || !formData.englishDefinition) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    // Build chinese_characters and pinyin strings
    const chinese_characters = validCharacters.map(input => input.character).join('');
    const pinyin = validCharacters.map(input => input.syllable).join(' ');

    try {
      const response = await fetch('http://localhost:3001/api/words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chinese_characters,
          pinyin,
          grammar_category: formData.grammarCategory,
          putonghua_definition: formData.chineseDefinition,
          english_definition: formData.englishDefinition,
          syllables: validCharacters,
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
      setCharacterInputs([{ character: '', syllable: '', toneNumber: 1, position: 0 }]);
      setFormData({
        grammarCategory: 'Noun',
        chineseDefinition: '',
        englishDefinition: '',
        exampleSentence: '',
        exampleTranslation: ''
      });

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
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '1rem', cursor: 'pointer' }}>
        ← Back to Gallery
      </button>

      <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>上传</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 'normal' }}>Upload</h2>

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

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Character Input Container */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          width: '100%',
          overflowX: 'auto',
          padding: '1rem 0'
        }}>
          {characterInputs.map((input, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                minWidth: '150px'
              }}
            >
              {/* Character Input Box */}
              <div style={{
                width: '150px',
                height: '150px',
                border: '2px solid #333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff'
              }}>
                <input
                  type="text"
                  value={input.character}
                  onChange={(e) => handleCharacterChange(index, 'character', e.target.value)}
                  maxLength={1}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    fontSize: '4rem',
                    textAlign: 'center',
                    outline: 'none',
                    fontFamily: 'serif'
                  }}
                  placeholder="+"
                />
              </div>

              {/* Tone Selection - 声调 */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                fontSize: '0.9rem'
              }}>
                <span style={{ marginRight: '0.25rem' }}>声调</span>
                {[1, 2, 3, 4, 0].map((tone) => (
                  <label key={tone} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <input
                      type="radio"
                      name={`tone-${index}`}
                      value={tone}
                      checked={input.toneNumber === tone}
                      onChange={(e) => handleCharacterChange(index, 'toneNumber', parseInt(e.target.value))}
                    />
                    <span>{tone === 0 ? '轻' : tone}</span>
                  </label>
                ))}
              </div>

              {/* Pinyin Input */}
              <input
                type="text"
                value={input.syllable}
                onChange={(e) => handleCharacterChange(index, 'syllable', e.target.value)}
                placeholder="pinyin"
                style={{
                  width: '140px',
                  padding: '0.5rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}
              />

              {/* Remove button (only show if more than 1) */}
              {characterInputs.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeCharacterInput(index)}
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem',
                    cursor: 'pointer',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px'
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          {/* Add Character Button */}
          {characterInputs.length < MAX_CHARACTERS && (
            <button
              type="button"
              onClick={addCharacterInput}
              style={{
                width: '60px',
                height: '60px',
                border: '2px solid #333',
                backgroundColor: '#fff',
                cursor: 'pointer',
                fontSize: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              +
            </button>
          )}
        </div>

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
            disabled={loading}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              backgroundColor: loading ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer'
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

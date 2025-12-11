import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AudioRecorder from '../components/AudioRecorder';
import Header from '../components/Header';
import './UploadWordPage.css';

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
  const [audioBlob, setAudioBlob] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const grammarCategories = [
    { value: 'Noun', label: '名词' },
    { value: 'Verb', label: '动词' },
    { value: 'Adjective', label: '形容词' },
    { value: 'Sayings', label: '说法' }
  ];
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

  const handleRecordingComplete = (blob) => {
    setAudioBlob(blob);
  };

  const handleRecordingClear = () => {
    setAudioBlob(null);
  };

  const handleBackgroundClick = (e) => {
    const target = e.target;
    // Check if the click is on an interactive element or its child
    const isInteractive = target.tagName === 'BUTTON' ||
                         target.tagName === 'INPUT' ||
                         target.tagName === 'TEXTAREA' ||
                         target.tagName === 'SELECT' ||
                         target.tagName === 'LABEL' ||
                         target.closest('button') ||
                         target.closest('input') ||
                         target.closest('textarea') ||
                         target.closest('select') ||
                         target.closest('label') ||
                         target.closest('.character-input-group') ||
                         target.closest('.tone-selection') ||
                         target.closest('.audio-recorder') ||
                         target.closest('form');

    if (!isInteractive) {
      navigate('/');
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
      // Create FormData for multipart upload
      const formDataToSend = new FormData();

      // Add audio blob if present
      if (audioBlob) {
        // Convert blob to file with proper filename
        const audioFile = new File([audioBlob], `${chinese_characters}-${Date.now()}.webm`, {
          type: 'audio/webm'
        });
        formDataToSend.append('audio', audioFile);
      }

      // Add word data as JSON string
      formDataToSend.append('chinese_characters', chinese_characters);
      formDataToSend.append('pinyin', pinyin);
      formDataToSend.append('grammar_category', formData.grammarCategory);
      formDataToSend.append('putonghua_definition', formData.chineseDefinition);
      formDataToSend.append('english_definition', formData.englishDefinition);
      console.log('Frontend: Sending syllables with tones:', validCharacters);
      formDataToSend.append('syllables', JSON.stringify(validCharacters));

      // First request: Create the word with audio
      const response = await fetch('http://localhost:3001/api/words', {
        method: 'POST',
        body: formDataToSend
        // Note: Don't set Content-Type header - browser will set it with boundary for FormData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create word');
      }

      const wordData = await response.json();
      const createdWordId = wordData.data.id;

      // Second request: Add example sentence if provided (same pattern as AddExamplePage)
      if (formData.exampleSentence && formData.exampleSentence.trim()) {
        const exampleResponse = await fetch(`http://localhost:3001/api/words/${createdWordId}/examples`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chinese_sentence: formData.exampleSentence,
            english_translation: formData.exampleTranslation || null
          })
        });

        if (!exampleResponse.ok) {
          console.error('Failed to add example sentence, but word was created successfully');
        }
      }

      // Reset form
      setCharacterInputs([{ character: '', syllable: '', toneNumber: 1, position: 0 }]);
      setFormData({
        grammarCategory: 'Noun',
        chineseDefinition: '',
        englishDefinition: '',
        exampleSentence: '',
        exampleTranslation: ''
      });
      setAudioBlob(null);

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
    <>
      <Header />
      <div className="upload-word-page-overlay">
        <div className="upload-word-page" onClick={handleBackgroundClick}>

      <h1>上传</h1>
      <h2>upload</h2>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="upload-word-form">
        {/* Character Input Container */}
        <div className="character-input-container">
          {characterInputs.map((input, index) => (
            <div key={index} className="character-input-group">
              {/* Character Input Box */}
              <div className="character-box">
                <input
                  type="text"
                  value={input.character}
                  onChange={(e) => handleCharacterChange(index, 'character', e.target.value)}
                  maxLength={1}
                  className="character-input"
                  placeholder="+"
                />
              </div>

              {/* Tone Selection - 声调 */}
              <div className="tone-selection">
                <span>声调</span>
                {[1, 2, 3, 4, 0].map((tone) => (
                  <label key={tone} className="tone-label">
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
                placeholder="拼音"
                className="pinyin-input"
              />

              {/* Remove button (only show if more than 1) */}
              {characterInputs.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeCharacterInput(index)}
                  className="remove-character-button"
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
              className="add-character-button"
            >
              +
            </button>
          )}
        </div>

        {/* Grammar Category */}
        <div className="form-group">
          <label>词性</label>
          <select
            name="grammarCategory"
            value={formData.grammarCategory}
            onChange={handleInputChange}
            required
          >
            {grammarCategories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>

        {/* Chinese Definition */}
        <div className="form-group">
          <label>解释下意思 *</label>
          <textarea
            name="chineseDefinition"
            value={formData.chineseDefinition}
            onChange={handleInputChange}
            placeholder="意思写这儿"
            required
            rows={3}
          />
        </div>

        {/* English Definition */}
        <div className="form-group">
          <label>给个英文定义</label>
          <textarea
            name="englishDefinition"
            value={formData.englishDefinition}
            onChange={handleInputChange}
            placeholder="英文写这儿"
            required
            rows={3}
          />
        </div>

        {/* Example Sentence (Optional) */}
        <div className="form-group">
          <label>再给个例子</label>
          <textarea
            name="exampleSentence"
            value={formData.exampleSentence}
            onChange={handleInputChange}
            placeholder="例子放这儿"
            rows={2}
          />
        </div>

        {/* Example Translation (Optional) */}
        <div className="form-group">
          <label>最后来给例子翻译一下</label>
          <textarea
            name="exampleTranslation"
            value={formData.exampleTranslation}
            onChange={handleInputChange}
            placeholder="英文翻译放这儿"
            rows={2}
          />
        </div>

        {/* Audio Recording (Optional) */}
        <AudioRecorder
          onRecordingComplete={handleRecordingComplete}
          onRecordingClear={handleRecordingClear}
        />

        {/* Submit Button */}
        <div className="form-buttons">
          <button
            type="submit"
            disabled={loading}
            className="submit-button"
          >
            {loading ? '创建中...' : '确认添加'}
          </button>
        </div>
      </form>
      </div>
    </div>
    </>
  );
};

export default UploadWordPage;

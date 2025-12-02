import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import wordService from '../services/wordService';
import './AddExamplePage.css';

const AddExamplePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [word, setWord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [exampleData, setExampleData] = useState({
    chineseSentence: '',
    englishTranslation: ''
  });

  useEffect(() => {
    const fetchWord = async () => {
      try {
        setLoading(true);
        const response = await wordService.getWordById(id);
        const wordData = response.data || response;
        setWord(wordData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWord();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExampleData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    // Validate
    if (!exampleData.chineseSentence.trim()) {
      setError('Please enter a Chinese example sentence');
      setSubmitting(false);
      return;
    }

    try {
      // Call API to add example
      const response = await fetch(`http://localhost:3001/api/words/${id}/examples`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chinese_sentence: exampleData.chineseSentence,
          english_translation: exampleData.englishTranslation || null
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add example');
      }

      setSuccess(true);

      // Redirect back to word detail page after 1.5 seconds
      setTimeout(() => {
        navigate(`/words/${id}`);
      }, 1500);

    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="add-example-page">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (!word) {
    return (
      <div className="add-example-page">
        <div className="error">Word not found</div>
        <button onClick={() => navigate('/')}>← Back to Gallery</button>
      </div>
    );
  }

  return (
    <div className="add-example-page">
      <div className="add-example-container">
        <button
          onClick={() => navigate(`/words/${id}`)}
          className="back-to-word-button"
        >
          ← Back to {word.chinese_characters}
        </button>

        <h1 className="page-title">Add Example</h1>
        <div className="word-display">
          <div className="word-characters">{word.chinese_characters}</div>
          <div className="word-pinyin">{word.pinyin}</div>
        </div>

        {success && (
          <div className="success-message">
            Example added successfully! Redirecting...
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="example-form">
          <div className="form-group">
            <label htmlFor="chineseSentence">
              Chinese Example Sentence *
            </label>
            <textarea
              id="chineseSentence"
              name="chineseSentence"
              value={exampleData.chineseSentence}
              onChange={handleInputChange}
              placeholder="例句..."
              required
              rows={4}
              disabled={submitting || success}
            />
          </div>

          <div className="form-group">
            <label htmlFor="englishTranslation">
              English Translation (Optional)
            </label>
            <textarea
              id="englishTranslation"
              name="englishTranslation"
              value={exampleData.englishTranslation}
              onChange={handleInputChange}
              placeholder="English translation..."
              rows={4}
              disabled={submitting || success}
            />
          </div>

          <div className="button-group">
            <button
              type="submit"
              disabled={submitting || success}
              className="submit-button"
            >
              {submitting ? 'Adding...' : 'Add Example'}
            </button>
            <button
              type="button"
              onClick={() => navigate(`/words/${id}`)}
              disabled={submitting}
              className="cancel-button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExamplePage;

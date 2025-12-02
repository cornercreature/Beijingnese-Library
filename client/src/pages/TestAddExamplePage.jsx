import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/AddExamplePage.css';

/**
 * Test page to verify Add Example Page functionality
 * Access at: http://localhost:3000/test-add-example
 */
const TestAddExamplePage = () => {
  const navigate = useNavigate();

  const mockWord = {
    id: 999,
    chinese_characters: '测试',
    pinyin: 'cè shì'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Test form submitted! In the real app, this would save to the database.');
  };

  return (
    <div className="add-example-page">
      <div className="add-example-container">
        <button
          onClick={() => navigate('/')}
          className="back-to-word-button"
        >
          ← Back to Gallery (Test)
        </button>

        <h1 className="page-title">Add Example (Test)</h1>
        <div className="word-display">
          <div className="word-characters">{mockWord.chinese_characters}</div>
          <div className="word-pinyin">{mockWord.pinyin}</div>
        </div>

        <form onSubmit={handleSubmit} className="example-form">
          <div className="form-group">
            <label htmlFor="chineseSentence">
              Chinese Example Sentence *
            </label>
            <textarea
              id="chineseSentence"
              name="chineseSentence"
              placeholder="例句..."
              required
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="englishTranslation">
              English Translation (Optional)
            </label>
            <textarea
              id="englishTranslation"
              name="englishTranslation"
              placeholder="English translation..."
              rows={4}
            />
          </div>

          <div className="button-group">
            <button type="submit" className="submit-button">
              Add Example (Test)
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="cancel-button"
            >
              Cancel
            </button>
          </div>
        </form>

        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
          <h3>Debug Info:</h3>
          <p>If you can see this form with Chinese/English textarea fields and submit/cancel buttons, the Add Example page is working!</p>
        </div>
      </div>
    </div>
  );
};

export default TestAddExamplePage;

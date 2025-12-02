import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/WordDetailPage.css';

/**
 * Test page to verify Word Detail Page 2 functionality
 * Access at: http://localhost:3000/test-word-detail
 */
const TestWordDetailPage = () => {
  const navigate = useNavigate();

  // Mock word data
  const mockWord = {
    id: 999,
    chinese_characters: '测试',
    pinyin: 'cè shì',
    english_definition: 'This is a test word to verify page 2 functionality',
    putonghua_definition: '这是一个测试词，用于验证第二页功能',
    grammar_category: 'Noun',
    syllables: [
      { syllable: 'cè', character: '测', tone_number: 4, position: 0 },
      { syllable: 'shì', character: '试', tone_number: 4, position: 1 }
    ],
    examples: [
      {
        chinese_sentence: '这是第一个例句',
        english_translation: 'This is the first example sentence'
      },
      {
        chinese_sentence: '这是第二个例句',
        english_translation: 'This is the second example sentence'
      }
    ]
  };

  return (
    <div className="word-detail-page">
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Test Page - Word Detail Page 2</h1>
        <p>This is a standalone test of the examples page functionality</p>
        <button onClick={() => navigate('/')} style={{ marginBottom: '2rem' }}>
          ← Back to Gallery
        </button>
      </div>

      {/* Second Page - Examples (Standalone) */}
      <div className="page page-two" style={{ position: 'relative', overflow: 'visible', minHeight: 'auto' }}>
        <div className="examples-page-content">
          <h2 className="examples-title">Example Usage</h2>

          <div className="examples-list">
            {mockWord.examples && mockWord.examples.length > 0 ? (
              mockWord.examples.map((example, idx) => (
                <div key={idx} className="example-box">
                  <div className="example-chinese">
                    {example.chinese_sentence}
                  </div>
                  {example.english_translation && (
                    <div className="example-english">
                      {example.english_translation}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-examples-message">
                No example sentences yet.
              </div>
            )}
          </div>

          <button
            onClick={() => navigate(`/words/${mockWord.id}/add-example`)}
            className="add-example-link"
          >
            + Add Another Example
          </button>
        </div>
      </div>

      <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f0f0f0', marginTop: '2rem' }}>
        <h3>Debug Info:</h3>
        <p>If you can see the examples above and the "+ Add Another Example" button, the page 2 functionality is working!</p>
        <p>Number of examples: {mockWord.examples.length}</p>
      </div>
    </div>
  );
};

export default TestWordDetailPage;

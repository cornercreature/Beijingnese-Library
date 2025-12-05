import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WordCard from '../components/words/WordCard';
import wordService from '../services/wordService';
import './GalleryPage.css';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['Noun', 'Verb', 'Adjective', 'Sayings', 'Images'];

  useEffect(() => {
    fetchWords();
  }, [selectedCategory]);

  const fetchWords = async () => {
    try {
      setLoading(true);
      const response = await wordService.getAllWords({
        category: selectedCategory
      });
      setWords(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load words');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1>北京话词库</h1>
        <h2>Beijingnese Library</h2>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button
            onClick={() => navigate('/upload')}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            + Add New Word
          </button>
          <button
            onClick={() => navigate('/upload-image')}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            + Add New Image
          </button>
        </div>
      </header>

      <div className="gallery-container">
        <aside className="sidebar">
          <h3>Grammar Categories</h3>
          <nav className="category-nav">
            <button
              className={!selectedCategory ? 'active' : ''}
              onClick={() => setSelectedCategory(null)}
            >
              All Words
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={selectedCategory === cat ? 'active' : ''}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </nav>
        </aside>

        <main className="gallery-content">
          {loading && <div className="loading">Loading words...</div>}
          {error && <div className="error">{error}</div>}

          {!loading && !error && (
            <div className="words-grid">
              {words.map(word => (
                <WordCard key={word.id} word={word} />
              ))}
            </div>
          )}

          {!loading && !error && words.length === 0 && (
            <div className="empty-state">
              No words found. Start by adding some words!
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default GalleryPage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WordCard from '../components/words/WordCard';
import wordService from '../services/wordService';
import './GalleryPage.css';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [allWords, setAllWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = ['Noun', 'Verb', 'Adjective', 'Sayings', 'Images'];

  useEffect(() => {
    fetchAllWords();
  }, []);

  const fetchAllWords = async () => {
    try {
      setLoading(true);
      const response = await wordService.getAllWords();
      setAllWords(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load words');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filterWordsByCategory = (category) => {
    return allWords.filter(word => word.grammar_category === category);
  };

  if (loading) {
    return (
      <div className="gallery-page">
        <header className="gallery-header">
          <h1>北京话词库</h1>
          <h2>Beijingnese Library</h2>
        </header>
        <div className="loading">Loading words...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gallery-page">
        <header className="gallery-header">
          <h1>北京话词库</h1>
          <h2>Beijingnese Library</h2>
        </header>
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1>北京话词库</h1>
        <h2>Beijingnese Library</h2>
        <div className="header-buttons">
          <button
            onClick={() => navigate('/upload')}
            className="add-word-button"
          >
            + Add New Word
          </button>
          <button
            onClick={() => navigate('/upload-image')}
            className="add-image-button"
          >
            + Add New Image
          </button>
        </div>
      </header>

      <div className="gallery-content">
        {/* All Words Section */}
        <section className="category-section" id="all-words">
          <h2 className="category-title">All Words</h2>
          <div className="words-grid">
            {allWords.map(word => (
              <WordCard key={word.id} word={word} />
            ))}
          </div>
        </section>

        {/* Category Sections */}
        {categories.map(category => {
          const categoryWords = filterWordsByCategory(category);
          if (categoryWords.length === 0) return null;

          return (
            <section key={category} className="category-section" id={category.toLowerCase()}>
              <h2 className="category-title">{category}</h2>
              <div className="words-grid">
                {categoryWords.map(word => (
                  <WordCard key={word.id} word={word} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryPage;

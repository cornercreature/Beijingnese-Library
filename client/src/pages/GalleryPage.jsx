import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import WordCard from '../components/words/WordCard';
import wordService from '../services/wordService';
import './GalleryPage.css';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [allWords, setAllWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('all-words');

  const leftIndicatorRef = useRef(null);
  const rightIndicatorRef = useRef(null);

  const categories = ['Noun', 'Verb', 'Adjective', 'Sayings', 'Images'];

  useEffect(() => {
    fetchAllWords();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['all-words', ...categories.map(c => c.toLowerCase())];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = 'all-words';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);

      const galleryContent = document.querySelector('.gallery-content');
      const header = document.querySelector('.gallery-header');

      if (galleryContent && header) {
        const contentStart = header.offsetHeight;
        const contentHeight = galleryContent.offsetHeight;
        const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = window.scrollY / totalScrollableHeight;
        const indicatorPosition = contentStart + (scrollPercentage * contentHeight);

        if (leftIndicatorRef.current) {
          leftIndicatorRef.current.style.top = `${indicatorPosition}px`;
        }
        if (rightIndicatorRef.current) {
          rightIndicatorRef.current.style.top = `${indicatorPosition}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories]);

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

  const categoryLabels = {
    'all-words': { chinese: '全部', english: 'All' },
    'Noun': { chinese: '名词', english: 'Nouns' },
    'Verb': { chinese: '动词', english: 'Verbs' },
    'Adjective': { chinese: '形容词', english: 'Adjectives' },
    'Sayings': { chinese: '说法', english: 'Sayings' },
    'Images': { chinese: '图片', english: 'Pictures' }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="gallery-page">
      {/* Left Sidebar - Chinese */}
      <aside className="scroll-sidebar scroll-sidebar-left">
        <nav className="sidebar-nav">
          <button
            onClick={() => scrollToSection('all-words')}
            className={`sidebar-nav-item ${activeSection === 'all-words' ? 'active' : ''}`}
          >
            {categoryLabels['all-words'].chinese}
          </button>
          {categories.map(category => {
            const categoryWords = filterWordsByCategory(category);
            if (categoryWords.length === 0) return null;
            return (
              <button
                key={category}
                onClick={() => scrollToSection(category.toLowerCase())}
                className={`sidebar-nav-item ${activeSection === category.toLowerCase() ? 'active' : ''}`}
              >
                {categoryLabels[category].chinese}
              </button>
            );
          })}
        </nav>
        <div ref={leftIndicatorRef} className="scroll-indicator"></div>
      </aside>

      {/* Right Sidebar - English */}
      <aside className="scroll-sidebar scroll-sidebar-right">
        <nav className="sidebar-nav">
          <button
            onClick={() => scrollToSection('all-words')}
            className={`sidebar-nav-item ${activeSection === 'all-words' ? 'active' : ''}`}
          >
            {categoryLabels['all-words'].english}
          </button>
          {categories.map(category => {
            const categoryWords = filterWordsByCategory(category);
            if (categoryWords.length === 0) return null;
            return (
              <button
                key={category}
                onClick={() => scrollToSection(category.toLowerCase())}
                className={`sidebar-nav-item ${activeSection === category.toLowerCase() ? 'active' : ''}`}
              >
                {categoryLabels[category].english}
              </button>
            );
          })}
        </nav>
        <div ref={rightIndicatorRef} className="scroll-indicator"></div>
      </aside>

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

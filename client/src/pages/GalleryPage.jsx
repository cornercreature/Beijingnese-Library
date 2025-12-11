import React, { useState, useEffect, useRef } from 'react';
import WordCard from '../components/words/WordCard';
import Header from '../components/Header';
import SplashScreen from '../components/SplashScreen';
import wordService from '../services/wordService';
import './GalleryPage.css';

const GalleryPage = () => {
  const [allWords, setAllWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('all-words');
  const [showSplash, setShowSplash] = useState(true);

  const leftIndicatorRef = useRef(null);
  const rightIndicatorRef = useRef(null);

  const categories = ['Noun', 'Verb', 'Adjective', 'Sayings', 'Images'];

  useEffect(() => {
    fetchAllWords();
    // Hide splash screen after animation completes
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500); // 3.5 seconds total animation time
    return () => clearTimeout(timer);
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

      // Position indicator at the active category button
      const activeIndex = sections.indexOf(currentSection);

      if (activeIndex !== -1) {
        const sidebarNav = document.querySelector('.sidebar-nav');
        if (sidebarNav) {
          const navItems = sidebarNav.querySelectorAll('.sidebar-nav-item');
          if (navItems[activeIndex]) {
            const activeButton = navItems[activeIndex];
            const buttonOffsetTop = activeButton.offsetTop;

            if (leftIndicatorRef.current) {
              leftIndicatorRef.current.style.top = `${buttonOffsetTop}px`;
            }
            if (rightIndicatorRef.current) {
              rightIndicatorRef.current.style.top = `${buttonOffsetTop}px`;
            }
          }
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
      <>
        <SplashScreen show={true} duration={3500} />
        <Header />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="gallery-page">
          <div className="error">{error}</div>
        </div>
      </>
    );
  }

  const categoryLabels = {
    'all-words': { chinese: '全部', english: 'all' },
    'Noun': { chinese: '名词', english: 'noun' },
    'Verb': { chinese: '动词', english: 'verb' },
    'Adjective': { chinese: '形容词', english: 'adjective' },
    'Sayings': { chinese: '说法', english: 'saying' },
    'Images': { chinese: '图片', english: 'picture' }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <SplashScreen show={showSplash} duration={3500} />
      <Header />
      <div className="gallery-page">
        {/* Left Sidebar - Chinese */}
        <aside className="scroll-sidebar scroll-sidebar-left">
          <nav className="sidebar-nav">
            <button
              onClick={() => scrollToSection('all-words')}
              className={`sidebar-nav-item chinese-all ${activeSection === 'all-words' ? 'active' : ''}`}
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
                  className={`sidebar-nav-item chinese-${category.toLowerCase()} ${activeSection === category.toLowerCase() ? 'active' : ''}`}
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
              className={`sidebar-nav-item english-all ${activeSection === 'all-words' ? 'active' : ''}`}
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
                  className={`sidebar-nav-item english-${category.toLowerCase()} ${activeSection === category.toLowerCase() ? 'active' : ''}`}
                >
                  {categoryLabels[category].english}
                </button>
              );
            })}
          </nav>
          <div ref={rightIndicatorRef} className="scroll-indicator"></div>
        </aside>

      <div className="gallery-content">
        {/* All Words Section */}
        <section className="category-section" id="all-words">
          <h2 className="category-title">
            <span className="category-chinese">{categoryLabels['all-words'].chinese}</span><br/>
            <span className="category-english">{categoryLabels['all-words'].english}</span>
          </h2>
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
              <h2 className="category-title">
                <span className="category-chinese">{categoryLabels[category].chinese}</span><br/>
                <span className="category-english">{categoryLabels[category].english}</span>
              </h2>
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
    </>
  );
};

export default GalleryPage;

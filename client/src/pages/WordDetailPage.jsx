import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import wordService from '../services/wordService';
import Header from '../components/Header';
import AudioRecorder from '../components/AudioRecorder';
import html2canvas from 'html2canvas';
import './WordDetailPage.css';

const WordDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [word, setWord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [isAddExampleOpen, setIsAddExampleOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [exampleData, setExampleData] = useState({
    chineseSentence: '',
    englishTranslation: ''
  });
  const [isRecordingAudio, setIsRecordingAudio] = useState(false);
  const [recordedAudioBlob, setRecordedAudioBlob] = useState(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef(null);
  const containerRef = useRef(null);

  // Grammar category mapping - English to Chinese
  const grammarCategoryMap = {
    'Noun': '名词',
    'Verb': '动词',
    'Adjective': '形容词',
    'Adverb': '副词',
    'Pronoun': '代词',
    'Preposition': '介词',
    'Conjunction': '连词',
    'Interjection': '感叹词',
    'Particle': '助词',
    'Measure Word': '量词',
    'Number': '数词'
  };

  useEffect(() => {
    const fetchWord = async () => {
      try {
        setLoading(true);
        const response = await wordService.getWordById(id);
        // API returns { success: true, data: {...} }
        const wordData = response.data || response;
        setWord(wordData);
        // Trigger animation on initial load
        setTimeout(() => setPlayAnimation(true), 100);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWord();
  }, [id]);

  // Reload audio element when audio_file_path changes
  useEffect(() => {
    if (audioRef.current && word?.audio_file_path) {
      audioRef.current.load();
      setIsPlayingAudio(false); // Reset playing state when new audio is loaded
    }
  }, [word?.audio_file_path]);

  const handleCharactersClick = () => {
    setPlayAnimation(false);
    setTimeout(() => setPlayAnimation(true), 50);
  };

  const togglePage = () => {
    setShowSecondPage(!showSecondPage);
  };

  const handleAudioPlay = () => {
    if (audioRef.current) {
      if (isPlayingAudio) {
        audioRef.current.pause();
        setIsPlayingAudio(false);
      } else {
        // Ensure audio is loaded before playing
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlayingAudio(true);
            })
            .catch(err => {
              console.error('Error playing audio:', err);
              // Try loading and playing again
              audioRef.current.load();
              audioRef.current.play()
                .then(() => setIsPlayingAudio(true))
                .catch(err2 => console.error('Retry failed:', err2));
            });
        }
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlayingAudio(false);
  };

  const toggleAddExample = () => {
    setIsAddExampleOpen(!isAddExampleOpen);
    setExampleData({ chineseSentence: '', englishTranslation: '' });
    setSubmitError(null);
    setSubmitSuccess(false);
  };

  const handleExampleInputChange = (e) => {
    const { name, value } = e.target;
    setExampleData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExampleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    if (!exampleData.chineseSentence.trim()) {
      setSubmitError('Please enter a Chinese example sentence');
      setSubmitting(false);
      return;
    }

    try {
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

      const newExample = await response.json();

      setSubmitSuccess(true);

      // Update the word's examples list
      setWord(prev => ({
        ...prev,
        examples: [...(prev.examples || []), newExample.data]
      }));

      // Close panel after 1.5 seconds
      setTimeout(() => {
        setIsAddExampleOpen(false);
        setExampleData({ chineseSentence: '', englishTranslation: '' });
        setSubmitSuccess(false);
        setSubmitting(false);
      }, 1500);

    } catch (err) {
      setSubmitError(err.message);
      setSubmitting(false);
    }
  };

  const toggleRecordingPanel = () => {
    setIsRecordingAudio(!isRecordingAudio);
    setRecordedAudioBlob(null);
  };

  const handleRecordingComplete = (audioBlob) => {
    setRecordedAudioBlob(audioBlob);
  };

  const handleRecordingClear = () => {
    setRecordedAudioBlob(null);
  };

  const handleAudioUpload = async () => {
    if (!recordedAudioBlob) return;

    try {
      console.log('Starting audio upload...');
      console.log('Audio blob type:', recordedAudioBlob.type);
      console.log('Audio blob size:', recordedAudioBlob.size);

      // Determine file extension based on MIME type
      let extension = 'webm';
      if (recordedAudioBlob.type.includes('mp4')) {
        extension = 'mp4';
      } else if (recordedAudioBlob.type.includes('ogg')) {
        extension = 'ogg';
      }

      const formData = new FormData();
      formData.append('audio', recordedAudioBlob, `recording.${extension}`);

      const response = await fetch(`http://localhost:3001/api/words/${id}/audio`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload audio');
      }

      const result = await response.json();
      console.log('Upload result:', result);

      // Update word with new audio path
      setWord(prev => {
        const updated = {
          ...prev,
          audio_file_path: result.data.audio_file_path,
          audio_file_size: result.data.audio_file_size,
          audio_mime_type: result.data.audio_mime_type
        };
        console.log('Updated word state:', updated);
        return updated;
      });

      // Close recording panel
      setIsRecordingAudio(false);
      setRecordedAudioBlob(null);

      console.log('Audio upload complete, panel closed');
    } catch (err) {
      console.error('Error uploading audio:', err);
      alert('Failed to upload audio recording');
    }
  };

  const handleExportToPng = async (elementId, filename) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: '#ffffff',
        scale: 2, // Higher quality
        logging: false,
        useCORS: true
      });

      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
      }, 'image/png');
    } catch (error) {
      console.error('Error exporting to PNG:', error);
    }
  };

  // Build pinyin display with tone marks
  const renderPinyin = () => {
    if (!word || !word.syllables || word.syllables.length === 0) {
      return word?.pinyin || '';
    }

    return word.syllables.map((syl, idx) => (
      <span key={idx} className="pinyin-syllable">
        {syl.syllable}
        {idx < word.syllables.length - 1 ? ' ' : ''}
      </span>
    ));
  };

  if (loading) {
    return (
      <div className="word-detail-page">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="word-detail-page">
        <div className="error">Error: {error}</div>
        <button onClick={() => navigate('/')}>← back to gallery</button>
      </div>
    );
  }

  if (!word) {
    return (
      <div className="word-detail-page">
        <div className="error">Word not found</div>
        <button onClick={() => navigate('/')}>← back to gallery</button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="word-detail-page">
        {/* Navigation buttons */}
        <div className="nav-buttons">
        <button onClick={() => navigate('/')} className={`back-button ${showSecondPage ? 'switched' : ''}`}>
          <span className="button-chinese">返回</span>
          <span className="button-english">back</span>
        </button>
        <button onClick={togglePage} className={`toggle-page-button ${showSecondPage ? 'switched' : ''}`}>
          {showSecondPage ? (
            <>
              <span className="button-chinese">看看词</span>
              <span className="button-english">term</span>
            </>
          ) : (
            <>
              <span className="button-english">examples</span>
              <span className="button-chinese">看看例子</span>
            </>
          )}
        </button>
      </div>

      {/* Two-page sliding container */}
      <div
        ref={containerRef}
        className={`pages-container ${showSecondPage ? 'show-second' : ''}`}
      >
        {/* First Page - Main Word Display */}
        <div className="page page-one">
          {/* Sound Icon - Top Right */}
          <img
            src="/soundicon.png"
            alt="Play sound"
            className={`sound-icon ${!word.audio_file_path ? 'disabled' : ''}`}
            onClick={word.audio_file_path ? handleAudioPlay : null}
          />

          {/* Record Audio Button - Always visible */}
          <button
            onClick={toggleRecordingPanel}
            className="record-audio-button"
          >
            <div>录音</div>
            <div>record</div>
          </button>

          {/* Recording Panel */}
          <div className={`recording-panel ${isRecordingAudio ? 'open' : ''}`}>
            <div className="recording-panel-content">
              <button className="close-recording" onClick={toggleRecordingPanel}>×</button>
              <h3>
                <div>录制发音</div>
                <div>Record Pronunciation</div>
              </h3>

              <AudioRecorder
                onRecordingComplete={handleRecordingComplete}
                onRecordingClear={handleRecordingClear}
              />

              {recordedAudioBlob && (
                <button
                  onClick={handleAudioUpload}
                  className="upload-audio-button"
                >
                  保存录音 / Save Recording
                </button>
              )}
            </div>
          </div>

          <div className="word-content">
            {/* Grammar Category in Chinese */}
            {word.grammar_category && (
              <div className="grammar-tag-chinese">
                {grammarCategoryMap[word.grammar_category] || word.grammar_category}
              </div>
            )}

            {/* Chinese (Putonghua) Definition */}
            <div className="definition-item definition-item-chinese">
              <div className="definition-text putonghua">
                {word.putonghua_definition}
              </div>
            </div>

            {/* Chinese Characters - Large */}
            <div
              className="chinese-characters"
              onClick={handleCharactersClick}
              style={{ cursor: 'pointer' }}
            >
              {word.syllables && word.syllables.length > 0 ? (
                word.syllables
                  .sort((a, b) => a.position - b.position)
                  .map((syl, idx) => (
                    <span
                      key={idx}
                      className={`character-detail tone-${syl.tone_number} ${playAnimation ? 'animate-shrink' : ''}`}
                      style={{
                        fontSize: syl.tone_number === 0 ? '0.65em' : '1em',
                        display: 'inline-block'
                      }}
                    >
                      {syl.character}
                    </span>
                  ))
              ) : (
                word.chinese_characters
              )}
            </div>

            {/* Pinyin */}
            <div className="pinyin-display">
              {renderPinyin()}
            </div>

            {/* Audio Element - Always rendered but hidden */}
            {word.audio_file_path && (
              <audio
                ref={audioRef}
                src={`http://localhost:3001${word.audio_file_path}`}
                preload="metadata"
                style={{ display: 'none' }}
                onEnded={handleAudioEnded}
                onError={(e) => {
                  console.error('Audio element error:', e);
                  console.error('Audio error code:', e.target.error?.code);
                  console.error('Audio error message:', e.target.error?.message);
                  console.error('Audio src:', `http://localhost:3001${word.audio_file_path}`);
                  console.error('Full word object:', word);
                }}
                onCanPlay={() => console.log('Audio can play')}
                onLoadedData={() => {
                  console.log('Audio loaded data');
                  console.log('Audio src:', `http://localhost:3001${word.audio_file_path}`);
                }}
              />
            )}

            {/* English Definition */}
            <div className="definitions">
              <div className="definition-item definition-item-english">
                <div className="definition-text english">
                  {word.english_definition}
                </div>
              </div>
            </div>

            {/* Grammar Category Tag */}
            <div className="grammar-tag-large">
              {word.grammar_category}
            </div>
          </div>
        </div>

        {/* Second Page - Examples */}
        <div className="page page-two">
          <div className="examples-page-content">
            {/* <h2 className="examples-title">
              <div>例句</div>
              <div>Example Usage</div>
            </h2> */}

            <div className="examples-list">
              {word.examples && word.examples.length > 0 ? (
                word.examples.map((example, idx) => (
                  <div key={idx} className="example-wrapper">
                    <div id={`example-card-${idx}`} className="example-box">
                      <button
                        onClick={() => handleExportToPng(
                          `example-card-${idx}`,
                          `${word.chinese_characters}-example-${idx + 1}.png`
                        )}
                        className="export-button"
                      >
                        Export as PNG
                      </button>
                      <div className="example-chinese">
                        {example.chinese_sentence}
                      </div>
                      {example.english_translation && (
                        <div className="example-english">
                          {example.english_translation}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-examples-message">
                  <div>暂无例句</div>
                  <div>No example sentences yet.</div>
                </div>
              )}
            </div>

            {/* Add Example Panel */}
            <div
              className={`add-example-panel ${isAddExampleOpen ? 'open' : ''}`}
              onClick={(e) => {
                // Close if clicking the panel background (not the content)
                if (e.target === e.currentTarget) {
                  toggleAddExample();
                }
              }}
            >
              <div
                className="add-example-content"
                onClick={(e) => {
                  // Check if click is outside form elements
                  const target = e.target;
                  const isFormElement = target.tagName === 'INPUT' ||
                                       target.tagName === 'TEXTAREA' ||
                                       target.tagName === 'BUTTON' ||
                                       target.closest('button') ||
                                       target.closest('textarea') ||
                                       target.closest('input');

                  if (!isFormElement) {
                    toggleAddExample();
                  }
                }}
              >
                <h2>
                  <div>加个例子</div>
                </h2>

                {submitSuccess && (
                  <div className="success-message">
                    Example added successfully!
                  </div>
                )}

                {submitError && (
                  <div className="error-message">
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleExampleSubmit} className="example-form">
                  <div className="form-group">
                    <textarea
                      id="chineseSentence"
                      name="chineseSentence"
                      value={exampleData.chineseSentence}
                      onChange={handleExampleInputChange}
                      placeholder="例子放这儿"
                      required
                      rows={4}
                      disabled={submitting || submitSuccess}
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="englishTranslation"
                      name="englishTranslation"
                      value={exampleData.englishTranslation}
                      onChange={handleExampleInputChange}
                      placeholder="给个英文翻译（不想给的话留白就好）"
                      rows={4}
                      disabled={submitting || submitSuccess}
                    />
                  </div>

                  <div className="button-group">
                    <button
                      type="submit"
                      disabled={submitting || submitSuccess}
                      className="submit-button"
                    >
                      {submitting ? 'Adding...' : '确认添加'}
                    </button>
                    <button
                      type="button"
                      onClick={toggleAddExample}
                      disabled={submitting}
                      className="cancel-button"
                    >
                      取消
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <button
              onClick={toggleAddExample}
              className={`add-example-link ${isAddExampleOpen ? 'hidden' : ''}`}
            >
              <div>加个例子</div>
              <div>add another example</div>
            </button>
          </div>
        </div>
      </div>

      {/* Page indicator dots */}
      <div className="page-indicators">
        <div className={`indicator ${!showSecondPage ? 'active' : ''}`} onClick={() => setShowSecondPage(false)} />
        <div className={`indicator ${showSecondPage ? 'active' : ''}`} onClick={() => setShowSecondPage(true)} />
      </div>
      </div>
    </>
  );
};

export default WordDetailPage;

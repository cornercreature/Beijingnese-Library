import React, { useState, useRef } from 'react';
import './AudioRecorder.css';

/**
 * AudioRecorder Component
 * Records audio using the browser's MediaRecorder API
 */
const AudioRecorder = ({ onRecordingComplete, onRecordingClear }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const audioElementRef = useRef(null);

  const startRecording = async () => {
    try {
      // Request microphone permission
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Create MediaRecorder instance
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });

      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      // Collect audio data chunks
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      // Handle recording stop
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);

        setRecordedAudio({ blob: audioBlob, url: audioUrl });
        onRecordingComplete(audioBlob);

        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };

      // Start recording
      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Failed to access microphone. Please grant microphone permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      // Stop timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const clearRecording = () => {
    if (recordedAudio) {
      URL.revokeObjectURL(recordedAudio.url);
    }
    setRecordedAudio(null);
    setRecordingTime(0);
    setIsPlaying(false);
    onRecordingClear();
  };

  const togglePlayback = () => {
    if (audioElementRef.current) {
      if (isPlaying) {
        audioElementRef.current.pause();
        setIsPlaying(false);
      } else {
        audioElementRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="audio-recorder">
      <h3>录音</h3>

      {/* Recording Status */}
      {isRecording && (
        <div className="recording-status">
          录音中... {formatTime(recordingTime)}
        </div>
      )}

      {/* Controls */}
      <div className="audio-controls">
        {!isRecording && !recordedAudio && (
          <button
            type="button"
            onClick={startRecording}
            className="audio-button start-recording-button"
          >
            开始录音
          </button>
        )}

        {isRecording && (
          <button
            type="button"
            onClick={stopRecording}
            className="audio-button stop-recording-button"
          >
            停止录音
          </button>
        )}

        {recordedAudio && (
          <>
            <button
              type="button"
              onClick={togglePlayback}
              className="audio-button play-button"
            >
              {isPlaying ? '暂停' : '播放录音'}
            </button>

            <button
              type="button"
              onClick={clearRecording}
              className="audio-button delete-button"
            >
              删除并重录
            </button>
          </>
        )}
      </div>

      {/* Audio Player (hidden) */}
      {recordedAudio && (
        <audio
          ref={audioElementRef}
          src={recordedAudio.url}
          onEnded={() => setIsPlaying(false)}
          className="audio-player-hidden"
        />
      )}

      {/* Recording Info */}
      {recordedAudio && (
        <div className="recording-info">
          录音已保存 ({formatTime(recordingTime)})
        </div>
      )}

      {/* Help Text */}
      {!isRecording && !recordedAudio && (
        <p className="help-text">
          点击"开始录音"来录制发音
        </p>
      )}
    </div>
  );
};

export default AudioRecorder;

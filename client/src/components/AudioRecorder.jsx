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
  const fileInputRef = useRef(null);

  const startRecording = async () => {
    try {
      // Request microphone permission
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Determine the best supported MIME type for recording
      // Prioritize WebM because it works best across Chrome/Firefox for both recording AND playback
      let mimeType = 'audio/webm;codecs=opus'; // Default for Chrome/Firefox
      let blobType = 'audio/webm';

      // Check browser support in order of preference: WebM > OGG > MP4
      if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
        mimeType = 'audio/webm;codecs=opus';
        blobType = 'audio/webm';
      } else if (MediaRecorder.isTypeSupported('audio/webm')) {
        mimeType = 'audio/webm';
        blobType = 'audio/webm';
      } else if (MediaRecorder.isTypeSupported('audio/ogg;codecs=opus')) {
        mimeType = 'audio/ogg;codecs=opus';
        blobType = 'audio/ogg';
      } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
        // MP4 is last resort because browser support for playback is inconsistent
        mimeType = 'audio/mp4';
        blobType = 'audio/mp4';
      } else {
        // Use default without specifying MIME type
        mimeType = undefined;
        blobType = 'audio/webm'; // Fallback
      }

      console.log('Using MIME type for recording:', mimeType);

      // Create MediaRecorder instance
      const mediaRecorder = mimeType
        ? new MediaRecorder(stream, { mimeType })
        : new MediaRecorder(stream);

      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      // Store the blob type for later use
      mediaRecorder._blobType = blobType;

      // Collect audio data chunks
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      // Handle recording stop
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: mediaRecorder._blobType });
        const audioUrl = URL.createObjectURL(audioBlob);

        console.log('Recording stopped, blob type:', mediaRecorder._blobType);
        console.log('Blob size:', audioBlob.size);

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

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type (accept WAV and other audio formats)
    const validTypes = ['audio/wav', 'audio/wave', 'audio/x-wav', 'audio/webm', 'audio/ogg', 'audio/mp4'];
    if (!validTypes.includes(file.type)) {
      alert('请上传音频文件 (.wav, .webm, .ogg, .mp4)');
      return;
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      alert('文件过大，请上传小于10MB的文件');
      return;
    }

    // Create blob and URL from uploaded file
    const audioBlob = file;
    const audioUrl = URL.createObjectURL(audioBlob);

    // Get audio duration using Audio element
    const tempAudio = new Audio();
    tempAudio.src = audioUrl;
    tempAudio.addEventListener('loadedmetadata', () => {
      const duration = Math.floor(tempAudio.duration);
      setRecordingTime(duration);
    });

    setRecordedAudio({ blob: audioBlob, url: audioUrl });
    onRecordingComplete(audioBlob);

    console.log('File uploaded:', file.name, 'Type:', file.type, 'Size:', file.size);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
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
          <>
            <button
              type="button"
              onClick={startRecording}
              className="audio-button start-recording-button"
            >
              开始录音
            </button>

            <button
              type="button"
              onClick={handleUploadClick}
              className="audio-button upload-button"
            >
              上传音频
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="audio/wav,audio/wave,audio/x-wav,audio/webm,audio/ogg,audio/mp4,.wav,.webm,.ogg,.mp4"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
          </>
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
          点击"开始录音"来录制发音，或点击"上传音频"选择文件 (支持 .wav, .webm, .ogg, .mp4)
        </p>
      )}
    </div>
  );
};

export default AudioRecorder;

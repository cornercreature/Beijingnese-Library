import api from './api';

const wordService = {
  // Get all words with optional filtering
  getAllWords: async (params = {}) => {
    const { category, limit = 50, offset = 0 } = params;
    const queryParams = new URLSearchParams();

    if (category) queryParams.append('category', category);
    queryParams.append('limit', limit);
    queryParams.append('offset', offset);

    const response = await api.get(`/words?${queryParams.toString()}`);
    return response.data;
  },

  // Get a single word by ID
  getWordById: async (id) => {
    const response = await api.get(`/words/${id}`);
    return response.data;
  },

  // Get word statistics
  getWordStats: async () => {
    const response = await api.get('/words/stats');
    return response.data;
  },

  // Create a new word (with optional audio file)
  createWord: async (wordData, audioFile = null) => {
    const formData = new FormData();

    // Add all word fields
    Object.keys(wordData).forEach(key => {
      if (key === 'examples' && Array.isArray(wordData[key])) {
        formData.append(key, JSON.stringify(wordData[key]));
      } else {
        formData.append(key, wordData[key]);
      }
    });

    // Add audio file if provided
    if (audioFile) {
      formData.append('audio', audioFile);
    }

    const response = await api.post('/words', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },

  // Delete a word
  deleteWord: async (id) => {
    const response = await api.delete(`/words/${id}`);
    return response.data;
  }
};

export default wordService;

import api from './api';

const photoService = {
  // Get all photos
  getAllPhotos: async (params = {}) => {
    const { limit = 50, offset = 0 } = params;
    const queryParams = new URLSearchParams();

    queryParams.append('limit', limit);
    queryParams.append('offset', offset);

    const response = await api.get(`/photos?${queryParams.toString()}`);
    return response.data;
  },

  // Get a single photo by ID
  getPhotoById: async (id) => {
    const response = await api.get(`/photos/${id}`);
    return response.data;
  },

  // Create a new photo
  createPhoto: async (photoData, imageFile) => {
    const formData = new FormData();

    formData.append('caption_chinese', photoData.caption_chinese);
    formData.append('caption_english', photoData.caption_english);
    formData.append('image', imageFile);

    const response = await api.post('/photos', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },

  // Delete a photo
  deletePhoto: async (id) => {
    const response = await api.delete(`/photos/${id}`);
    return response.data;
  }
};

export default photoService;

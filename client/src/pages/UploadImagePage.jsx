import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadImagePage.css';

/**
 * UploadImagePage Component
 * Simple page for uploading images with Chinese and English captions
 */
const UploadImagePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    chineseCaption: '',
    englishCaption: '',
    imageFile: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        imageFile: file,
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('chinese_caption', formData.chineseCaption);
      formDataToSend.append('english_caption', formData.englishCaption);
      if (formData.imageFile) {
        formDataToSend.append('image', formData.imageFile);
      }

      // TODO: Implement API call when backend is ready
      // const response = await fetch('http://localhost:3001/api/images', {
      //   method: 'POST',
      //   body: formDataToSend,
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to upload image');
      // }

      console.log('Image upload form data:', {
        chineseCaption: formData.chineseCaption,
        englishCaption: formData.englishCaption,
        imageFile: formData.imageFile?.name,
      });

      // Placeholder success
      alert('Image upload feature coming soon!');
      navigate('/');

    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="upload-image-page">
      <div className="upload-image-container">
        <h1>Upload Image</h1>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="upload-image-form">
          {/* Image Upload */}
          <div className="form-group">
            <label htmlFor="imageFile">Image *</label>
            <input
              type="file"
              id="imageFile"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
              </div>
            )}
          </div>

          {/* Chinese Caption */}
          <div className="form-group">
            <label htmlFor="chineseCaption">Chinese Caption *</label>
            <input
              type="text"
              id="chineseCaption"
              name="chineseCaption"
              value={formData.chineseCaption}
              onChange={handleInputChange}
              placeholder="中文说明"
              required
            />
          </div>

          {/* English Caption */}
          <div className="form-group">
            <label htmlFor="englishCaption">English Caption *</label>
            <input
              type="text"
              id="englishCaption"
              name="englishCaption"
              value={formData.englishCaption}
              onChange={handleInputChange}
              placeholder="English description"
              required
            />
          </div>

          {/* Buttons */}
          <div className="form-buttons">
            <button
              type="button"
              onClick={handleCancel}
              className="cancel-button"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Uploading...' : 'Upload Image'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadImagePage;

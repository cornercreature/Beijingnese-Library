const Joi = require('joi');

/**
 * Validation schema for creating a word
 */
const createWordSchema = Joi.object({
  chinese_characters: Joi.string()
    .required()
    .min(1)
    .max(50)
    .trim()
    .messages({
      'string.empty': 'Chinese characters are required',
      'string.max': 'Chinese characters must not exceed 50 characters'
    }),

  pinyin: Joi.string()
    .required()
    .min(1)
    .max(200)
    .trim()
    .messages({
      'string.empty': 'Pinyin is required'
    }),

  english_definition: Joi.string()
    .required()
    .min(1)
    .max(500)
    .trim()
    .messages({
      'string.empty': 'English definition is required',
      'string.max': 'English definition must not exceed 500 characters'
    }),

  putonghua_definition: Joi.string()
    .required()
    .min(1)
    .max(500)
    .trim()
    .messages({
      'string.empty': 'Putonghua definition is required',
      'string.max': 'Putonghua definition must not exceed 500 characters'
    }),

  grammar_category: Joi.string()
    .required()
    .valid('Noun', 'Verb', 'Adjective', 'Sayings')
    .messages({
      'any.only': 'Grammar category must be one of: Noun, Verb, Adjective, Sayings',
      'string.empty': 'Grammar category is required'
    }),

  examples: Joi.array()
    .items(
      Joi.object({
        chinese_sentence: Joi.string()
          .required()
          .min(1)
          .max(500)
          .trim()
          .messages({
            'string.empty': 'Chinese sentence is required',
            'string.max': 'Chinese sentence must not exceed 500 characters'
          }),

        english_translation: Joi.string()
          .required()
          .min(1)
          .max(500)
          .trim()
          .messages({
            'string.empty': 'English translation is required',
            'string.max': 'English translation must not exceed 500 characters'
          })
      })
    )
    .max(10)
    .messages({
      'array.max': 'Maximum 10 example sentences allowed'
    })
    .optional()
});

/**
 * Validation schema for creating a photo
 */
const createPhotoSchema = Joi.object({
  caption_chinese: Joi.string()
    .required()
    .min(1)
    .max(500)
    .trim()
    .messages({
      'string.empty': 'Chinese caption is required',
      'string.max': 'Chinese caption must not exceed 500 characters'
    }),

  caption_english: Joi.string()
    .required()
    .min(1)
    .max(500)
    .trim()
    .messages({
      'string.empty': 'English caption is required',
      'string.max': 'English caption must not exceed 500 characters'
    })
});

/**
 * Middleware factory to validate request body against a schema
 */
const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false, // Return all errors, not just the first one
      stripUnknown: true // Remove unknown properties
    });

    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message
      }));

      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors
      });
    }

    // Replace req.body with validated and sanitized data
    req.body = value;
    next();
  };
};

module.exports = {
  validateCreateWord: validateRequest(createWordSchema),
  validateCreatePhoto: validateRequest(createPhotoSchema),
  validateRequest
};

const rateLimit = require('express-rate-limit');

/**
 * General API rate limiter
 * 100 requests per 15 minutes per IP
 */
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    error: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

/**
 * Upload endpoints rate limiter
 * 10 uploads per hour per IP
 * Stricter limits to prevent abuse
 */
const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 uploads per hour
  message: {
    success: false,
    error: 'Too many uploads from this IP, please try again in an hour.'
  },
  standardHeaders: true,
  legacyHeaders: false,
  // Skip successful requests with no file
  skip: (req) => !req.file,
});

/**
 * Strict rate limiter for testing purposes
 * Can be used for endpoints that should be very limited
 */
const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per 15 minutes
  message: {
    success: false,
    error: 'Rate limit exceeded. Please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  apiLimiter,
  uploadLimiter,
  strictLimiter
};

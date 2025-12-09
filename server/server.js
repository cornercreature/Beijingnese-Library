// Beijingnese Library - Main Server
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const xssClean = require('xss-clean');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');

// Import routes
const wordsRouter = require('./src/routes/words');
const photosRouter = require('./src/routes/photos');

// Import middleware
const { apiLimiter } = require('./src/middleware/rateLimiter');

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable CSP for Swagger UI to work
    hsts: false, // Disable HSTS for local development (prevents forced HTTPS)
    crossOriginResourcePolicy: { policy: "cross-origin" } // Allow audio/video resources to be loaded
  })
);
app.use(xssClean()); // Sanitize user input

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
};
app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files (uploaded images and audio)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve Swagger UI static files from node_modules
app.use('/swagger-static', express.static(path.join(__dirname, 'node_modules/swagger-ui-dist')));

// Swagger API JSON endpoint
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Swagger UI HTML page
app.get('/api-docs', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Beijingnese Library API Documentation</title>
  <link rel="stylesheet" href="/swagger-static/swagger-ui.css" />
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="/swagger-static/swagger-ui-bundle.js"></script>
  <script src="/swagger-static/swagger-ui-standalone-preset.js"></script>
  <script>
    window.onload = function() {
      window.ui = SwaggerUIBundle({
        url: '/api-docs.json',
        dom_id: '#swagger-ui',
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        layout: "StandaloneLayout"
      });
    };
  </script>
</body>
</html>
  `);
});

// Apply rate limiting to all API routes
app.use('/api', apiLimiter);

// API Routes
app.use('/api/words', wordsRouter);
app.use('/api/photos', photosRouter);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: '🎉 Beijingnese Library API',
    status: 'running',
    version: '1.0.0',
    endpoints: {
      words: '/api/words',
      photos: '/api/photos',
      health: '/api/health'
    },
    timestamp: new Date().toISOString()
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    path: req.path
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);

  // Multer errors
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({
      success: false,
      error: 'File too large',
      details: err.message
    });
  }

  if (err.code === 'LIMIT_UNEXPECTED_FILE') {
    return res.status(400).json({
      success: false,
      error: 'Unexpected file field',
      details: err.message
    });
  }

  // Default error response
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal server error'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`🎉 Beijingnese Library API Server`);
  console.log(`${'='.repeat(50)}`);
  console.log(`🌐 Server running on: http://localhost:${PORT}`);
  console.log(`📚 Words API: http://localhost:${PORT}/api/words`);
  console.log(`📷 Photos API: http://localhost:${PORT}/api/photos`);
  console.log(`💚 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📖 API Documentation: http://localhost:${PORT}/api-docs`);
  console.log(`${'='.repeat(50)}\n`);
});

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Beijingnese Library API',
      version: '1.0.0',
      description: 'API for managing Beijingnese (Beijing dialect) vocabulary with audio recordings, pinyin syllables, and example sentences.',
      contact: {
        name: 'API Support',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Development server',
      },
    ],
    tags: [
      {
        name: 'Words',
        description: 'Word management endpoints',
      },
      {
        name: 'Photos',
        description: 'Photo management endpoints',
      },
      {
        name: 'Health',
        description: 'Health check endpoints',
      },
    ],
  },
  apis: ['./src/routes/*.js', './server.js'], // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;

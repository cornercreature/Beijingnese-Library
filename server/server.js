// Beijingnese Library - Test Server
// This is a simple test to make sure Express is working

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001; // Changed from 5000 (macOS uses 5000 for AirPlay)

// Middleware
app.use(cors()); // Allow frontend to talk to backend
app.use(express.json()); // Parse JSON data

// Test route - visit http://localhost:5000 to see this
app.get('/', (req, res) => {
  res.json({
    message: '🎉 Beijingnese Library API is running!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    message: 'Server is up and running'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`✅ Test it by visiting: http://localhost:${PORT}`);
});

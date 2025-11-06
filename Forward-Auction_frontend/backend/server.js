// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Parse JSON body
// Routes

const auctionRoutes = require('./routes/auctionRoutes');
const authRoutes = require('./routes/auth')
app.use('/api/auction', auctionRoutes);
app.use('/api/auth',authRoutes)
// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});

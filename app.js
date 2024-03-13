// app.js
const express = require('express');
const path = require('path');
const { Sequelize } = require('sequelize');
const dbConfig = require('./config/db');
const { User } = require('./entities');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');

const app = express();

// Set up Sequelize and sync models with the database
const sequelize = new Sequelize(dbConfig.development);
sequelize.sync();

// Set up middleware for parsing requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up view engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// Use routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

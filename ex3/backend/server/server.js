const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');
const { errorHandler } = require('../middlewares/errorHandler');
const familyReunificationFormRouter = require('../router/familyReunificationFormRouter');
const staticFileRouter = require('../router/staticFileRouter');

const server = express();
const port = process.env.PORT || 3000;
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../logs.txt'), { flags: 'a' });

// CORS configuration
server.use(cors());
server.options('*', cors());

// Logging middleware
server.use(logger('combined', { stream: accessLogStream }));
server.use(logger('dev'));

// Body parsing middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Routes
server.use('/api/familyReunificationForm', familyReunificationFormRouter);
server.use(staticFileRouter);

// Error handling middleware
server.use(errorHandler);

// Default route handler
server.use((req, res) => {
  res.status(400).send('Something is broken!');
});

server.listen(port, () => console.log(`Express server is running on port ${port}`));

module.exports = server;

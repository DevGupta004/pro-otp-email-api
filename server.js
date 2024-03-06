// server.js
const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

// Body parser middleware
app.use(express.json());

// Routes
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
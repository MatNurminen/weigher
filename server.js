const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Use Routes
app.use('/api/weighers', require('./routes/weighers'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

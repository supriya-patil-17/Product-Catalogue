const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const catalogueRoutes = require('./routes/catalogue');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/catalogue', catalogueRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

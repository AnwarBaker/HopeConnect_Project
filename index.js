const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

// Routes
const orphanRoutes = require('./routes/orphans');
app.use('/api/orphans', orphanRoutes);




app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});



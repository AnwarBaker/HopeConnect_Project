
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());


app.use('/uploads', express.static('uploads'));

const orphanRoutes = require('./routes/orphans');
app.use('/api/orphans', orphanRoutes);


//Routes
const sponsorshipRoutes = require('./routes/sponsorships');
app.use('/api/sponsorships', sponsorshipRoutes);

//Routes
const orphanUpdatesRoutes = require('./routes/orphanUpdates');
app.use('/api/orphan-updates', orphanUpdatesRoutes);

//Routes
const donationRoutes = require('./routes/donations');
app.use('/api/donations', donationRoutes);


//Routes
const donationItemRoutes = require('./routes/donationItems');
app.use('/api/donation-items', donationItemRoutes);


//Routes
const emergencyRoutes = require('./routes/emergencies');
app.use('/api/emergencies', emergencyRoutes);

//Routes
const volunteerRoutes = require('./routes/volunteers');
app.use('/api/volunteers', volunteerRoutes);

//Routes
const notificationRoutes = require('./routes/notifications');
app.use('/api/notifications', notificationRoutes);

//Routes of autho
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

//Routes
const matchRoutes = require('./routes/matching');
app.use('/api/matching', matchRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

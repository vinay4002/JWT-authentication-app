const mongoose = require('mongoose');
require('dotenv').config();
console.log('Loaded Mongo URI:', process.env.MONGODB_URI);

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
    return mongoose.connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Export the function to be called when needed
module.exports = connectDB;
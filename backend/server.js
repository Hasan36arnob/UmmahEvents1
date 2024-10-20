const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Use express built-in JSON parser

// Connect to MongoDB using 127.0.0.1 instead of localhost
mongoose.connect('mongodb+srv://arnobhasanice:hF4yIEDiPTsRSCle@emsg.7msk7.mongodb.net/msg?retryWrites=true&w=majority&appName=emsg', 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB Atlas');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err.message);
    });
  

// Create a schema for the contact message
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

// Create a model based on the schema
const Message = mongoose.model('Message', messageSchema);

// API route to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ message: 'Error sending message' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//hF4yIEDiPTsRSCle
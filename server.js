const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const Todo = require('./models/Todo');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB Connected');

  const sampleTodo = new Todo({ title: 'This is my first Todo!' });

  sampleTodo.save()
    .then(() => console.log('Sample Todo saved! Check MongoDB Compass.'))
    .catch(err => console.error('Error saving todo:', err));
})
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
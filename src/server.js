const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const app = express();
const port = 3000;




mongoose.connect('mongodb://localhost:27017/mydb');


app.use(express.json());
app.use('/books', bookRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
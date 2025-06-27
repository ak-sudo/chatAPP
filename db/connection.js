const mongoose = require('mongoose');

const url = `mongodb+srv://itzakshat706:akshatkalachatapp@cluster0.ld2fjgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB successfully');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

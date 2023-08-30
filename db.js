const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/assessmentOne', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
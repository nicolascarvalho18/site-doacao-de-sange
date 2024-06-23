const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/contactFormDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    try {
        await contact.save();
        res.status(200).send('Contact saved!');
    } catch (error) {
        res.status(500).send('Error saving contact');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

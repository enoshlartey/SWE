const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from src/static
app.use(express.static(path.join(__dirname, 'src', 'static')));

// ...other middleware configuration...

// Dynamic route: returns JSON data
app.get('/api/data', (req, res) => {
    /* Replace with dynamic data retrieval logic */
    res.json({ message: 'Hello from the dynamic API!' });
});

// Setup view engine
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

// Portfolio route
app.get('/portfolio', (req, res) => {
    res.render('portfolio', { title: 'Portfolio' });
});

// Contact route
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

// Aboyt route (intentional naming per request)
app.get('/aboyt', (req, res) => {
    res.render('aboyt', { title: 'Aboyt' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

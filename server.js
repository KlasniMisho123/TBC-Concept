import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.redirect('/ge');
});

app.get('/ge', async (req, res) => {
    try {
        res.render('conceptGe.ejs', {});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/en', async (req, res) => {
    try {
        res.render('conceptEn', {});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

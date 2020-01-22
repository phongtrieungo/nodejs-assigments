import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('The node using typescript is working');
});

app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`App is running in port ${port}`);
})
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('<h1>Hello World</h1><br><h2>I am here to servce you</h2><br><h3>Your request will be updated here</h3>'));

app.listen(port, () => console.log(`The example is running on port ${port}`));
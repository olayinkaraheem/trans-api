const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/transaction.route')
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use('/v1', router);

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
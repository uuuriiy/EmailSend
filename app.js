const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()

const {PORT, FRONTEND_URL} = require('./config');
const router = require('./routes');

const app = express();

const corsOptions ={
    origin: FRONTEND_URL,
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'))

app.use(cors(corsOptions));

app.use(router);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listen ${PORT}...`);
    }
});


const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user-router');
const app = express();
const PORT = process.env.PORT || 5000;
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set router
app.use('/api/user', userRouter);

// buat server
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
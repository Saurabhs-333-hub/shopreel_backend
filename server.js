const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const routes = require('./apis/routes');
require('dotenv').config(
    {
        path: './.env'
    }
)
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/', routes);

app.use((req, res, next) => {
    if (req.url==='/') {
        res.redirect('/api');
        next();
    }
})




app.listen(port, () => {
  console.log(`listening on http://localhost:${port}!`);
});
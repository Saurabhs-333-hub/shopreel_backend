const router = require('express').Router();
const {getUser}=require('./users/getUser.js')
const {getCategories}=require('./categories/categories.js')
router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/profile/:id', (req, res) => {
  getUser(req, res).then((user) => {
    res.json(user)
    console.log(user)
  })
});

router.get('/categories', (req, res) => {
    getCategories(req, res).then((categories) => {
        res.json(categories)
    })
});


module.exports = router;
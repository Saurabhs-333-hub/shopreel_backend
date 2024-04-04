const router = require('express').Router();
const {getUser}=require('./users/getUser.js')
const {getCategories, getCategoryByID}=require('./categories/categories.js')
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

router.get('/categories/:id', (req, res) => {
    getCategoryByID(req, res).then((category) => {
        res.json(category)
    })
});


module.exports = router;
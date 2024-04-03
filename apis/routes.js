const router = require('express').Router();
const {getUser}=require('./users/getUser.js')
router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/profile/:id', (req, res) => {
  getUser(req, res).then((user) => {
    res.json(user)
  })
});

module.exports = router;
const router = require('express').Router();
const { getUser } = require('./users/getUser.js')
const { getCategories, getCategoryByID } = require('./categories/categories.js')
const { getAllReels, getReelByID, getReelByUserID, getReelsByFilters } = require("./reels/reels");
const { uploadSongToStorage, } = require("./songs/songs.js")
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

router.get('/reels', (req, res) => {
    getAllReels(req, res).then((reels) => {
        res.json(reels)
    })
})

router.get('/reels/:id', (req, res) => {
    getReelByID(req, res).then((reel) => {
        res.json(reel)
    })
}
)

router.get('/userReels/:id', (req, res) => {
    getReelByUserID(req, res).then((reel) => {
        res.json(reel)
    })
}
)

router.get('/reelsFilters', (req, res) => {
    getReelsByFilters(req, res).then((reel) => {
        res.json(reel)
    })
}
)

router.post('/uploadSongToStorage', (req, res) => {
    uploadSongToStorage(req.body, res).then((song) => {
        res.json(song)
    })
})

module.exports = router;
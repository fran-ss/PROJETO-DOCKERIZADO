const express = require('express')
const router = express.Router()
router.get('/data', (req, res) => {

    res.json({message:"Sim, e com você? "})
})
module.exports = router;
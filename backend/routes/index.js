const express = require('express');
const router = express.Router();
const Planet = require('../models/Planet')

/* GET home page */
router.get('/', (req, res, next) => {
  Planet.find({ pl_radj: { $ne: null } }, { pl_hostname: 1, pl_name: 1, pl_radj: 1, _id:0 })
  .sort({pl_radj: -1})
  .limit(50)
  .then((planets) => {
    res.json(planets)
  })
})

module.exports = router;

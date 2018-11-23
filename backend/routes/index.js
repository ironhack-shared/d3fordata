const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/* GET home page */
router.get('/', (req, res, next) => {
  const url = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json"
  fetch(url)
  .then(res => res.json())
  .then(json => res.json(json));

})

module.exports = router;

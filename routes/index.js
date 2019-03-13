const express = require('express');
const geosupport = require('node-geosupport');

const router = express.Router();

router.get('/1B', (req, res) => {
  const { houseNumber, streetName, boroughCode } = req.query;

  try {
    geosupport['1B']({
      'House Number - Display Format': houseNumber,
      'Street Name-1': streetName,
      'ZIP Code Input': '',
      'Borough Code-1': boroughCode,
    })
      .then((response) => {
        res.json(response);
      });
  } catch (e) {
    res.json({
      error: 'something went wrong'
    })
  }

});

router.get('/BL', (req, res) => {
  const { bbl } = req.query;
  try {
    geosupport.BL({
      'BOROUGH BLOCK LOT (BBL)': bbl,
    })
      .then((response) => {
        res.json(response);
      });
  } catch (e) {
    res.json({
      error: 'something went wrong'
    })
  }

});


module.exports = router;

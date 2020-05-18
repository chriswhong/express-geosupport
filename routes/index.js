const express = require('express');
const geosupport = require('node-geosupport');

const router = express.Router();

router.get('/:function_name', (req, res) => {
  geosupport[req.params.function_name](req.query)
    .then((response) => {
      res.json(response);
    })
    .catch(e => {
      res.json({
        error: 'something went wrong',
        description: e,
      });
    });
});

module.exports = router;

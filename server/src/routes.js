module.exports = () => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
  router.get('/hello', async (req, res) => {
    res.json({ msg: "Hello, world!" });
  });

  router.get('/hello/:name', async (req, res) => {
    res.json({ msg: `Hello, ${req.params.name}` });
  });

  router.get('/food/:foodleast/:foodfav', async (req, res) => {
    res.json({ msg: `My favorite food is, ${req.params.foodfav}` });
  });

  return router;
}

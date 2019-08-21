const express = require('express');

module.exports = initStatic = (app) => {
  app.use(express.static('public'));
};

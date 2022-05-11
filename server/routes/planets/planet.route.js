const express = require('express');
const { getPlanet, getTimer } = require('./planet.controler');
const planetRouter = express.Router();

planetRouter.get('/a', getPlanet);
planetRouter.get('/timer',getTimer)

module.exports = planetRouter;

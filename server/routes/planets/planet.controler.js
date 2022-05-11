const { planets } = require('../../model/planet.js');
const getPlanet = (req, res) => {
    res.status(200).send(planets)
};



const getTimer = (req, res) => {
    delay(9000);
    res.status(200).send('dingding' + process.pid)
}

function delay(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {
    }
}

module.exports = {
    getPlanet,
    getTimer,
}
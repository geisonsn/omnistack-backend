const Box = require('../models/Box');

class BoxController {
  async store(req, res) {
    const box = await Box.create({title: 'Rockeatseat'});
    return res.json(box);
  }
}

module.exports = new BoxController();

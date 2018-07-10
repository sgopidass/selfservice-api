/* created by sgopidass */
var mongoose=require('mongoose')
var Publisher=require('./../../models/publishers')

function getPublishers(req, res) {
  try {
    const { name } = req.query;
    Publisher.find({publisher_name:name},(err, publisers) => {
      if (err) {
        console.log(err)
        throw err;
      }
      res.send(publisers);
    });
  } catch (err) {
    console.log(err)
    res.status(500);
    res.send('Error something blew up');
  }
}

module.exports = { getPublishers };

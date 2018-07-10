/* created by sgopidass */

const sqlservice = require('./../services/sqlservice');

async function getAuthors(req, res) {
  try {
    const { authorId } = req.query;
    const result = await sqlservice.getRecordset(authorId);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send('Error something blew up');
  }
}

module.exports = { getAuthors };

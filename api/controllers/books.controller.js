/* created by sgopidass */
function getBooks(req, res) {
  const books = [{
    Id: '1',
    bookName: 'Angels',
    author: 'Brown',
  },
  {
    Id: '2',
    bookName: 'Flow',
    author: 'Victor',
  }];

  try {
    const { bookId } = req.query;
    const response = books.find(e => e.Id === bookId);
    res.send(response);
  } catch (err) {
    res.status(500);
    res.send('Error something blew up');
  }
}

module.exports = { getBooks };

const errorMid = (err, _req, res) => {
  console.log(err.message);
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorMid;
const express = require('express');
const app = express();

// static is static
app.use('/static', express.static('public'));

// views 
app.set('view engine', 'ejs');

// root
app.get('/', (req, res) => (
  res.render('pages/index')
));

// server
app.listen(3000, () => console.log('Example app listening on port 3000!'));

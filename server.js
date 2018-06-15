const express = require('express');
const app = express();

// VIEWS are not static
// STATIC is static

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

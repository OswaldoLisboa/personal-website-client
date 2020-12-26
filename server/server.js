const express = require('express');
const favicon = require('express-favicon')
const path = require('path');

const port = process.env.PORT || 3000;
console.log(__dirname);

const app = express();
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(favicon(path.join(__dirname, '..', 'build/favicon.ico')))

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '..', 'build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

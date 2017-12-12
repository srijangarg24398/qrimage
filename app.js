const express = require('express')
const app = express()
app.set('view engine', 'ejs');
var qr = require('qr-image');
 
var qr_svg = qr.image('Srijan Garg', { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('srijangarg.svg'));
 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
app.get('/', (req, res) => res.render('index', { title: 'Hey'}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
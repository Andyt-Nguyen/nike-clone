const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const massive = require('massive');
const cors = require('cors');


const conn = massive.connectSync({connectionString:"postgres://postgres:@localhost:4321/products"});

const app = module.exports = express();

app.use(express.static(__dirname + '/public'));
app.set("db", conn);
const db = app.get('db');
app.use(bodyParser.json());
app.use(cors());





app.listen(3000, function(){
	console.log('The service is now running...');
});

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const massive = require('massive');
const cors = require('cors');


const conn = massive.connectSync({connectionString:"postgres://postgres:@localhost:4321/products"});

const app = module.exports = express();

app.use(express.static(path.join(__dirname + '/public')));
app.set("db", conn);
const db = app.get('db');
app.use(bodyParser.json());
app.use(cors());



// Endpoints
app.get('/allshoes', function(req, res){
	db.getAllProds(function(err, shoes){
		res.send(shoes)
	})
});

////////////
//NikeMen//
//////////
app.get('/nikemshoes', function(req, res){
	db.mensproducts(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikemlsshoes', function(req,res){
	db.menslifestyle(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikemrnshoes', function(req, res){
	db.mensrunning(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikembshoes', function(req, res){
	db.mensbasketball(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikemsshoes', function(req, res){
	db.menssoccer(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/niketgshoes', function(req, res){
	db.menstraining(function(err, shoes){
		res.send(shoes);
	});
});


//////////////
//NikeWomen//
////////////

app.get('/nikewshoes', function(req, res){
	db.womensproducts(function(err, shoes){
		res.send(shoes);
	});
});











/////////////
//NikeGirl//
////////////

app.get('/nikegshoes', function(req, res){
	db.girlproducts(function(err, shoes){
		res.send(shoes)
	});
});

app.get('/nikeglsshoes', function(req, res){
	db.girllifestyle(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikegrnshoes', function(req, res){
	db.girlrunning(function(err, shoes){
		res.send(shoes);
	})
});

app.get('/nikegbshoes', function(req, res){
	db.girlbasketball(function(err, shoes){
		res.send(shoes);
	})
});

app.get('/nikegsshoes', function(req, res){
	db.girlsoccer(function(err, shoes){
		res.send(shoes);
	})
});

app.get('/nikegjshoes', function(req, res){
	db.girljordan(function(err, shoes){
		res.send(shoes);
	});
});


app.listen(3000, function(){
	console.log('The service is now running...');
});

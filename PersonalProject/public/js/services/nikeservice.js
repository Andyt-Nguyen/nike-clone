NikeApp.service('NikeService',['$http', function($http){

//////////////////
//Connection To DB//
//////////////////

//All Shoes
	this.getAllShoes = function(){
		return fpromise('GET','/getAllProds');
	};



////////////
//Nike Men//
////////////
this.AllMNikePics =[
	{img:'./css/products/productsimage/nikemproducts/lifestyle/nike1black.png'},
	{img:'./css/products/productsimage/nikemproducts/lifestyle/nike2black.png'},
	{img:'./css/products/productsimage/nikemproducts/lifestyle/nike3black.png'},
	{img:'./css/products/productsimage/nikemproducts/lifestyle/nike4white.png'},
	{img:'./css/products/productsimage/nikemproducts/lifestyle/nike5grey.png'},
	{img:'./css/products/productsimage/nikemproducts/lifestyle/nike6grey.png'},
	{img:'./css/products/productsimage/nikemproducts/lifestyle/nike7white.png'},
	{img:'./css/products/productsimage/nikemproducts/lifestyle/nike8white.png'},
	{img:'./css/products/productsimage/nikemproducts/lifestyle/nike9black.png'},
	{img:'./css/products/productsimage/nikemproducts/lifestyle/nike10yellow.png'},
	{img:'./css/products/productsimage/nikemproducts/lifestyle/nike11yellow.png'},
	{img:'./css/products/productsimage/nikemproducts/lifestyle/nike12white.png'},

	{img:'./css/products/productsimage/nikemproducts/running/nike1purple.png'},
	{img:'./css/products/productsimage/nikemproducts/running/nike2blue.png'},
	{img:'./css/products/productsimage/nikemproducts/running/nike3grey.png'},
	{img:'./css/products/productsimage/nikemproducts/running/nike4blue.png'},
	{img:'./css/products/productsimage/nikemproducts/running/nike5grey.png'},
	{img:'./css/products/productsimage/nikemproducts/running/nike6grey.png'},
	{img:'./css/products/productsimage/nikemproducts/running/nike7grey.png'},
	{img:'./css/products/productsimage/nikemproducts/running/nike8blue.png'},
	{img:'./css/products/productsimage/nikemproducts/running/nike9blue.png'},
	{img:'./css/products/productsimage/nikemproducts/running/nike10white.png'},
	{img:'./css/products/productsimage/nikemproducts/running/nike11white.png'},
	{img:'./css/products/productsimage/nikemproducts/running/nike12grey.png'},

	{img:'./css/products/productsimage/nikemproducts/basketball/nike1grey.png'},
	{img:'./css/products/productsimage/nikemproducts/basketball/nike2blue.png'},
	{img:'./css/products/productsimage/nikemproducts/basketball/nike3white.png'},
	{img:'./css/products/productsimage/nikemproducts/basketball/nike4grey.png'},
	{img:'./css/products/productsimage/nikemproducts/basketball/nike5black.png'},
	{img:'./css/products/productsimage/nikemproducts/basketball/nike6white.png'},
	{img:'./css/products/productsimage/nikemproducts/basketball/nike7grey.png'},
	{img:'./css/products/productsimage/nikemproducts/basketball/nike8red.png'},
	{img:'./css/products/productsimage/nikemproducts/basketball/nike9black.png'},
	{img:'./css/products/productsimage/nikemproducts/basketball/nike10white.png'},
	{img:'./css/products/productsimage/nikemproducts/basketball/nike11white.png'},
	{img:'./css/products/productsimage/nikemproducts/basketball/nike12white.png'},

	{img:'./css/products/productsimage/nikemproducts/soccer/nike1grey.png'},
	{img:'./css/products/productsimage/nikemproducts/soccer/nike2grey.png'},
	{img:'./css/products/productsimage/nikemproducts/soccer/nike3grey.png'},
	{img:'./css/products/productsimage/nikemproducts/soccer/nike4grey.png'},
	{img:'./css/products/productsimage/nikemproducts/soccer/nike5red.png'},
	{img:'./css/products/productsimage/nikemproducts/soccer/nike6blue.png'},
	{img:'./css/products/productsimage/nikemproducts/soccer/nike7white.png'},
	{img:'./css/products/productsimage/nikemproducts/soccer/nike8white.png'},
	{img:'./css/products/productsimage/nikemproducts/soccer/nike9red.png'},
	{img:'./css/products/productsimage/nikemproducts/soccer/nike10blue.png'},
	{img:'./css/products/productsimage/nikemproducts/soccer/nike11white.png'},
	{img:'./css/products/productsimage/nikemproducts/soccer/nike12white.png'},

	{img:'./css/products/productsimage/nikemproducts/training/nike1red.png'},
	{img:'./css/products/productsimage/nikemproducts/training/nike2red.png'},
	{img:'./css/products/productsimage/nikemproducts/training/nike3black.png'},
	{img:'./css/products/productsimage/nikemproducts/training/nike4black.png'},
	{img:'./css/products/productsimage/nikemproducts/training/nike5white.png'},
	{img:'./css/products/productsimage/nikemproducts/training/nike6white.png'},
	{img:'./css/products/productsimage/nikemproducts/training/nike7black.png'},
	{img:'./css/products/productsimage/nikemproducts/training/nike8black.png'},
	{img:'./css/products/productsimage/nikemproducts/training/nike9red.png'},
	{img:'./css/products/productsimage/nikemproducts/training/nike10black.png'},
	{img:'./css/products/productsimage/nikemproducts/training/nike11red.png'},
	{img:'./css/products/productsimage/nikemproducts/training/nike12white.png'}
];

	this.getNikeMAShoes = function(){
		return fpromise('GET', '/nikemshoes');
	};


//MLifeStyle
	this.MLSPics = [
		{img:'./css/products/productsimage/nikemproducts/lifestyle/nike1black.png'},
		{img:'./css/products/productsimage/nikemproducts/lifestyle/nike2black.png'},
		{img:'./css/products/productsimage/nikemproducts/lifestyle/nike3black.png'},
		{img:'./css/products/productsimage/nikemproducts/lifestyle/nike4white.png'},
		{img:'./css/products/productsimage/nikemproducts/lifestyle/nike5grey.png'},
		{img:'./css/products/productsimage/nikemproducts/lifestyle/nike6grey.png'},
		{img:'./css/products/productsimage/nikemproducts/lifestyle/nike7white.png'},
		{img:'./css/products/productsimage/nikemproducts/lifestyle/nike8white.png'},
		{img:'./css/products/productsimage/nikemproducts/lifestyle/nike9black.png'},
		{img:'./css/products/productsimage/nikemproducts/lifestyle/nike10yellow.png'},
		{img:'./css/products/productsimage/nikemproducts/lifestyle/nike11yellow.png'},
		{img:'./css/products/productsimage/nikemproducts/lifestyle/nike12white.png'}
	];

	this.getNikeMLSShoes = function(){
		return fpromise('GET','/nikemlsshoes');
	}



//MRunning
	this.NikeMenRnPics = [
		{img:'./css/products/productsimage/nikemproducts/running/nike1purple.png'},
		{img:'./css/products/productsimage/nikemproducts/running/nike2blue.png'},
		{img:'./css/products/productsimage/nikemproducts/running/nike3grey.png'},
		{img:'./css/products/productsimage/nikemproducts/running/nike4blue.png'},
		{img:'./css/products/productsimage/nikemproducts/running/nike5grey.png'},
		{img:'./css/products/productsimage/nikemproducts/running/nike6grey.png'},
		{img:'./css/products/productsimage/nikemproducts/running/nike7grey.png'},
		{img:'./css/products/productsimage/nikemproducts/running/nike8blue.png'},
		{img:'./css/products/productsimage/nikemproducts/running/nike9blue.png'},
		{img:'./css/products/productsimage/nikemproducts/running/nike10white.png'},
		{img:'./css/products/productsimage/nikemproducts/running/nike11white.png'},
		{img:'./css/products/productsimage/nikemproducts/running/nike12grey.png'}
	];

	this.getNikeMRnShoes = function(){
		return fpromise('GET', '/nikemrnshoes');
	}

//MBasketball
	this.NikeMBPics = [
		{img:'./css/products/productsimage/nikemproducts/basketball/nike1grey.png'},
		{img:'./css/products/productsimage/nikemproducts/basketball/nike2blue.png'},
		{img:'./css/products/productsimage/nikemproducts/basketball/nike3white.png'},
		{img:'./css/products/productsimage/nikemproducts/basketball/nike4grey.png'},
		{img:'./css/products/productsimage/nikemproducts/basketball/nike5black.png'},
		{img:'./css/products/productsimage/nikemproducts/basketball/nike6white.png'},
		{img:'./css/products/productsimage/nikemproducts/basketball/nike7grey.png'},
		{img:'./css/products/productsimage/nikemproducts/basketball/nike8red.png'},
		{img:'./css/products/productsimage/nikemproducts/basketball/nike9black.png'},
		{img:'./css/products/productsimage/nikemproducts/basketball/nike10white.png'},
		{img:'./css/products/productsimage/nikemproducts/basketball/nike11white.png'},
		{img:'./css/products/productsimage/nikemproducts/basketball/nike12white.png'}
	];

	this.getNikeMBShoes = function(){
		return fpromise('GET','/nikembshoes');
	};

//mSoccer
	this.NikeMSPics = [
		{img:'./css/products/productsimage/nikemproducts/soccer/nike1grey.png'},
		{img:'./css/products/productsimage/nikemproducts/soccer/nike2grey.png'},
		{img:'./css/products/productsimage/nikemproducts/soccer/nike3grey.png'},
		{img:'./css/products/productsimage/nikemproducts/soccer/nike4grey.png'},
		{img:'./css/products/productsimage/nikemproducts/soccer/nike5red.png'},
		{img:'./css/products/productsimage/nikemproducts/soccer/nike6blue.png'},
		{img:'./css/products/productsimage/nikemproducts/soccer/nike7white.png'},
		{img:'./css/products/productsimage/nikemproducts/soccer/nike8white.png'},
		{img:'./css/products/productsimage/nikemproducts/soccer/nike9red.png'},
		{img:'./css/products/productsimage/nikemproducts/soccer/nike10blue.png'},
		{img:'./css/products/productsimage/nikemproducts/soccer/nike11white.png'},
		{img:'./css/products/productsimage/nikemproducts/soccer/nike12white.png'},
	];

	this.getNikeMSShoes = function(){
		return fpromise('GET','/nikemsshoes');
	};

//MTraining And Gym
	this.NikeMGTPics = [
		{img:'./css/products/productsimage/nikemproducts/training/nike1red.png'},
		{img:'./css/products/productsimage/nikemproducts/training/nike2red.png'},
		{img:'./css/products/productsimage/nikemproducts/training/nike3black.png'},
		{img:'./css/products/productsimage/nikemproducts/training/nike4black.png'},
		{img:'./css/products/productsimage/nikemproducts/training/nike5white.png'},
		{img:'./css/products/productsimage/nikemproducts/training/nike6white.png'},
		{img:'./css/products/productsimage/nikemproducts/training/nike7black.png'},
		{img:'./css/products/productsimage/nikemproducts/training/nike8black.png'},
		{img:'./css/products/productsimage/nikemproducts/training/nike9red.png'},
		{img:'./css/products/productsimage/nikemproducts/training/nike10black.png'},
		{img:'./css/products/productsimage/nikemproducts/training/nike11red.png'},
		{img:'./css/products/productsimage/nikemproducts/training/nike12white.png'}
	];

	this.getNikeMTGShoes = function(){
		return fpromise('GET','/niketgshoes');
	};




///////////////
//Nike Women//
/////////////
	this.NikeWPics = [
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike1grey.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike2white.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike3white.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike4white.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike5black.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike6black.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike7black.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike8black.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike9pink.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike10pink.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike11white.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike12grey.png'},

		{img:'./css/products/productsimage/nikewproducts/running/nike1grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike2black.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike3grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike4white.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike5red.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike6grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike7grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike8grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike9grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike10grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike11blue.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike12grey.png'},

		{img:'./css/products/productsimage/nikewproducts/soccer/nike1pink.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike2blue.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike3green.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike4orange.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike5pink.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike6blue.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike7green.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike8orange.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike9blue.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike10grey.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike11red.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike12yellow.png'},

		{img:'./css/products/productsimage/nikewproducts/basketball/nike1white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike2white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike3white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike4white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike5white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike6white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike7white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike8white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike9red.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike10black.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike11black.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike12grey.png'},

		{img:'./css/products/productsimage/nikewproducts/training/nike1pink.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike2white.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike3grey.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike4black.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike5purple.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike6grey.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike7grey.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike8black.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike9black.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike10pink.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike11grey.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike12white.png'}
	];

	this.getAllNikeWShoes = function(){
		return fpromise('GET','/nikewshoes');
	}

//wLifestyle
	this.NikeWLSPics = [
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike1grey.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike2white.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike3white.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike4white.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike5black.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike6black.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike7black.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike8black.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike9pink.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike10pink.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike11white.png'},
		{img:'./css/products/productsimage/nikewproducts/lifestyle/nike12grey.png'}
	];

	this.getNikeWLSShoes = function(){
		return fpromise('GET','/nikewlsshoes');
	}

//wRunning
	this.NikeWRnPics = [
		{img:'./css/products/productsimage/nikewproducts/running/nike1grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike2black.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike3grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike4white.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike5red.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike6grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike7grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike8grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike9grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike10grey.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike11blue.png'},
		{img:'./css/products/productsimage/nikewproducts/running/nike12grey.png'}
	];

	this.getNikeWRnShoes = function(){
		return fpromise('GET','/nikewrnshoes');
	}

//wBasketball
	this.NikeWBPics = [
		{img:'./css/products/productsimage/nikewproducts/basketball/nike1white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike2white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike3white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike4white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike5white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike6white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike7white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike8white.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike9red.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike10black.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike11black.png'},
		{img:'./css/products/productsimage/nikewproducts/basketball/nike12grey.png'},
	];

	this.getNikeWBShoes = function(){
		return fpromise('GET','/nikewbshoes');
	}

//wSoccer
	this.NikeWSPics = [
		{img:'./css/products/productsimage/nikewproducts/soccer/nike1pink.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike2blue.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike3green.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike4orange.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike5pink.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike6blue.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike7green.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike8orange.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike9blue.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike10grey.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike11red.png'},
		{img:'./css/products/productsimage/nikewproducts/soccer/nike12yellow.png'}
	];

	this.getNikeWSShoes = function(){
		return fpromise('GET','/nikewsshoes');
	}

//wTraining
	this.NikeWTGPics = [
		{img:'./css/products/productsimage/nikewproducts/training/nike1pink.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike2white.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike3grey.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike4black.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike5purple.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike6grey.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike7grey.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike8black.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike9black.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike10pink.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike11grey.png'},
		{img:'./css/products/productsimage/nikewproducts/training/nike12white.png'}
	];

	this.getNikeWTGShoes = function(){
		return fpromise('GET','/nikewtgshoes');
	};



/////////////
//NikeBoys//
///////////
	this.NikeABPics = [
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle1blue.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle2blue.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle3blue.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle4black.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle5brown.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle6brown.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle7brown.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle8brown.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle9red.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle10red.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle11red.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle12white.png'},

		{img:'./css/products/productsimage/nikebproducts/running/running1black.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running2black.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running3black.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running4grey.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running5blue.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running6blue.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running7grey.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running8black.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running9black.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running10red.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running11black.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running12black.png'},

		{img:'./css/products/productsimage/nikebproducts/basketball/basketball1black.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball2red.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball3red.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball4black.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball5black.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball6red.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball7red.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball8red.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball9black.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball10white.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball11black.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball12black.png'},

		{img:'./css/products/productsimage/nikebproducts/soccer/soccer1orange.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer2orange.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer3orange.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer4orange.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer5red.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer6blue.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer7green.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer8white.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer9red.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer10red.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer11blue.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer12green.png'},

		{img:'./css/products/productsimage/nikebproducts/training/training1black.png'},
		{img:'./css/products/productsimage/nikebproducts/training/training2black.png'},
		{img:'./css/products/productsimage/nikebproducts/training/training3black.png'},
		{img:'./css/products/productsimage/nikebproducts/training/training4black.png'},
		{img:'./css/products/productsimage/nikebproducts/training/training5red.png'},
		{img:'./css/products/productsimage/nikebproducts/training/training6grey.png'},
		{img:'./css/products/productsimage/nikebproducts/training/training7red.png'}
	];

	this.getABShoes = function(){
		return fpromise('GET','/nikebshoes');
	};

//Lifestye
	this.NikeBLSPics = [
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle1blue.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle2blue.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle3blue.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle4black.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle5brown.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle6brown.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle7brown.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle8brown.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle9red.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle10red.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle11red.png'},
		{img:'./css/products/productsimage/nikebproducts/lifestyle/lifestyle12white.png'}
	];

	this.getNikeBLSShoes = function(){
		return fpromise('GET','/nikeblsshoes');
	};

//Running
	this.NikeBRnPics = [
		{img:'./css/products/productsimage/nikebproducts/running/running1black.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running2black.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running3black.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running4grey.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running5blue.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running6blue.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running7grey.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running8black.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running9black.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running10red.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running11black.png'},
		{img:'./css/products/productsimage/nikebproducts/running/running12black.png'}
	];

	this.getNikeBRnShoes = function(){
		return fpromise('GET', '/nikebrunning');
	};

//Basketball
	this.NikeBBPics = [
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball1black.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball2red.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball3red.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball4black.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball5black.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball6red.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball7red.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball8red.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball9black.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball10white.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball11black.png'},
		{img:'./css/products/productsimage/nikebproducts/basketball/basketball12black.png'}
	];

	this.getNikeBBShoes = function(){
		return fpromise('GET', '/nikebbasketball');
	}

//Soccer
	this.NikeBSPics = [
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer1orange.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer2orange.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer3orange.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer4orange.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer5red.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer6blue.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer7green.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer8white.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer9red.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer10red.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer11blue.png'},
		{img:'./css/products/productsimage/nikebproducts/soccer/soccer12green.png'}
	];

	this.getNikeBSShoes = function(){
		return fpromise('GET','/nikebsoccer');
	};

//Training
	this.NikeBTGPics = [
		{img:'./css/products/productsimage/nikebproducts/training/training1black.png'},
		{img:'./css/products/productsimage/nikebproducts/training/training2black.png'},
		{img:'./css/products/productsimage/nikebproducts/training/training3black.png'},
		{img:'./css/products/productsimage/nikebproducts/training/training4black.png'},
		{img:'./css/products/productsimage/nikebproducts/training/training5red.png'},
		{img:'./css/products/productsimage/nikebproducts/training/training6grey.png'},
		{img:'./css/products/productsimage/nikebproducts/training/training7red.png'}
	];

	this.getNikeBTGShoes = function(){
		return fpromise('GET', '/niketraining');
	}










//////////////
//Nike Girl//
////////////

//GAll Shoes
	this.AllGNikePics = [
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeprestextreme.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikepresto.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikehurrcha.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeHurrcahultra.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeg1green.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nike2white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeg3black.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeg4red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeg5purple.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeg6white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeg7white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nike8white.png'},


		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nikeg1red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike2red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike3red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nikeg4blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike5blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike6red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike7red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike8red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nikeg9purple.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nikeg10white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike11black.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nikeg12green.png'},

		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nikeg1white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nikeg2black.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nikeg3red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike4red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike5red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike6white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike7white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike8white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike9white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nikeg10red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike11red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike12black.png'},

		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg1white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg2blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg3grey.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg4red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg5blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg6green.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg7.green.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg8red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg9red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg10grey.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nike11grey.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nike12grey.png'},

		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike1blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike2black.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike3black.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike4black.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike5blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike6blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike7blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike8blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike9blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike10blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike11white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike12black.png'}
	];

	this.getNikeGAShoes = function(){
		return fpromise('GET','/nikegshoes');
	};

//GLife Style
	this.getNikeGLSPics = [
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeprestextreme.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikepresto.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikehurrcha.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeHurrcahultra.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeg1green.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nike2white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeg3black.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeg4red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeg5purple.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeg6white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nikeg7white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/lifestyle/nike8white.png'}
	];

	this.getNikeGLS = function(){
		return fpromise('GET','/nikeglsshoes');
	};

//GRunning
	this.getNikeGRnPics = [
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nikeg1red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike2red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike3red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nikeg4blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike5blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike6red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike7red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike8red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nikeg9purple.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nikeg10white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nike11black.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/running/nikeg12green.png'}
	];


	this.getNikeGRnShoes = function(){
		return fpromise('GET','/nikegrnshoes')
	};


//GBasketball
	this.NikeGBShoesPics = [
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nikeg1white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nikeg2black.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nikeg3red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike4red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike5red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike6white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike7white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike8white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike9white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nikeg10red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike11red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/basketball/nike12black.png'}
	];


	this.getNikeGBShoes = function(){
		return fpromise('GET','/nikegbshoes');
	};

//GSoccer
	this.NikeSShoesPics = [
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg1white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg2blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg3grey.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg4red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg5blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg6green.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg7.green.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg8red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg9red.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nikeg10grey.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nike11grey.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/soccer/nike12grey.png'}
	];

	this.getNikeGSShoes = function(){
		return fpromise('GET','/nikegsshoes');
	};

//GJordan
	this.NikeJShoesPics = [
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike1blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike2black.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike3black.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike4black.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike5blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike6blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike7blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike8blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike9blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike10blue.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike11white.png'},
		{img:'./css/products/productsimage/nikegproducts/nikegproductssuper/jordan/nike12black.png'}
	];


	this.getNikeJShoes = function(){
		return fpromise('GET','/nikegjshoes')
	};




























//Men Section
//Nike Men Shoes
	this.nikeMenShoes =[
	{name:'Running', img:'css/images/nikempng/running.png'},
	{name:'Basketball', img:'css/images/nikempng/basketball.png'},
	{name:'Football', img:'css/images/nikempng/football.png'},
	{name:'traning & gym', img:'css/images/nikempng/training.png'},
	{name: 'sportswear', img:'css/images/nikempng/sportwear.png'},
	{name:'jordan', img:'css/images/nikempng/jordan.png'}
];

//Men Nike + Apps
 	this.nikePlusApps =[
		{name: "Nike+App", desc: "All You Need To Be Your Best", img:"css/images/nikempng/nikeplus.png"},
		{name: "Nike+Run Club", desc:"Your perfect running partner", img:"css/images/nikempng/nikenrc.png"},
		{name: "Nike+Training Club", desc: "Your ultimate personal trainer", img:"css/images/nikempng/nikentc.png"},
		{name: "Nike+Snkrs", desc:"Your ultimate sneaker destination", img:"css/images/nikempng/nikesnkers.png"}
	];

//Men Nike Social Media
	this.nikeFollow =[
		{img:"css/images/nikempng/twitter.png"},
		{img:"css/images/nikempng/facebook.png"},
		{img:"css/images/nikempng/instagram.png"},
		{img:"css/images/nikempng/youtube.png"},
	];



//Women Section
//Nike Women Shoes
	this.nikeWomenShoes =[
		{name: "NIKEiD", img:"css/images/nikewomen/nikeid.png", desc: "Nike Airforce 1 Suede iD"},
		{name: "RUNNING", img:"css/images/nikewomen/running.png", desc: "Nike Zoom All Out Low"},
		{name: "GYM AND TRAINING", img:"css/images/nikewomen/gym.png", desc: "Nike Metcon DSX Flyknit"},
		{name: "LIFESTYLE", img:"css/images/nikewomen/lifestyle.png", desc: "Nike Air Huarache"}
	];

//Women Nike+Apps
	this.wNikePlusApps = [
		{name: "Nike+", desc:"All You Need To Be Your Best", img:"css/images/nikewomen/nikeplus.png"},
		{name: "Nike+ Run Club", desc:"Your perfect running partner", img:"css/images/nikewomen/nrc.png"},
		{name: "Nike+Training Club", desc: "Your ultimate personal trainer", img:"css/images/nikewomen/ntc.png"},
		{name: "Nike+Snkrs", desc:"Your ultimate sneaker destination", img:"css/images/nikewomen/snkrs.png"}
	];
//Women Nike Social Media
	this.wNikeFollow = [
		{img:"css/images/nikempng/twitter.png"},
		{img:"css/images/nikempng/facebook.png"},
		{img:"css/images/nikempng/instagram.png"},
		{img:"css/images/nikempng/youtube.png"},
		{img:"css/images/nikewomen/spotify.png"},
		{img:"css/images/nikewomen/pininterest.png"},
		{img:"css/images/nikewomen/tumblr.png"}
	];


//Kids Section
//Kids Nike Benefits
	this.bestOfNike = [
		{title: "Sign up for email", desc: "Get the latest news and offers.", img:"css/images/nikebpics/signup.png"},
		{title: "Size guide", desc: "Find the right size for your young athlete.", img:"css/images/nikebpics/sizeguide.png"},
		{title: "Gear up", desc: "Everything your young athletes need.", img:"css/images/nikebpics/gearup.png"},
		{title: "Free shipping with nike+", desc: "Wear it, test it, keep what you like.", img:"css/images/nikebpics/freeshipping.png"}
	];


//Boys Section
//Boys Shoes
	this.bNikeShoes =
	[
	 {title: "Running", img: "css/images/nikebpics/running.png"},
	 {title: "Basketball", img: "css/images/nikebpics/basketball.png"},
	 {title: "Soccer", img: "css/images/nikebpics/soccer.png"},
	 {title: "Lifestyle", img: "css/images/nikebpics/lifestyle.png"},
	 {title: "Training", img: "css/images/nikebpics/training.png"},
	 {title: "Jordan", img: "css/images/nikebpics/jordan.png"}
	];

//Boys Clothes
	this.bNikeClothes =
	[
	 {img: "css/images/nikebpics/tops.png"},
	 {img: "css/images/nikebpics/shorts.png"},
	 {img: "css/images/nikebpics/hoodies.png"},
	 {img: "css/images/nikebpics/baselayer.png"},
	 {img: "css/images/nikebpics/socks.png"},
	 {img: "css/images/nikebpics/equipment.png"}
	];

//Boys Checklist
	this.bNikeCheckList =
	[
	 {title: "Soccer Checklist", img:'css/images/nikebpics/soccercheck.png'},
	 {title: "Running Checklist", img:'css/images/nikebpics/runningcheck.png'},
	 {title: "Basketball Checklist", img: 'css/images/nikebpics/basketballcheck.png'}
	];

//Boys Product Poster Page
	this.bProdCategShoes = [
		{title: "Running", img:"./css/products/productsimage/nikebproducts/running.png"},
		{title: "Basketball", img: "./css/products/productsimage/nikebproducts/basketball.png"},
		{title: "Soccer", img: "./css/products/productsimage/nikebproducts/soccer.png"},
		{title: "Lifestyle", img: "./css/products/productsimage/nikebproducts/lifestyle.png"},
		{title: "Training", img: "./css/products/productsimage/nikebproducts/training.png"},
		{title: "Jordan", img: "./css/products/productsimage/nikebproducts/jordan.png"}
	];


//Girl Section
//Girl Shoes
	this.gNikeShoes = [
		{title: "running", img:"css/images/nikegpics/running.png"},
		{title: "basketball", img: "css/images/nikegpics/basketball.png"},
		{title: "soccer", img: "css/images/nikegpics/soccer.png"},
		{title: "lifestyle", img: "css/images/nikegpics/lifestyle.png"},
		{title: "training", img: "css/images/nikegpics/training.png"},
		{title: "jordan", img: "css/images/nikegpics/jordan.png"}
	];

//Girl Clothing
	this.gNikeClothes = [
		{img: "css/images/nikegpics/tops.png"},
		{img: "css/images/nikegpics/shorts.png"},
		{img: "css/images/nikegpics/hoodies.png"},
		{img: "css/images/nikegpics/tights.png"},
		{img: "css/images/nikegpics/socks.png"},
		{img: "css/images/nikegpics/equipment.png"}
	];

//Girl Checklist
	this.gNikeChecklist = [
		{title: "soccer checklist", img: "css/images/nikegpics/soccercheck.png"},
		{title: "running checklist", img: "css/images/nikegpics/runningcheck.png"},
		{title: "basketball checklist", img: "css/images/nikegpics/basketballcheck.png"}
	];

//Girls Poster Shoes
	this.gprodCategShoes = [
		{title: "Running", img: "css/products/productsimage/nikegproducts/running.png"},
		{title: "Basketball", img: "css/products/productsimage/nikegproducts/basketball.png"},
		{title: "Soccer", img: "css/products/productsimage/nikegproducts/soccer.png"},
		{title: "Lifestyle", img: "css/products/productsimage/nikegproducts/lifestyle.png"},
		{title: "Training", img: "css/products/productsimage/nikegproducts/training.png"},
		{title: "Jordan", img: "css/products/productsimage/nikegproducts/jordan.png"}
	];

//Customize Section
//Customize Blank Shoes
	this.cNikeShoes = [
		{title: "Air Max 1 Essential", img: "css/images/customizepics/airmax1ess.png"},
		{title: "Air Max 90 Essential", img: "css/images/customizepics/airmax90.png"},
		{title: "Air Zoom Pegasus 33", img: "css/images/customizepics/airzoompeg.png"},
		{title: "Kobe A.D.", img: "css/images/customizepics/kobead.png"},
		{title: "Air Huarache Essential", img: "css/images/customizepics/airhuraache.png"},
		{title: "Zoom Lebron Soldier 10", img: "css/images/customizepics/zoomlebron.png"},
		{title: "Air Max 90 2.0 Flyknit", img: "css/images/customizepics/airmax.png"},
		{title: "Metcon 3", img: "css/images/customizepics/metcon.png"}
	];

//Customize Summer Suede
	this.cNikeSuede = [
		{title: "NIKE AIR FORCE 1 LOW iD", img:"css/images/customizepics/lownikeair1.png"},
		{title: "NIKE AIR FORCE 1 MID iD", img: "css/images/customizepics/midair1.png"},
		{title: "NIKE AIR FORCE 1 HIGH iD", img: "css/images/customizepics/highair1.png"}
	];





	//Callback :)
	var fpromise = function(a,b){
		var promise =
		$http({
				method: a,
				url: b
			});
		 return promise.then(function(result){
			return result.data;
		})
	};

}]);

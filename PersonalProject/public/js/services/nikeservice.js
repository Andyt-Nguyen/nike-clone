NikeApp.service('NikeService',['$http', function($http){

//////////////////
//Connection To DB//
//////////////////

//All Shoes
	this.getAllShoes = function(){
		var promise = $http({
			method: 'GET',
			url: '/allshoes'
		});
		return promise.then(function(result){
			return result.data;
		})
		};

//Girl Section
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
	]
	this.getNikeGShoes = function(){
		var promise = $http({
			method: 'GET',
			url: '/nikegshoes'
		});
		return promise.then(function(result){
			return result.data;
		});
	}

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

	this.getNikeGLS = function(){
		var promise = $http({
			method: 'GET',
			url: '/nikeglsshoes'
		});
		return promise.then(function(result){
			return result.data;
		});
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
		var promise = $http({
			method: 'GET',
			url: '/nikegrnshoes'
		});
		return promise.then(function(result){
			return result.data;
		});
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
		var promise = $http({
			method: 'GET',
			url: '/nikegbshoes'
		});
		return promise.then(function(result){
			return result.data;
		});
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
		var promise = $http({
			method:'GET',
			url:'/nikegsshoes'
		});
		return promise.then(function(result){
			return result.data;
		});
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
		var promise = $http({
			method: 'GET',
			url:'/nikegjshoes'
		});
		return promise.then(function(response){
			return response.data;
		});
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

}]);

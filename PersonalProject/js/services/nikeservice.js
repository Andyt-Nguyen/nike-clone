NikeApp.service('NikeService',['$http', function($http){



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

}]);

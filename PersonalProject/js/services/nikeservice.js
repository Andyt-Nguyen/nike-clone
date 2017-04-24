NikeApp.service('NikeService',['$http', function($http){



//Men Section//

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


// Women Section //
		this.nikeWomenShoes =[
			{name: "NIKEiD", img:"css/images/nikewomen/nikeid.png", desc: "Nike Airforce 1 Suede iD"},
			{name: "RUNNING", img:"css/images/nikewomen/running.png", desc: "Nike Zoom All Out Low"},
			{name: "GYM AND TRAINING", img:"css/images/nikewomen/gym.png", desc: "Nike Metcon DSX Flyknit"},
			{name: "LIFESTYLE", img:"css/images/nikewomen/lifestyle.png", desc: "Nike Air Huarache"}
		];

//Women Nike + Apps
		this.wNikePlusApps = [
			{name: "Nike+", desc:"All You Need To Be Your Best", img:"css/images/nikewomen/nikeplus.png"},
			{name: "Nike+ Run Club", desc:"Your perfect running partner", img:"css/images/nikewomen/nrc.png"},
			{name: "Nike+Training Club", desc: "Your ultimate personal trainer", img:"css/images/nikewomen/ntc.png"},
			{name: "Nike+Snkrs", desc:"Your ultimate sneaker destination", img:"css/images/nikewomen/snkrs.png"}
		];

		this.wNikeFollow = [
			{img:"css/images/nikempng/twitter.png"},
			{img:"css/images/nikempng/facebook.png"},
			{img:"css/images/nikempng/instagram.png"},
			{img:"css/images/nikempng/youtube.png"},
			{img:"css/images/nikewomen/spotify.png"},
			{img:"css/images/nikewomen/pininterest.png"},
			{img:"css/images/nikewomen/tumblr.png"}
		];


}]);

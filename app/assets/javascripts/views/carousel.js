TVBnB.Views.Carousel = Backbone.View.extend({
	initialize: function(){
		this.urls = options.urls;
		this.activeIndex = 0;
	},

	events {
		'click .slide-right': 'next',
		'click .slide-left': 'back'
	},

	template: JST['index/carousel'],

	activate: function(){

	},

	next: function(){

	},

	back: function(){

	},

	render: function(){
		var content = this.template({
			urls: this.urls
		});
		this.$el.html(content)
		this.activate();
		return this;
	}
})


	// template: JST['index/carousel'],

	// initCarousel: function(){
	// 	this.$('.item-carousel').slick({
	// 		dots: true,
	// 		infinite: true,
	// 		speed: 500,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1
	// 	});
	// },

	// render: function(){
	// 	var content = this.template({
	// 		listing: this.model
	// 	});
	// 	this.$el.html(content);
	// 	this.initCarousel();
	// 	return this;
	// }
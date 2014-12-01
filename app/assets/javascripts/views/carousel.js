TVBnB.Views.Carousel = Backbone.View.extend({
	initialize: function(){
		this.urls = options.urls;
	},

	template: JST['index/carousel'],

	render: function(){
		var content = this.template({
			urls: this.urls
		});
		this.$el.html(content)
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
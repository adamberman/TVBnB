TVBnB.Views.Carousel = Backbone.View.extend({
	template: JST['index/carousel'],

	initCarousel: function(){
		this.$('.item-carousel').slick({
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	},

	render: function(){
		var content = this.template({
			listing: this.model
		});
		this.$el.html(content);
		this.initCarousel();
		return this;
	}
})
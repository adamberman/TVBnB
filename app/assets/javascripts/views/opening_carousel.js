TVBnB.Views.OpeningCarousel = Backbone.View.extend({
	template: JST['opening/carousel'],

	initCarousel: function(){
		this.$('.carousel').slick({
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		var that = this;
		setTimeout(function(){
			that.initCarousel();
		}, 0);
		return this;
	}
})
TVBnB.Views.ShowCarousel = Backbone.View.extend({
	template: JST['show/carousel'],

	initCarousel: function(){
		this.$('.show-carousel').slick({
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
		var that = this;
		setTimeout(function(){
			that.initCarousel();
		}, 0);
		return this;
	}
})
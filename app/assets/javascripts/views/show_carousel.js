TVBnB.Views.ShowCarousel = Backbone.View.extend({
	template: JST['show/carousel'],

	initCarousel: function(){
		this.$('.show-carousel').slick({
			arrows: true,
			dots: true,
			speed: 600
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
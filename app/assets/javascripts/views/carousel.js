TVBnB.Views.Carousel = Backbone.View.extend({
	template: JST['index/carousel'],

	initCarousel: function(){
		var that = this;
		setTimeout(function(){
			$('.carousel').carousel({
				interval: false
			});
		}, 0);
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
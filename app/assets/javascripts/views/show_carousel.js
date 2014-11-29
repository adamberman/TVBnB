TVBnB.Views.ShowCarousel = Backbone.View.extend({
	template: JST['show/carousel'],

	render: function(){
		var content = template({
			listing: this.model
		});
		this.$el.html(content);
		return this;
	}
})
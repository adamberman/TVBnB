TVBnB.Views.Carousel = Backbone.View.extend({
	template: JST['index/carousel'],
	render: function(){
		var content = this.template({
			listing: this.model
		});
		this.$el.html(content);
		return this;
	}
})
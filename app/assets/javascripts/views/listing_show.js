TVBnB.Views.ListingShow = Backbone.CompositeView.extend({
	template: JST['show/main'],
	render: function(){
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})
TVBnB.Views.ListingsIndex = Backbone.CompositeView.extend({
	className: 'listings-index',
	template: JST['index/listings_index'],
	render: function() {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})
TVBnB.Views.ListingsItem = Backbone.View.extend({
	className: 'listings-item',
	template: JST['index/listings_item'],
	render: function() {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})
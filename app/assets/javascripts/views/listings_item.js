TVBnB.Views.ListingsItem = Backbone.View.extend({
	className: 'listings-item row panel-default',
	template: JST['index/listings_item'],
	render: function() {
		var content = this.template({listing: this.model});
		this.$el.html(content);
		return this;
	}
})
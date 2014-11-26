TVBnB.Views.Main = Backbone.CompositeView.extend({
	template: JST['index/main'],
	render: function() {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})
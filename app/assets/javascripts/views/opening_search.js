TVBnB.Views.OpeningSearch = Backbone.View.extend({
	className: 'opening-search',

	template: JST['opening/search'],

	render: function(){
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})
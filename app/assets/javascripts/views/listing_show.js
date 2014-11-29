TVBnB.Views.ListingShow = Backbone.CompositeView.extend({
	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	template: JST['show/main'],

	className: 'show-main',

	render: function(){
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})
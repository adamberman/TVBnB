TVBnB.Views.ListingShow = Backbone.CompositeView.extend({
	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	template: JST['show/main'],

	className: 'show-main',
	
	render: function(){
		var content = this.template({listing: this.model});
		debugger;
		this.$el.html(content);
		return this;
	}
})
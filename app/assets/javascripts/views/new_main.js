TVBnB.Views.NewMain = Backbone.CompositeView.extend({
	initialize: function(){
		
	},

	className: "new-main",

	template: JST['new/main'],
	
	render: function() {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
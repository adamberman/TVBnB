TVBnB.Views.ShowDescription = Backbone.CompositeView.extend({
	template: JST['show/description'],

	className: "description-container",
	
	render: function(){
		content = this.template();
		this.$el.html(content);
		return this;
	}
})
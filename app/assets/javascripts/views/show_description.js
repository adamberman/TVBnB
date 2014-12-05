TVBnB.Views.ShowDescription = Backbone.View.extend({
	
	template: JST['show/description'],

	className: "description-container",

	render: function(){
		var content = this.template({
			listing: this.model
		});
		this.$el.html(content);
		return this;
	}
})
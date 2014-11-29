TVBnB.Views.ShowTitle = Backbone.View.extend({
	template: JST['show/title'],

	className: "title-container",

	render: function(){
		var content = this.template({
			listing: this.model
		});
		this.$el.html(content);
		return this;
	}
})
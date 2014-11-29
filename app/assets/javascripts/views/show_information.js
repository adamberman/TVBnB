TVBnB.Views.ShowInformation = Backbone.CompositeView.extend({
	template: JST['show/information'],

	className: "information-container",

	render: function(){
		content = this.template();
		this.$el.html(content);
		return this;
	}
})
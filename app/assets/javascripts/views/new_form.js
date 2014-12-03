TVBnB.Views.NewForm = Backbone.View.extend({

	className: "new-main",

	template: JST['new/form'],

	render: function() {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})
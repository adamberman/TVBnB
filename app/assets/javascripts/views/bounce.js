TVBnB.Views.Bounce = Backbone.View.extend({

	className: 'ball-container',

	template: JST['extras/bounce'],

	render: function () {
		content = this.template();
		this.$el.html(content);
		return this;
	}
})
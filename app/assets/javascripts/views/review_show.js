TVBnB.Views.ReviewShow = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	template: JST['show/review_show'],

	className: 'review-show',

	render: function(){
		var content = this.template({
			review: this.model
		});
		this.$el.html(content);
		return this;
	}
})
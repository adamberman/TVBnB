TVBnB.Views.ReviewsContainer = Backbone.CompositeView.extend({
	initialize: function(){

	},

	template: JST['show/reviews_container'],

	className: 'reviews-container',

	render: function(){
		content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
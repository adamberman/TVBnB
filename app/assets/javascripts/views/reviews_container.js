TVBnB.Views.ReviewsContainer = Backbone.CompositeView.extend({
	initialize: function(){
		this.addReviewsIndex();
	},

	template: JST['show/reviews_container'],

	className: 'reviews-container',

	addReviewsIndex: function(){
		var reviews = new TVBnB.Views.ReviewsIndex({
			collection: this.model.reviews()
		});
		this.addSubview('.reviews-index', reviews);
	},

	render: function(){
		content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
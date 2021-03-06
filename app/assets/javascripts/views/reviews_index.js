TVBnB.Views.ReviewsIndex = Backbone.CompositeView.extend({
	
	initialize: function(){
		this.listenTo(this.collection, 'sync', this.render);
		this.listenTo(this.collection, 'add', this.addReview);
		this.listenTo(this.collection, 'remove', this.removeReview);
		this.collection.each(this.addReview.bind(this));
	},

	template: JST['show/reviews_index'],

	addReview: function(review){
		var subview = new TVBnB.Views.ReviewShow({
			model: review 
		});
		this.addSubview('.reviews-list', subview);
	},

	removeReview: function(review){
		var subview = _.find(this.subviews('.reviews-list'), function(subview){
			return subview.model === review;
		});
		this.removeSubview('.reviews-list', subview);
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
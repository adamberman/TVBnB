TVBnB.Views.ReviewsIndex = Backbone.CompositeView.extend({
	initialize: function(){
		this.listenTo(this.collection, 'sync', this.render);
		this.listenTo(this.collection, 'add', this.addReview);
		this.listenTo(this.collection, 'remove', this.removeReview);
		this.collection.each(this.addReview.bind(this));
	},

	addReview: function(review){
		
	}
})
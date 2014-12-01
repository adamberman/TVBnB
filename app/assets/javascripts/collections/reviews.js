TVBnB.Collections.Reviews = Backbone.Collection.extend({
	model: TVBnB.Models.Review,

	url: "/api/review",

	getOrFetch: function(id){
		var review = this.get(id)
		var reviews = this;
		if (!review) {
			review = new TVBnB.Models.review({id: id});
			review.fetch({
				success: function(){
					reviews.add(review);
				}
			});
		} else {
			review.fetch();
		}
		return review;
	},
})
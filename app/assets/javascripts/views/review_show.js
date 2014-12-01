TVBnB.Views.ReviewShow = Backbone.View.extend({
	initialize: function(){
		this.user = new TVBnB.Model.User({id: this.model.user_id});
		this.user.fetch();
		this.listenTo(this.user, 'sync', this.render);
		this.listenTo(this.model, 'sync', this.render);
	},

	template: JST['show/review_show'],

	className: 'review-show',

	render: function(){
		var content = this.template({
			review: this.model,
			user: this.user
		});
		this.$el.html(content);
		return this;
	}
})
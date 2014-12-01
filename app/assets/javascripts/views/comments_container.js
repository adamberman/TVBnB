TVBnB.Views.CommentsContainer = Backbone.CompositeView.extend({
	initialize: function(){

	},

	template: JST['show/comments_container'],

	className: 'comments-container',

	render: function(){
		content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
TVBnB.Views.ShowTitle = Backbone.View.extend({

	initialize: function() {
		this.user = new TVBnB.Models.User({id: this.model.escape('user_id')});
		this.user.fetch();
		this.listenTo(this.user, 'sync', this.render)
	},

	template: JST['show/title'],

	className: "title-container",

	render: function(){
		var content = this.template({
			listing: this.model,
			user: this.user
		});
		this.$el.html(content);
		return this;
	}
})
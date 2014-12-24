TVBnB.Views.ShowTitle = Backbone.View.extend({

	initialize: function() {
		this.user = new TVBnB.Models.User({id: this.model.escape('user_id')});
		this.user.fetch();
		this.listenTo(this.user, 'sync', this.render)
	},

	events: {
		'click .user-gravatar-img-explode': 'funTransition'
	},

	template: JST['show/title'],

	className: "title-container-wrapper",

	// easter egg transition!
	funTransition: function(){
		$('.user-gravatar-img-explode').effect({
			effect: 'explode',
			complete: this.funTransitionBack
		}).bind(this)
	},

	// and transition back!
	funTransitionBack: function(){
		$('.user-gravatar-img-explode').toggle('explode');
	},

	render: function(){
		var content = this.template({
			listing: this.model,
			user: this.user
		});
		this.$el.html(content);
		return this;
	}
})
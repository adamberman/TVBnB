TVBnB.Views.NewImages = Backbone.CompositeView.extend({
	initialize: function(){
		this.addNewImagesForm();
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model, 'uploadSuccess', this.successMessage);
	},

	className: "new-main",

	template: JST['new/images'],

	events: {
		'click': 'removeSuccessMessage'
	},

	addNewImagesForm: function(){
		var form = new TVBnB.Views.NewImagesForm({
			model: this.model
		});
		this.addSubview('.new-images-form', form);
	},

	successMessage: function(){
		this.$('.success-message').removeClass('invisible');
		this.$('.success-message').addClass('visible');
	},

	removeSuccessMessage: function(){
		this.$('.success-message').addClass('invisible');
		this.$('.success-message').removeClass('visible');
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
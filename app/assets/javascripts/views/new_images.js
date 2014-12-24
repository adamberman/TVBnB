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

	// basic image upload form
	addNewImagesForm: function(){
		var form = new TVBnB.Views.NewImagesForm({
			model: this.model
		});
		this.addSubview('.new-images-form', form);
	},

	// message displayed when an image is successfully uploaded
	successMessage: function(){
		this.$('.success-message').removeClass('invisible');
		this.$('.success-message').addClass('visible');
	},

	// after a successful upload, a click anywhere on the page makes the success message disappear
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
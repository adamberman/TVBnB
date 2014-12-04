TVBnB.Views.NewImages = Backbone.CompositeView.extend({
	initialize: function(){
		this.addNewImagesForm();
	},

	className: "new-main",

	template: JST['new/images'],

	events: {
	},

	addNewImagesForm: function(){
		var form = new TVBnB.Views.NewImagesForm();
		this.addSubview('.new-images-form', form);
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
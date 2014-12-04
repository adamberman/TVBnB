TVBnB.Views.NewImages = Backbone.CompositeView.extend({
	initialize: function(){
		this.addNewImagesForm();
		this.listenTo(this.model, 'sync', this.render);
	},

	className: "new-main",

	template: JST['new/images'],

	events: {
	},

	addNewImagesForm: function(){
		var form = new TVBnB.Views.NewImagesForm({
			model: this.model
		});
		this.addSubview('.new-images-form', form);
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
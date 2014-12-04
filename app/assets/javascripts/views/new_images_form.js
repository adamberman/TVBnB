TVBnB.Views.NewImagesForm = Backbone.View.extend({

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	className: "new-images-form",

	template: JST['new/images_form'],

	render: function() {
		var content = this.template({
			listing: this.model
		});
		this.$el.html(content);
		return this;
	}
})
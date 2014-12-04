TVBnB.Views.NewImagesForm = Backbone.View.extend({

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	events: {
		'click button.new-image-button': 'submitImage'
	},

	className: "new-images-form",

	template: JST['new/images_form'],

	submitImage: function(event){
		event.preventDefault();
		var image = new TVBnB.Models.Image();
		var values = {};

		_.each(this.$('form').serializeArray(), function(input){
			values[input.name] = input.value;
		})

		image.save(values, {
			iframe: true,
			files: this.$('form :file'),
			data: values
		});
	},

	render: function() {
		var content = this.template({
			listing: this.model
		});
		this.$el.html(content);
		return this;
	}
})
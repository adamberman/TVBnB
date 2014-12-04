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
		var params = {listing_id: this.model.id}
		var image = new TVBnB.Models.Image(params);
		var values = {};
		var csrf_param = $('meta[name=csrf-param').attr('content');
		var csrf_token = $('meta[name=csrf-token').attr('content');
		var values_with_csrf;

		_.each(this.$('form').serializeArray(), function(input){
			values[input.name] = input.value;
		})

		values_with_csrf = _.extend({}, values);
		values_with_csrf[csrf_param] = csrf_token;
		values_with_csrf['listing_id'] = this.model.id;

		image.save({}, {
			iframe: true,
			files: this.$('form :file'),
			data: values_with_csrf
		});

		this.listenTo(image, 'sync', this.render);
		this.listenTo(image, 'sync', this.fireFinished);

		this.addProgress()
	},

	addProgress: function(){
		this.$('.new-image-button').removeClass('visible');
		this.$('.new-image-button').addClass('invisible');
		this.$('.load-display').removeClass('invisible');
		this.$('.load-display').addClass('visible');
	},

	fireFinished: function(){
		this.model.trigger('uploadSuccess');
	},

	render: function() {
		var content = this.template({
			listing: this.model
		});
		this.$el.html(content);
		return this;
	}
})
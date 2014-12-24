TVBnB.Views.NewImagesForm = Backbone.View.extend({

	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	},

	events: {
		'submit form': 'submitImage',
		'change .image-input': 'handleFile'
	},

	className: "new-images-form",

	template: JST['new/images_form'],

	// basic methodology for uploading an image, using paperclip library on backend, stored on AWS
	// commented out section is methodology for uploading an image with iframe
	submitImage: function(event){
		event.preventDefault();
		var params = $(event.target).serializeJSON();
		// var params = {listing_id: this.model.id}
		var image = new TVBnB.Models.Image({ listing_id: this.model.id });
		// var values = {};
		// var csrf_param = $('meta[name=csrf-param').attr('content');
		// var csrf_token = $('meta[name=csrf-token').attr('content');
		// var values_with_csrf;

		// _.each(this.$('form').serializeArray(), function(input){
		// 	values[input.name] = input.value;
		// })

		// values_with_csrf = _.extend({}, values);
		// values_with_csrf[csrf_param] = csrf_token;
		// values_with_csrf['listing_id'] = this.model.id;

		image.save(params, {
			// iframe: true,
			// files: this.$('form :file'),
			// data: values_with_csrf
		});

		// start progress bar, listen for when finished to stop progress bar
		this.listenTo(image, 'sync', this.render);
		this.listenTo(image, 'sync', this.fireFinished);

		this.addProgress()
	},

	// when file is selected from explorer, place file into hidden field to prep for upload
	handleFile: function(event) {
    var input = event.target;
    var file = input.files[0]

    var reader = new FileReader();
    var that = this;
    reader.onload = function(event) {
      that.$('#put-image-here').val(this.result)
    };

    return reader.readAsDataURL(file)
  },

  // while upload is happening, show progress bar
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
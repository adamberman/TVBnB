TVBnB.Views.NewMain = Backbone.CompositeView.extend({
	initialize: function(){
		this.addNewListingForm();
	},

	className: "new-main",

	template: JST['new/main'],

	events: {
		'click .new-listing-button': 'submitListing'
	},

	// upon clicking the submit button, serialize the data, send an ajax request creating a new listing, and navigate to the new listing
	submitListing: function(event){
		event.preventDefault();
		formValues = this.$('form.new-listing-form-wrapper').serializeJSON().listing;
		var params = {
			name: formValues.name,
			description: formValues.description,
			address: formValues.address,
			price: formValues.price
		};
		var newListing = new TVBnB.Models.Listing(params);
		var that = this;
		newListing.save({}, {
			success: function(response){
				var id = response.get('id');
				Backbone.history.navigate('listings/' + id + '/new-images', { trigger: true });
			},
			error: function(){
				alert('nope');
			}
		})
	},

	addNewListingForm: function(){
		var form = new TVBnB.Views.NewForm();
		this.addSubview('.new-listing-form', form);
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
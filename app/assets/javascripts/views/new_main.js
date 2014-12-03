TVBnB.Views.NewMain = Backbone.CompositeView.extend({
	initialize: function(){
		this.addNewListingForm();
	},

	className: "new-main",

	template: JST['new/main'],

	events {
		'click button.new-listing': 'submitListing'
	},

	submitListing: function(event){
		event.preventDefault();
		$params = $('form.new-listing-form-wrapper').serializeJSON();
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
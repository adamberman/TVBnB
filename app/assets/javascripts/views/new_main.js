TVBnB.Views.NewMain = Backbone.CompositeView.extend({
	initialize: function(){
		this.addNewListingForm();
	},

	className: "new-main",

	template: JST['new/main'],

	addNewListingForm: function(){
		var form = new TVBnB.Views.NewForm({
			this.model
		});
		this.addSubview('.new-listing-form', form);
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
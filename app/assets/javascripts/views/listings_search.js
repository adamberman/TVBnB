TVBnB.Views.ListingsSearch = Backbone.View.extend({

	initialize: function(){

	},

	template: JST['index/listings_search'],

	events: {
		"submit form": "submitForm"
	},

	submitForm: function(event){
		event.preventDefault();
		debugger;
		// create object with price min and max
		// trigger event from collection, send trigger
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})
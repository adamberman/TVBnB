TVBnB.Views.ListingsSearch = Backbone.View.extend({

	initialize: function(){

	},

	template: JST['index/listings_search'],

	events: {
		"change form": "submitForm"
	},

	submitForm: function(event){
		event.preventDefault();
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})
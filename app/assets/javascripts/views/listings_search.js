TVBnB.Views.ListingsSearch = Backbone.View.extend({

	initialize: function(){
	},

	template: JST['index/listings_search'],

	events: {
		"submit form": "submitForm"
	},

	submitForm: function(event){
		event.preventDefault();
		var options = $(event.currentTarget).serializeJSON();
		this.collection.trigger("newSearch", options);
	},

	initDatePicker: function(){
		var that = this;
		setTimeout(function(){
			true;
			that.$('.input-daterange').datepicker({
    		todayHighlight: true
			});
		})
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		this.initDatePicker();
		return this;
	}
})
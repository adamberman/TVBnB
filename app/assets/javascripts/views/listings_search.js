TVBnB.Views.ListingsSearch = Backbone.View.extend({

	initialize: function(){
	},

	template: JST['index/listings_search'],

	events: {
		"change form": "submitForm"
	},

	submitForm: function(event){
		event.preventDefault();
		var options = $(event.currentTarget).serializeJSON();
		this.collection.trigger("newSearch", options);
		debugger;
	},

	initDatePicker: function(){
		var that = this;
		setTimeout(function(){
			$startDate = $('#start').datepicker({
				startDate: new Date(),
				autoclose: true
			});
			$endDate = $('#end').datepicker({
				startDate: new Date(),
				autoclose: true
			});
			// true;
			// that.$('.input-daterange').datepicker({
   //  		todayHighlight: true
			// });
		}, 0);
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		this.initDatePicker();
		return this;
	}
})
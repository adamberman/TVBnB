TVBnB.Views.ShowBooking = Backbone.View.extend({
	template: JST['show/booking'],

	className: 'booking-container',

	events: {
		"change form": "changeForm"
	},

	changeForm: function(event){
		event.preventDefault();
		var formValues = $(event.currentTarget).serializeJSON();
		var numDays = (new Date(formValues.date.end) - new Date(formValues.date.start))/ (1000 * 60 * 60 * 24);
		var options: {numDays: numDays};
		this.render();
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
			$startDate.on('changeDate', function(){
				$endDate.datepicker('setStartDate', $startDate.datepicker('getDate'))
			});
		}, 0);
	},

	render: function(options){
		var content;
		if(options){
			var content = this.template({
				listing: this.model,
				numDays: options.numDays
			});
		} else {
			var content = this.template({
				listing: this.model,
				numDays: 0
			});
		}
		this.$el.html(content);
		this.initDatePicker();
		return this;
	}
})
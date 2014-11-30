TVBnB.Views.ShowBooking = Backbone.View.extend({
	template: JST['show/booking'],

	className: 'booking-container',

	events: {
		"change form": "changeForm",
		"click button.request-to-book": "submitBookingRequest"
	},

	changeForm: function(event){
		event.preventDefault();
		var formValues = $(event.currentTarget).serializeJSON();
		var numDays;
		var disableButton;
		if(formValues.date.start != "" && formValues.date.end != ""){
			var numDays = (new Date(formValues.date.end) - new Date(formValues.date.start))/ (1000 * 60 * 60 * 24);
			disableButton = false;
		} else {
			var numDays = 0;
			disableButton = true;
		}
		var options = {start: formValues.date.start, end: formValues.date.end, numDays: numDays};
		this.render(options);
		button = this.$('button.request-to-book');
		if(disableButton){
			button.prop('disabled', true);
		} else {
			button.prop('disabled', false);
		}
	},

	submitBookingRequest: function(event){
		event.preventDefault();
		var formValues = this.$('form').serializeJSON();
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
				options: options
			});
		} else {
			var content = this.template({
				listing: this.model,
				options: {start: "", end: "", numDays: 0}
			});
		}
		this.$el.html(content);
		this.initDatePicker();
		return this;
	}
})
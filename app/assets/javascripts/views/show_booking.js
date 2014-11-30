TVBnB.Views.ShowBooking = Backbone.View.extend({
	template: JST['show/booking'],

	className: 'booking-container',

	events: {
		"change form": "changeForm"
	},

	changeForm: function(event){
		event.preventDefault();
		var formValues = $(event.currentTarget).serializeJSON();
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
			$startDate.on('changeDate', function(){
				$endDate.datepicker('setStartDate', $startDate.datepicker('getDate'))
			});
		}, 0);
	},

	render: function(){
		var content = this.template({
			listing: this.model
		});
		this.$el.html(content);
		this.initDatePicker();
		return this;
	}
})
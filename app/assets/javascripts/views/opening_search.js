TVBnB.Views.OpeningSearch = Backbone.View.extend({

	className: 'opening-search',

	template: JST['opening/search'],

	events: {
		'change form': 'checkIfComplete',
		'click button': 'submit'
	},

	initDatePicker: function(){
		var that = this;
		setTimeout(function(){
			that.$startDate = $('#start').datepicker({
				startDate: new Date(),
				autoclose: true
			});
			that.$endDate = $('#end').datepicker({
				startDate: new Date(),
				autoclose: true
			});
			that.$startDate.on('changeDate', function(){
				that.$endDate.datepicker('setStartDate', that.$startDate.datepicker('getDate'))
			});
			that.$endDate.on('changeDate', function(){
				that.$startDate.datepicker('setEndDate', that.$endDate.datepicker('getDate'))
			});
		}, 0);
	},

	checkIfComplete: function(){
		var params = this.$el.find('form').serializeJSON.search;
		debugger;
	},

	submit: function(event){
		event.preventDefault();
		var params = this.$el.find('form').serializeJSON().search;
		$.cookie('location', params.location, { path: '/' });
		$.cookie('start_date', params.start_date, { path: '/' });
		$.cookie('end_date', params.end_date, { path: '/' });
		Backbone.history.navigate('#/search', { trigger: true });
	},

	render: function(){
		var content = this.template();
		this.$el.html(content);
		this.initDatePicker();
		return this;
	}
})
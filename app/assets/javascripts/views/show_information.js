TVBnB.Views.ShowInformation = Backbone.CompositeView.extend({
	initialize: function(){
		this.addTitle();
		this.addDescription();
	},

	template: JST['show/information'],

	className: "information-container",

	addTitle: function(){
		var title = new TVBnB.Views.ShowTitle({
			model: this.model
		});
		this.addSubview('.title', title);
	},

	addDescription: function(){
		var description = new TVBnB.Views.ShowDescription({
			model: this.model
		});
		this.addSubview('.description', description);
	},

	render: function(){
		content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
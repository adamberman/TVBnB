TVBnB.Views.ShowInformation = Backbone.CompositeView.extend({
	initialize: function(){
		this.addTitle();
	},

	template: JST['show/information'],

	className: "information-container",

	addTitle: function(){
		var title = TVBnB.Views.ShowTitle({
			model: this.model
		});
		this.addSubview('.title', title);
	},

	render: function(){
		content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
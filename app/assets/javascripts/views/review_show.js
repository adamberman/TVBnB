TVBnB.Views.ReviewShow = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.model, 'sync', this.render);
	}
})
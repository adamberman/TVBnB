TVBnB.Routers.Router = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl;
	},
	routes: {
		"": "index"
	},
	index: function(){
		var collection = new TVBnB.Collections.Listings();
		collection.fetch();
		var view = new TVBnB.Views.Main({collection: collection});
		this._swapView(view);
	},
	_swapView: function(newView){
		if(this._currentView){
			this._currentView.remove();
		}
		this.$rootEl.html(newView.render().$el);
		this._currentView = newView;
	}
})
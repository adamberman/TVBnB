TVBnB.Routers.Router = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl;
	},
	routes: {
		"": "opening",
		"search": "search",
		"listings/new": "newListing",
		"listings/:id": "show"
	},

	opening: function(){
		var view = new TVBnB.Views.OpeningMain();
		this._swapView(view);
		$('.opening-search-block').geocomplete();
	},

	newListing: function(){
		var listing = new TVBnB.Models.Listing();
		var view = new TVBnB.Views.NewMain({
			model: listing
		});
		this._swapView(view);
	},

	show: function(id){
		var listing = new TVBnB.Models.Listing({id: id});
		listing.fetch();
		var view = new TVBnB.Views.ListingShow({model: listing});
		this._swapView(view);
	},

	search: function(){
		var collection = new TVBnB.Collections.Listings();
		collection.fetch();
		var view = new TVBnB.Views.Main({collection: collection});
		this._swapView(view);
		$('.listing-search-block').geocomplete();
	},
	_swapView: function(newView){
		if(this._currentView){
			this._currentView.remove();
		}
		this.$rootEl.html(newView.render().$el);
		this._currentView = newView;
	}
})
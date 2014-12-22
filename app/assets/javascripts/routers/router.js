TVBnB.Routers.Router = Backbone.Router.extend({

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "opening",
		"search": "search",
		"bounce": "bounce",
		"listings/new": "newListing",
		"listings/:id": "show",
		"listings/:id/new-images": "newImages"
	},

	opening: function () {
		var view = new TVBnB.Views.OpeningMain();
		this._swapView(view);
		$('.opening-search-block').geocomplete();
	},

	newListing: function () {
		var view = new TVBnB.Views.NewMain();
		this._swapView(view);
		$('#new-listing-address').geocomplete();
	},

	show: function (id) {
		var listing = new TVBnB.Models.Listing({ id: id });
		listing.fetch();
		var view = new TVBnB.Views.ListingShow({ model: listing });
		this._swapView(view);
	},

	search: function () {
		var collection = new TVBnB.Collections.Listings();
		collection.fetch();
		var view = new TVBnB.Views.Main({ collection: collection });
		this._swapView(view);
		$('.listing-search-block').geocomplete();
	},

	newImages: function (id) {
		var listing = new TVBnB.Models.Listing({ id: id });
		listing.fetch();
		var view = new TVBnB.Views.NewImages({ model: listing });
		this._swapView(view);
	},

	bounce: function () {
		var view = new TVBnB.Views.Bounce();
		this._swapView(view);
	},

	// get rid of zombie views by removing all active listeners on the old view
	_swapView: function (newView) {
		if(this._currentView){
			this._currentView.remove();
		}
		this.$rootEl.html(newView.render().$el);
		this._currentView = newView;
	}
})
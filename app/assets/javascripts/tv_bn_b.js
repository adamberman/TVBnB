window.TVBnB = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	new TVBnB.Routers.Router({$rootEl: $("#main")});
  	Backbone.history.start();
  }
};

$(document).ready(function(){
  TVBnB.initialize();
});

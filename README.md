TVBNnB
======

Check out the site [here](http://www.tvbnb.com).

This is an application modeled after AirBnB, but where the users are fictional characters from tv shows. Users can can rent out apartments from other users. When searching for an apartment, a user can search by geographic location, price, and available dates. Users can also list their own places to rent. In this version of the app, users are fictional characters from notable tv shows (Seinfeld, Mad Men, etc). The listings seeded on this app are the fictional apartments in the shows.

I built this site almost completely as a one-pager, so nearly all of the functionality is written in Javascript using the Backbone Composite View pattern. Some notable features:

* Search is accomplished by using Underscore's filter method on a collection of listings 

* Location search can be accomplished both through manually entering a location or by clicking and dragging the google map

* Search params are shared by firing an event on a commonly shared collection and sending the params with the event

* Search params are gathered by listening for said event

* Location, start date, and end date are shared throughout the site using cookies, allowing a user to close the page and return to the same search

* I built the carousel on the Search page myself (design modeled after the 'slick' carousel)

* When creating a new listing, images are uploaded and stored using paperclip and AWS, but a method for uploading using iframe exists in the comments

* Calendar on an individual listing page only shows dates which are available to be booked

Possible future additions to the site:

* Most importantly, for scalability concerns, transition the search functionality to active record. Most likely, a search by the map's current location sent by AJAX, with a paginated response, and then use client side filtration for the price/date search. However, as scalability would become a concern, perhaps all search would need to be transitioned to active record.

* For optimization, cache results that have been sent from the server and store the paramaters that have been sent to the server, thus not requiring a hit to the server if the search paramaters return to the same. For example, if a person drags the map a bit to the left, store the data that would go off the page, so if they drag it back to the right, the view does not send an unnecessary ajax request.

* More robust User page, so that users can approve/reject requests, review sites, edit their listings, etc

* Use Devise/OmniAuth and make a modal for authentication

* Add ratings to reviews

* Add categories to listings (apartment, home, bed, etc), as well as "features" (dishwasher, garage, bike etc)

* Since this is a site about TV, allow uses to search by genre so that, for example, they can view only comedy properties
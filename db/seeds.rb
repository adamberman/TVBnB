ActiveRecord::Base.transaction do
	User.create!(username: "George", password: "vandalay_industries", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/george.jpg')
	User.create!(username: "Jerry", password: "notwearingthePUFFYSHIRT", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/jerry.jpg')
	User.create!(username: "Elaine", password: "iHeartLloydBraun", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/elaine.jpeg')
	User.create!(username: "Fry", password: "all_hail_the_hypnotoad", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/fry.jpg')
	User.create!(username: "Leela", password: "nibbler315", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/leela.jpg')
	User.create!(username: "Bender", password: "pimpmobile", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/bender.jpg')
	User.create!(username: "Ross", password: "dinasaursRock", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/ross.jpg')
	User.create!(username: "Phoebe", password: "smellycat", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/phoebe.jpg')
	User.create!(username: "Monica", password: "cookingIsaHabit", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/monica.jpg')
	User.create!(username: "Liz", password: "princessLeiawannabe", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/liz.jpg')
	User.create!(username: "Jack", password: "6sigma", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/jack.jpeg')
	User.create!(username: "Jenna", password: "Jenna1", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/jenna.jpg')
	User.create!(username: "Don", password: "NotDickWhitman", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/don.jpg')
	User.create!(username: "Betty", password: "PartTimeModel", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/betty.jpg')
	User.create!(username: "Roger", password: "SterlingCooper", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/roger.jpg')

	Listing.create!(name: "Beautiful NYC Duplex", description: "Lovely 3 bedroom, 1 1/2 bath apartment. Lots of room for a family. You definitely want to go to here.", user_id: 10, address: "168 Riverside Dr New York, NY 10024", price: 235)
	Listing.create!(name: "Cozy Apartment Right On The Park", description: "Apartment is right on the park, beautiful views if you like that sort of thing.", user_id: 2, address: "129 W 81st St New York, NY 10024", price: 360)
	Listing.create!(name: "Bite My Shiny Metal Apartment", description: "Spacious 2 cubic meter apartment. Large closet in the back if you need a little more room.", user_id: 6, address: "310 W 20th St, New York, NY 10011", price: 120)
	Listing.create!(name: "Sparkling Clean, Stylish Place", description: "If you need a well organized, prepared, and clean apartment in NYC, this 2 bedroom place will be perfect. Food provided.", user_id: 9, address: "90 Bedford St New York, NY 10014", price: 500)
	Listing.create!(name: "Gorgeous Upper East Side Apartment", description: "New art. New view. New surroundings. This apartment is your window to the world.", user_id: 13, address: "783 Park Ave New York, NY 10021", price: 950)
end


t.integer  "price",       null: false
    t.string   "address",     null: false
    t.string   "name",        null: false
    t.text     "description", null: false
    t.integer  "user_id",     null: false
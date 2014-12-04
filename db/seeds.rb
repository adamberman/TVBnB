ActiveRecord::Base.transaction do
	User.create!(username: "George", password: "vandalay_industries", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/george.jpg')
	User.create!(username: "Jerry", password: "notwearingthePUFFYSHIRT", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/jerry.jpg')
	User.create!(username: "Elaine", password: "iHeartLloydBraun", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/elaine.jpeg')
	User.create!(username: "Fry", password: "all_hail_the_hypnotoad", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/fry.jpg')
	User.create!(username: "Leela", password: "nibbler315", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/leela.jpg')
	User.create!(username: "Bender", password: "bite_my_shiny_metal", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/bender.jpg')
	User.create!(username: "Ross", password: "dinasaursRock", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/ross.jpg')
	User.create!(username: "Phoebe", password: "smellycat", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/phoebe.jpg')
	User.create!(username: "Monica", password: "cookingIsaHabit", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/monica.jpg')
	User.create!(username: "Liz", password: "princessLeiawannabe", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/liz.jpg')
	User.create!(username: "Jack", password: "6sigma", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/jack.jpeg')
	User.create!(username: "Jenna", password: "Jenna1", gravatar_url: 'https://s3-us-west-1.amazonaws.com/tvbnb/jenna.jpg')
end

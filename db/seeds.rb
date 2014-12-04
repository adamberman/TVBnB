ActiveRecord::Base.transaction do
	User.create!(username: "George", password: "vandalay_industries", gravatar_url: '/assets/george.jpg')
	User.create!(username: "Jerry", password: "notwearingthePUFFYSHIRT", gravatar_url: '/assets/jerry.jpg')
	User.create!(username: "Elaine", password: "iHeartLloydBraun", gravatar_url: '/assets/elaine.jpeg')
	User.create!(username: "Fry", password: "all_hail_the_hypnotoad", gravatar_url: '/assets/fry')
	User.create!(username: "Leela", password: "nibbler315", gravatar_url: '/assets/leela.jpg')
	User.create!(username: "Bender", password: "bite_my_shiny_metal", gravatar_url: '/assets/jpg')
	User.create!(username: "Ross", password: "dinasaursRock", gravatar_url: '/assets/ross.jpg')
	User.create!(username: "Phoebe", password: "smellycat", gravatar_url: '/assets/phoebe.jpg')
	User.create!(username: "Monica", password: "cookingIsaHabit", gravatar_url: '/assets/monica.jpg')
	User.create!(username: "Liz", password: "princessLeiawannabe", gravatar_url: '/assets/liz.jpg')
	User.create!(username: "Jack", password: "6sigma", gravatar_url: '/assets/jack.jpeg')
	User.create!(username: "Jenna", password: "Jenna1", gravatar_url: '/assets/jenna.jpg')
end

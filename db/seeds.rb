ActiveRecord::Base.transaction do
	User.create!(username: "George", password: "vandalay_industries", gravatar_url: '/assets/george.jpg')
end

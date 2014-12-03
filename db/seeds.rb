ActiveRecord::Base.transaction do
	User.create!(username: "George", password: "vandalay_industries", gravatar_url: 'george.jpg')
end

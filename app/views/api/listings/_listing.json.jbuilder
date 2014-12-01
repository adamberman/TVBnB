json.extract!(
	listing,
	:id,
	:price,
	:address,
	:name,
	:description,
	:latitude,
	:longitude,
	:user_id
)
urls = []
listing.images.each do |image| 
	urls.push(image.url)
end
json.urls urls

reservations = []
listing.reservations.each do |reservation|
	reservations.push([reservation.start_date, reservation.end_date])
end
json.reservations reservations

reviews = []
listing.reviews.each do |review|
	reviews.push([review.content, review.user_id])
end
json.reviews reviews

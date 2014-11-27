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

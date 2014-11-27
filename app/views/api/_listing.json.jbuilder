json.extract!(
	listing,
	:id,
	:price,
	:address,
	:name,
	:description,
	:user_id
)
urls = []
listing.images.each { |image| urls.push(image.url) }
json.urls urls

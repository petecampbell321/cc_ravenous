const apiKey = 'FGZQFdlwaisj6ft7u38k_l9t6js9D1pDVkpkn2YpqYJni8tT2vc5-UNnD7We4sdVK5SmDEh-pwPRxi0WUf1U9wU9DT0IPR3xXObJavkL5fPhuhhrg9G8glNcCwl_WnYx';

const yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {Authorization: `Bearer ${apiKey}`}
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default yelp;
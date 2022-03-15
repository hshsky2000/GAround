import { Restaurant } from '../models/restaurant.js'
import { Review } from '../models/review.js'
import { getRestaurantsFromYelp } from './index.js'
import axios from 'axios'


function index(req, res) {
  Restaurant.find({})
  .then(restaurants => {
    getRestaurantsFromYelp()
  })
  .then(restaurants => {
    res.render('restaurants/index', {
      restaurants,
      title: "Restaurants"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/restaurants")
  })
}

function newRestaurant(req, res) {
  res.render('restaurants/new', {
    title: 'Add Restaurants',
  });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const restaurant = new Restaurant(req.body)
  restaurant.save(function(err) {
    if (err) return res.redirect('/restaurants/new')
    res.redirect(`/restaurants/${restaurant._id}`);
  });
}
 
function show(req, res) {
  const restaurantId = req.params.id
  getRestaurantDetailsFromYelp(restaurantId)
    .then(restaurant => {
      Review.find({restaurantId: req.params.id})
        .then(reviews => {
          res.render('restaurants/show', {
            r: restaurant.data,
            title: 'Restaurant detail',
            reviews
          })
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

function deleteRestaurant(req, res) {
  Restaurant.findByIdAndDelete(req.params.id, function(err, restaurant) {
    console.log('as;dkfja;ldksjfa;lksdjf')
    res.redirect('/restaurants/hello')
  })
  .catch(err => console.log(err))
}

function edit(req, res) {
  Restaurant.findById(req.params.id, function(err, restaurant) {
    res.render('restaurants/edit', {
      restaurant,
      err,
      title: "Edit Restaurant"
    })
  })
}
      
function update(req, res) {
  req.body.review = !!req.body.review
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Restaurant.findByIdAndUpdate(req.params.id, req.body, function(err, restaurant) {
    res.redirect(`/restaurants/${restaurant._id}`)
  })
}
      
function createReview(req, res) {
  req.body.rating = parseInt(req.body.rating)
  Review.create(req.body)
    .then(review => {
        
        res.redirect(`/restaurants/${req.params.id}`)
    })
    .catch(err => console.log(err))
}


function deleteReview(req, res) {
  Review.findByIdAndDelete(req.params.id, function(err, review) {
    console.log('testestsetstsetst')
    res.redirect(`/restaurants/${review.restaurantId}`)

  })
}

const config = {
  headers: {
      Authorization: process.env.YELP_API_KEY
  }
} 
    
async function getRestaurantDetailsFromYelp(restaurantId){
  const url = `https://api.yelp.com/v3/businesses/${restaurantId}`
    return await axios.get(url, config)
        .then(res => res)
        .catch(error => console.log(error))
}  

export {
      index,
      newRestaurant as new,
      create,
      deleteRestaurant as delete,
      edit,
      update,
      createReview,
      show,
      deleteReview
    }
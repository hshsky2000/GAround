import { Restaurant } from '../models/restaurant.js'
import axios from 'axios'

function index(req, res) {
    Restaurant.find({})
    .then(restaurants => {
        getRestaurantsFromYelp()
            .then(result => {
                res.render('index', {
                    restaurants: result.data.businesses,
                    title: "!Restaurants"
                })
            })
            .catch(error => console.log(error))
    })
    .catch(err => {
      console.log(err)
      res.redirect("/restaurants")
    })
}

const config = {
    headers: {
        Authorization: process.env.YELP_API_KEY
    }
}

const url = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=509 7th st Washington DC&radius=2000'

async function getRestaurantsFromYelp(){
    return await axios.get(url, config)
        .then(res => res)
        .catch(error => console.log(error))
}

  export{
      index,
      getRestaurantsFromYelp,
  }
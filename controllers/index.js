import { Restaurant } from '../models/restaurant.js'

function index(req, res) {
    Restaurant.find({})
    .then(restaurants => {
      res.render('index', {
        restaurants,
        title: "!Restaurants"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/restaurants")
    })
  }

  async function fetchUser() {
    const response = await fetch('https://api.yelp.com/v3/businesses/search?term=restaurants&location=509 7th st Washington DC&radius=2000')
    const data = await response.json()
    console.log(data)
}

fetchUser()

  export{
      index,
      fetchUser,
  }
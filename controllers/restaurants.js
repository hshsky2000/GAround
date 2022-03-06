import { Restaurant } from '../models/restaurant.js'

function index(req, res) {
    Restaurant.find({})
    .then(restaurants => {
      res.render('restaurants/index', {
        restaurants,
        title: "Restaurant Reviews"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/restaurants")
    })
  }

  export {
      index,
  }
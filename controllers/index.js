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

  export{
      index,
  }
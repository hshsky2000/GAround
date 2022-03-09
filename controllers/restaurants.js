import { Restaurant } from '../models/restaurant.js'


function index(req, res) {
    Restaurant.find({})
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
      if (err) return res.redirect('/restaurants/new');
      res.redirect(`/restaurants/${restaurant._id}`);
    });}
 
    function show(req, res) {
        Restaurant.findById(req.params.id)
        .populate('review')
        .exec(function(error, restaurant) {
          Restaurant.find({_id: {$nin: restaurant.review}}, function(error, review) {
            res.render('restaurants/show', {
              title: 'Restaurant Detail', 
              restaurant,
              review,
              error
            })
          })
        })
      }

      function deleteRestaurant(req, res) {
        Restaurant.findByIdAndDelete(req.params.id, function(err, restaurant) {
          res.redirect('/restaurants')
        })
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
        Restaurant.findById(req.params.id, function(err, restaurant) {
          restaurant.review.push(req.body)
          restaurant.save(function(err) {
            res.redirect(`/restaurants/${restaurant._id}`)
          })
        })
      }

  export {
      index,
      newRestaurant as new,
      create,
      deleteRestaurant as delete,
      edit,
      update,
      createReview,
      show

  }
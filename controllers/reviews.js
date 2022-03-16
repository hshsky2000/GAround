import { Review } from "../models/review.js";

function deleteReview(req, res) {
    console.log(req.params.id, 'helloooooo')
    Review.findByIdAndDelete(req.params.id)
    .then(deletedReview => {
        res.redirect(`/restaurants/${req.body.restaurant_id}`)
        })
        .catch(err => console.log(err))
}

export {
    deleteReview as delete
}
import mongoose from 'mongoose'

const Schema = mongoose.Schema

// const profileSchema = new mongoose.Schema({
//     name: String,
//     avatar: String,
//   }, {
//     timestamps: true
//   })

const reviewSchema = new Schema({
        content: String,
        rating: {type: Number, min: 1, max: 5, default: 5},
        restaurantId: String, 
        owner: {
          type: mongoose.Schema.Types.ObjectId, "ref": "Profile"
        }
})

const Review = mongoose.model('Review', reviewSchema)

export {
    Review
}
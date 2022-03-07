import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
  }, {
    timestamps: true
  })

const restaurantSchema = new Schema({
    name: String,
    address: String,
    phone: Number,
    review: [reviewSchema]
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export {
    Restaurant
}
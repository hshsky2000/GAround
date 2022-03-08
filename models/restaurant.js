import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
  }, {
    timestamps: true
  })

const restaurantSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    address: String,
    phone: Number,
    menu: {
      type: String,
      required: true
    },
    review: [reviewSchema]
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export {
    Restaurant
}
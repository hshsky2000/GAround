import mongoose from 'mongoose'

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: String,
    address: String,
    phone: Number,
    review: {
        type: Schema.Types.ObjectId, 'ref': "Profile"
    }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export {
    Restaurant
}
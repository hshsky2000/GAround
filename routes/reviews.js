import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'

const router = Router()

router.delete("/:id", reviewsCtrl.delete)

export {
    router
}

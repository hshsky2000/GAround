import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.delete("/:id",isLoggedIn, reviewsCtrl.delete)

export {
    router
}

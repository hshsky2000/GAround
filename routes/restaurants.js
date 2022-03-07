import { Router } from 'express'
import * as restaurantsCtrl from '../controllers/restaurants.js'


const router = Router()

router.get('/', restaurantsCtrl.index)
router.get('/new', restaurantsCtrl.new)
router.get('/:id', restaurantsCtrl.show)
router.post('/', restaurantsCtrl.create)
router.delete("/:id", restaurantsCtrl.delete)
router.get("/:id/edit", restaurantsCtrl.edit)
router.put("/:id", restaurantsCtrl.update)
router.post('/:id/reviews', restaurantsCtrl.createReview)


export {
    router
}

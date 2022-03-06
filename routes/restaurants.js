import { Router } from 'express'
import * as restaurantsCtrl from '../controllers/restaurants.js'

const router = Router()

router.get('/', restaurantsCtrl.index)

export {
    router
}

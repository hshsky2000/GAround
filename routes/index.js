import { Router } from 'express'
import * as restaurantsCtrl from '../controllers/index.js'

const router = Router()


router.get('/', restaurantsCtrl.index)


export {
  router
}

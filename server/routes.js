import express from 'express'
import { addlink, getLink } from './controller.js'

const router = express.Router()

router.post('/addlink', addlink)
router.get('/getlink', getLink)

export default router

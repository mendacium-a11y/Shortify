import express from 'express'
import { addlink, getlink } from './controller.js'

const router = express.Router()

router.post('/addlink', addlink)
router.get('getlink', getlink)

export default router

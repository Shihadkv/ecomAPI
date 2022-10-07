import express from "express"
const router = express.Router()
import {doLogin, register} from '../controllers/AuthController.js'


//REGISTER

router.post('/regiester',register)
router.post("/login",doLogin)



export default router;

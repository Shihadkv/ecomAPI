import express from "express"
const router = express.Router()


router.get("/addTocart", addingCart)
router.put("/removeCart",removeCart)


export default cart
import { Router } from "express";

const router = Router()

router.get('/',(req,res)=>{
    res.send("Это Dashboard")
})

export default router
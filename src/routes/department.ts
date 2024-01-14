import { Router } from "express";

const router = Router()

router.get('/',(req, res)=>{
    res.send("Это Home страница").status(200)
})

export default router
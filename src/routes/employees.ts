import { Router } from "express";

const router = Router()

router.get('/',(req, res)=>{
    return res.send()
})

router.post('/',(req, res)=>{
    const newEmpoloyee = req.body()
})

export default router
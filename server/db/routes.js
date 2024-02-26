import express from "express";

const router = express.Router();

router.get('/addlink',(req,res) => {
    res.send('hi');
})

export default router
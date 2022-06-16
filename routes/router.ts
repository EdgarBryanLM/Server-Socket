import {Router,Request,Response} from 'express';

 const router=Router();


router.get('/mensajes',(red:Request,res:Response)=>{
    res.json({
    ok:true,
    mensaje:'Todo bien todo fine'
    });

});


router.post('/mensajes',(req:Request,res:Response)=>{
    const cuerpo=req.body.cuerpo;
    const de=req.body.de;

    res.json({
    ok:true,
    mensaje: cuerpo+de
    });

});



router.post('/mensajes/:id',(req:Request,res:Response)=>{
    const cuerpo=req.body.cuerpo;
    const de=req.body.de;
    const id=req.params.id;
    res.json({
    ok:true,
    mensaje: cuerpo+de+id
    });

});


export default router;
import {Router,Request,Response} from 'express';
import Server from '../clases/server';

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
    const server=Server.intance;
    const playload={
        de,
        cuerpo
    };
    server.io.emit('mensaje-nuevo',playload);
    res.json({
    ok:true,
    mensaje: cuerpo+de
    });

});



router.post('/mensajes/:id',(req:Request,res:Response)=>{
    const cuerpo=req.body.cuerpo;
    const de=req.body.de;
    const id=req.params.id;
    const playload={
        de,
        cuerpo
    };
    const server=Server.intance;
    server.io.in(id).emit('mensaje-privado',playload);
    res.json({
    ok:true,
    mensaje: cuerpo+de+id
    });

});


export default router;
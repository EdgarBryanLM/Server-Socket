import { Socket } from "socket.io";
import SocketIO from 'socket.io';



export const desconectarCliente=(cliente:Socket)=>{

    cliente.on('disconnect',()=>{
        console.log('Cliente desconectado');
        
    });
};

//Escuchar mensajes
export const mensaje=(cliente:Socket,io:SocketIO.Server)=>{
    cliente.on('mensaje',(playload:{de:string,cuerpo:string})=>{
    console.log(playload);


    io.emit('mensaje-nuevo',playload);
    })
};


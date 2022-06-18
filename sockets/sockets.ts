import { Socket } from "socket.io";
import SocketIO from 'socket.io';
import {  Usuario } from '../clases/usuario';
import { UsuarioLista } from "../clases/usuarios-lista";


export const UsuariosConectados= new UsuarioLista;

export const ConnectarCliente=(cliente:Socket)=>{
    const usuario= new Usuario(cliente.id);
    UsuariosConectados.agregar(usuario);
   
};


export const desconectarCliente=(cliente:Socket,io:SocketIO.Server)=>{
    
    cliente.on('disconnect',()=>{
        console.log('Cliente desconectado');
        UsuariosConectados.DeleteUsuario(cliente.id);
        io.emit('usuarios-activos',UsuariosConectados.GetAll());
    });
};

//Escuchar mensajes 
export const mensaje=(cliente:Socket,io:SocketIO.Server)=>{
    cliente.on('mensaje',(playload:{de:string,cuerpo:string})=>{
    console.log(playload);
    io.emit('mensaje-nuevo',playload);
    })
};

export const usuarios=(cliente:Socket,io:SocketIO.Server)=>{
    cliente.on('configurar-usuario',(playload:{nombre:string},callback:any)=>{
        UsuariosConectados.updateNombre(cliente.id,playload.nombre);
   

        setTimeout(() => {
            io.emit('usuarios-activos',UsuariosConectados.GetAll());

        }, 1000);

    console.log(playload);
    callback({
        ok:true,
        mensaje:'Usuario configurado'
    })
  //  io.emit('mensaje-nuevo',playload);
    })
};

export const obtenerUusuarios=(cliente:Socket,io:SocketIO.Server)=>{
    cliente.on('obtener-usuarios',()=>{
        io.to(cliente.id).emit('usuarios-activos',UsuariosConectados.GetAll());

    })
};
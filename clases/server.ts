import express from 'express';
import { SERVER_PORT } from '../global/enviroment';
import  socketIO  from 'socket.io';
import http from 'http';
import * as socket from '../sockets/sockets';

export default class Server{

    private static instance:Server;

    public app:express.Application;

    public port:number;

    public io!:socketIO.Server;

    private hhtServer:http.Server;


    /**
     *
     */
   private constructor() {
        this.app=express();
        this.port=SERVER_PORT;
        this.hhtServer= new http.Server(this.app);
        this.io = new socketIO.Server( this.hhtServer, { cors: { origin: true, credentials: true } } );
        this.EscucharSockets();
    }

    public static get intance(){
        return this.instance || (this.instance= new this());
    }


    EscucharSockets(){
    console.log("Escuchando conexiones");
    this.io.on('connection',cliente=>{
    console.log('Nuevo cliente');


    //Desconectar
    socket.desconectarCliente(cliente);

    //Mensajes
    socket.mensaje(cliente,this.io);

    
    });
    
    }

    start(callback:any){
        this.hhtServer.listen(this.port,callback);
    }

}
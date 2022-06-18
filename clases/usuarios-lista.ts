import { Usuario } from './usuario';
import { usuarios } from '../sockets/sockets';
export class UsuarioLista{
    private lista:Usuario[]=[];

    /**
     *
     */
    constructor() {
        
        
    }

    //agregar usuario
    public agregar(usuario:Usuario){
        this.lista.push(usuario);
        console.log(this.lista);
        
        return usuario;
    }

    public updateNombre(id:string,nuevoNombre:string){
    
    this.lista.forEach(usu => {
        if(usu.id===id){
            usu.nombre=nuevoNombre;
            return;
        }

    });

    console.log(this.lista);
    }


    public GetAll(){
        return this.lista.filter(usua=>usua.nombre!=='sin nombre');
        
    }


    public GetUsuario(id:string){
        this.lista.forEach(usu => {
            if(usu.id===id){
                return usu;
            }
        });
    }


    public GetSala(sala:string){
    return this.lista.filter(usu=>{
        usu.sala===sala;
    });
    }

    public DeleteUsuario(id:string){
    const temUsuario= this.GetUsuario(id);
    this.lista=this.lista.filter(usu=>{
     usu.id!==id;
    });
    console.log(this.lista);
    
    }

}
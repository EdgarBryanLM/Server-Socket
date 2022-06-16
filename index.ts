import Server from "./clases/server";
import { SERVER_PORT } from "./global/enviroment";
import router from "./routes/router";
import bodyParser from "body-parser";
import cors from 'cors';
 
 const server = new Server();


 //BodyParser
 server.app.use(bodyParser.urlencoded({extended:true}));
 server.app.use(bodyParser.json());
 
 //Rutas de servicios
 server.app.use('/',router);

 //CORS
 server.app.use(cors({origin:true,credentials:true}));

 server.start(()=>{
    console.log("El servidor esta corriendo en el puerto",SERVER_PORT);
    

 }); 
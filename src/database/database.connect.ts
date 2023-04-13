import mysql from 'mysql2';
import { config } from '../config/dbs.config'; 


class ConnectDatabase{

    private _objConexion;
    constructor (){

        this._objConexion = mysql.createConnection({

          host: config.host, 
          database: config.dbs, 
          user: config.user,
          password: config.password


        });

        this.verficaConexion();
    }


    verficaConexion(){

        this._objConexion.connect((err)=>{

            if(err){

                console.log(`ERROR DE CONEXION A LA BASE DE DATOS --> ${err}`);
                return;

            }
            console.log("CONEXION A LA BASE DE DATOS EXITOSA");

        });

    }

    get getObjetoConexion(){

        return this._objConexion;

    }
    cerrarConexion(){

        this._objConexion.end((err)=>{

            if(err){

                console.log(`ERROR AL CERRAR LA CONEXION ${err}`);
                return;

            }

            console.log("CONEXION CERRADA CON EXITO");

        });

    }

}

export default new ConnectDatabase;
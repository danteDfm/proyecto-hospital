import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

//init
dotenv.config(); 
const app = express();


//settings 
app.set('port', process.env.PORT);

//middlewares
app.use(cors());
app.use(morgan('dev'));

//routes 
app.use((req,res)=>{

    res.send("hola mundo");
});

app.listen(app.get('port'), ()=>{

    console.log("SERVER EN EL PUERTO "+app.get('port'));

});
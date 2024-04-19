import dotenv from 'dotenv'
dotenv.config({
    path : './../.env', 
})
import {app} from 'app.js';
const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server started on ${process.env.HOST}:${port}.`)
})


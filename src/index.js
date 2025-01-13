const express=require('express');

const ServerConfig=require('./config/serverConfig')



const app=express();




app.listen(ServerConfig.PORT,()=>{
    console.log(`Searver  started at port ${ServerConfig.PORT} `);

    
    
})
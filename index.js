/*Add remote origin*/

const express = require("express");

const port = 8000;

const app = express();

const homeRouter = require("./routers/index");

app.use("/", homeRouter);

app.listen(port, function(err){
    if(err){
        console.log("Error while starting the server");
        console.log(err);
    }
    else{
        console.log("Server started and listening at port ",port);
    }
});
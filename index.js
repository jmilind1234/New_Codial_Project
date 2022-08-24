/*Add remote origin*/
const path = require("path");

const expressLayouts = require("express-ejs-layouts");

const express = require("express");

const port = 5000;

const app = express();

const homeRouter = require("./routers/index");

app.use(expressLayouts);

app.use("/", homeRouter);

app.set("view engine","ejs");

app.use(express.static('./assets'));

app.set("views", path.join(__dirname,"/views"));

app.listen(port, function(err){
    if(err){
        console.log("Error while starting the server");
        console.log(err);
    }
    else{
        console.log("Server started and listening at port ",port);
    }
});
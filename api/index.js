const Express = require("express");
const app = Express();
const mongoose = require("mongoose");
var routes = require('./routes/routes.js');
const cors = require("cors");

app.use(cors(
    {
        origin : "http://localhost:4200"
    }
));

app.listen(9002, function check(error)
{
    if(error)
    console.log("Error.......!!!");
else
console.log("Started..........!!!");

});

// mongoose.connect("mongodb://localhost:27017/Mallika",{useNewUrlParser:true, useUnifiedTopology:true},

// function checDb(error)
// {
//     if(error){
//         console.log("error connecting to db");
//     }
//     else{
//         console.log("connected to db");
//     }
// });
mongoose.connect('mongodb://localhost:27017/Mallika')
    .then(() => {
        console.log('Connected to MongoDB');
        // Your code here
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
app.use(cors());
    app.use(Express.json());
    app.use(routes);




















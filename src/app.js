const express = require('express');
const hbs = require('hbs');
const path = require('path');
const lawyerRouter = require('./routes/lawyersRoute');
const auth = require("./routes/authRoutes");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require("morgan");
const connect = require('./db/db');


//configure env
dotenv.config()

connect();


const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../views')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
 
app.use(express.static(publicDirectoryPath));

const port = process.env.Backend_PORT || 7000;

//middelwares
var corsOptions = {
    origin: "http://localhost:5173", // change to the address of your local server if needed
    optionsSuccessStatus: 200,
    AccessControlAllowOrigin: "*",
// some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// var corsOptions = {
//   origin: '*',
//   methods: "GET,POST, PUT, DELETE", credentials: true,
//   // optionsSuccessStatus: 200,
//   AccessControlAllowOrigin: "*"
// }
app.use(cors(corsOptions));


app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", auth);
app.use("/api/v1",lawyerRouter);

//REST api
app.get('/', (req,res)=>{
  res.send("This is for a testing");
});

app.listen(port, ()=>{ 
    console.log(`server running at port ${port}`);
})

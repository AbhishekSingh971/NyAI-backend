const express = require('express');
const hbs = require('hbs');
const path = require('path');
const lawyerRouter = require('./routes/lawyersRoute');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

//configure env
dotenv.config()

const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../views')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
 
app.use(express.static(publicDirectoryPath));

const port = process.env.PORT || 3000

//middelwares
var corsOptions = {
    origin: "http://localhost:5173", // change to the address of your local server if needed
    optionsSuccessStatus: 200,
    AccessControlAllowOrigin: "*",
// some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/v1",lawyerRouter);

app.listen(port, ()=>{ 
    console.log(`server running at port ${port}`);
})

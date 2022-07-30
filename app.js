import cors from "cors";
import express from "express";
import bodyparser from "body-parser";
import errorHandler from "./middlewares/error.js";

//routes import

import cardDataSubmitRoute from './routes/submitData.js'



//cors setup
const corsOptions ={
    origin:'https://soft-lily-e3c8c5.netlify.app/',
    credentials:false,
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT, POST",
    // access-control-allow-credentials:true,
    optionSuccessStatus:200,
}

//express setup
const app = express()
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))




app.use(errorHandler);


//api
app.use('/media/img/',express.static('media/img'));
app.use('/cardInfo', cardDataSubmitRoute)

export default app
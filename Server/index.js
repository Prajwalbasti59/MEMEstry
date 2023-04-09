import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoute'
import UserRoute from './Routes/UserRoute'
import PostRoute from './Routes/PostRoute'

dotenv.config()

const app = express();
app.use(bodyParser.json({limit: '30mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb',extended: true}));
mongoose.connect(
    process.env.Mongo_db,
    {useNewUrlParser :true, useUnifiedTopology: true}).
then(() => app.listen(process.env.PORT,() => console.log(`listening at ${process.env.PORT}`))).catch((error) => console.log(error));

app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/post',PostRoute)


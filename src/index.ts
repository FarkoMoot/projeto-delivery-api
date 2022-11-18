import * as dotenv from 'dotenv'
dotenv.config()

import path from 'node:path'

import express from 'express'
import mongoose from 'mongoose'

const port = process.env.PORT || 3000
const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASS

const app = express()

import { router } from './router'

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@clusterfutebol.xfuowcs.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
  app.use(express.json())
  app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')))
    app.use(router)
    app.listen(port, ()=> {
      console.log(`Server On:localhost:${port}`);
    });
  }).catch((error)=>{
    console.log('entrou aq', error);
  })

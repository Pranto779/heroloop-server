import express from 'express'
import cors from 'cors'
import 'dotenv/config'
const app=express()
const PORT=process.env.PORT || 8000

// middlewere
app.use(express.json())
app.use(cors())

import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URI);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

connectToMongoDB()
app.get('/',(req,res)=>{
    res.send('Hi node')
})

app.listen(PORT,()=>{
    console.log('server is running port:',PORT);
    
})
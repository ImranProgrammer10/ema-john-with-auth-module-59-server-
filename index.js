const express=require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const cors=require('cors');
const app=express();
const port=process.env.PORT||5000;

// pass:  NJAgui6rsVDBc9WI

// middleware

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xq8ej.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

console.log(uri)

async function run(){

    try{
        await client.connect();
        console.log('database connected Successfully')
    }
    finally{

    }

}

run().catch(console.dir);





// GET API 

app.get('/',(req,res)=>{
    res.send('Emajon server is running')
});


 app.listen(port,()=>{
     console.log('server running at port',port)
 })

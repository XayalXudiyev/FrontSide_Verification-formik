import express from 'express'
import cors from 'cors'
import Connect from './database/conn.js'

const app = express()

app.use(express.json())
app.use(cors())
Connect()
const port = 5000;

app.get('/', (req, res) => {
    res.status(201).json('yess')
})

app.listen(port , ()=>{
    console.log( `Server Connected to http://localhost:${port}`);
})
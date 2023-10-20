import mongoose, { connect } from "mongoose";

async function Connect() {
    const uri = 'mongodb://lkjhgfd'
   const db = await mongoose.connect(uri)
    console.log('connect db');
    return db 
}

export default Connect
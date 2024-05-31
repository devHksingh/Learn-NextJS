import mongoose from "mongoose";


export async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log('MongoDB is connected');
            
        })

        connection.on('error',(err)=>{
            console.log('MongoDB connection error,kindly make sure DB is up and running',err);
            process.exit(1)
            
        })

    } catch (error) {
        console.log('Something went wrong in connecting to DB');
        console.log(error);
        
        
    }
}
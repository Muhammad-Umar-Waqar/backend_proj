// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import connectDB from './db/index.js';


dotenv.config()

connectDB({path: './env'});


// const app = express();


// ;( async = async ()=>{
//     try {
//              await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//                 app.on("error", (error)=>{
//                     console.log("ERROR ", error)
//                     throw error
//                 })
//                 app.listen(process.env.PORT, ()=>{
//                     console.log(`App is listening on http:localhost/${process.env.PORT}`);
//                 })
//             } catch (error) {
//                 console.error(Error.message)
//                 throw error
//             }
// })
// ()
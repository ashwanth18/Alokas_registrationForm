// import mongoose from 'mongoose'

// const MONGODB_URI = process.env.DB_URL

// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   )
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// // let cached = global.mongoose

// // if (!cached) {
// //   cached = global.mongoose = { conn: null, promise: null }
// // }

//  function dbConnect() {
// //   if (cached.conn) {
// //     return cached.conn
// //   }

// //   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     }

//     // cached.promise =
//      mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose
//     })
// //   }
// //   cached.conn = await cached.promise
// //   return cached.conn
// // }
// }
// export default dbConnect

/* This is a database connection function*/
import mongoose from 'mongoose'

const connection = {} /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return
  }

  /* connecting to our database */
  const db = await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect

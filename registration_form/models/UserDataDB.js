import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserDataSchema = new mongoose.Schema({
 subjects: [],
 userData: [],
 year: String
  
})

export default mongoose.models.UserDataDB || mongoose.model('UserDataDB', UserDataSchema)
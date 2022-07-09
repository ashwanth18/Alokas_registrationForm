
import UserDataDB from "../../models/UserDataDB"
import dbConnect from '../../lib/mongodb'
export default async function handlerData(req, res) {
    const body = req.body.subjects
    const userData = req.body.userData
    const userYear = req.body.year

await dbConnect()

try {

  const UserDataToDB = await UserDataDB.create({
   "subjects": body ,
   "userData" : userData,
   "year" : userYear
}) /* create a new model in the database */
  res.status(201).json({ success: true, data: UserDataToDB })
} catch (error) {
  res.status(400).json({ success: false })
  // console.log("what is the errro",error)
}
}
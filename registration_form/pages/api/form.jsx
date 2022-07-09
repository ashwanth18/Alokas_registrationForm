import UserDataDB from "../../models/UserDataDB"
import dbConnect from '../../lib/mongodb'


export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body.subjects
  const userData = req.body.userData
  const userYear = req.body.year
// console.log("where is the data?", req.body)
  // const subjectList = body.map(obj => obj.subj )
  // console.log(userData)
  // console.log(body)
  // console.log(subjectList)
// const email = req.body.userdata.email

  // console.log(process.env)
let nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GOOGLE_APP_USER,
      pass: process.env.GOOGLE_APP_PASS,
    },
    secure: true,
});

const mailData = {
    from: 'alokaseducare@gmail.com',
    to: `${userData.email}`, 
    subject: `Message From ALoKAS  `,
    text: `
    Dear ${userData.parentName},
    Please bring this email as a proof of registration to claim discount on registration fees.
    Thank you for registering with ALoKAS, we will contact you soon.`,
   }
   const mailDataAdmin = {
    from: 'alokaseducare@gmail.com',
    to: `alokaseducare@gmail.com`,
    subject: `Message From ALoKAS: submission form  `,
    text: `
    student name : ${userData.studentName} , student year : ${userYear} , contact number : ${userData.contact}
    `,
   }
   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log("what is this error",err)
    else
      console.log("no error while sending",info)
  })
  transporter.sendMail(mailDataAdmin, function (err, info) {
    if(err)
      console.log("what is this error",err)
    else
      console.log("no error while receiving",info)
  })
  // Optional logging to see the responses
  // in the command line where next.js app is running.
  // console.log('body: ', subjectList) 


  // Guard clause checks for first and last name,
  // and returns early if they are not found
  // if (!body.parentName || !body.studentName) {
  //   // Sends a HTTP bad request error code
  //   return res.status(400).json({ data: 'First or last name not found' })
  // }
  try {
    await dbConnect().catch(err => console.log(err))

    const UserDataToDB = await UserDataDB.create({
     "subjects": body ,
     "userData" : userData,
     "year" : userYear
  }).catch(err => console.log(err)) /* create a new model in the database */
    res.status(201).json({ success: true, data: UserDataToDB })
  } catch (error) {
    res.status(400).json({ success: false })
    // console.log("what is the errro",error)
  }


  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `checking ${userData.parentName} ${userData}` })
}


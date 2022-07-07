


export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body.subjects
  const userData = req.body.userData
  const userYear = req.body.year

  const subjectList = body.map(obj => obj.subj )
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
      user: "ashwanth18@gmail.com",
      pass: "yohfwccnxgsomasd",
    },
    secure: true,
});

const mailData = {
    from: 'ashwanth18@gmail.com',
    to: `${userData.email}`,
    subject: `Message From ALoKAS  `,
    text: `
    Dear ${userData.parentName},
    Please bring this email as a proof of registration to claim discount on registration fees.
    Thank you for registering with ALoKAS, we will contact you soon.`,
   }
   const mailDataAdmin = {
    from: 'ashwanth18@gmail.com',
    to: `ashwanth18@gmail.com`,
    subject: `Message From ALoKAS: submission form  `,
    text: `
    student name : ${userData.studentName} , student year : ${userYear} , contact number : ${userData.contact}
    `,
   }
   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log("what is this error",err)
    else
      console.log("no error i guess",info)
  })
  transporter.sendMail(mailDataAdmin, function (err, info) {
    if(err)
      console.log("what is this error",err)
    else
      console.log("no error i guess",info)
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

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.parentName} ${body}` })
}
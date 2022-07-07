import excuteQuery from '../../lib/db';
export default async (req, res) => {

const userData = req.body.userdata
const subject = req.body.subjects
const Year = req.body.userYear 
const subjectList = subject.map(obj => obj.subj )


// console.log(process.env)
let nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "ashwanth18@gmail.com",
      pass: "Pudding@13",
    },
    secure: true,
});

const mailData = {
    from: 'ashwanth18@gmail.com',
    to: userData.email,
    subject: `Message From `,
    text: "req.body.message",
    html: <div>req.body.message</div>
   }
   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
    try {
        console.log("req nom", req.body)
      const result = await excuteQuery({
      
            query: 'INSERT INTO users ( studentName, studentIC, parentName, school, contact, email, year, subjects) VALUES(?, ?, ?, ?, ?, ?, ?, ?)',
        values: [ userData.studentName, userData.studentIC, userData.parentName, userData.school, userData.contact, userData.email, Year, subjectList],
        
          
      });
    //   console.log( "ttt",result );
  } catch ( error ) {
    //   console.log( error );
  }
  res.status(200)
  
  };

// import UserDataDB from "../../models/UserDataDB"
// import dbConnect from '../../lib/mongodb'
import app from '../../firebase/clientApp';
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, Timestamp  } from 'firebase/firestore';

export default async function handlerData(req, res) {
  const combinedSubjects = req.body.combinedSubjects
    const tuitionList = req.body.tuitionSubjects
    const artList = req.body.artsSubjects
    const userData = req.body.userData
const id = req.body.userData['studentIC']
const parentName = req.body.userData['parentName']
const studentName = req.body.userData['studentName']
const email = req.body.userData['email']
const contact = req.body.userData['contact']
const school = req.body.userData['school']
const grade = req.body.userGrade

    const db = getFirestore(app);


console.log('combined',combinedSubjects);
    // console.log('userJson',userJson);

if(req.method === 'POST'){

  try{

    const userJson = {
      email: email,
      studentName: studentName,
      parentName: parentName,
      school : school,
      contact: contact,
      ic : id,
      tuitionSubjects : tuitionList,
      artsSubjects : artList,
      subjects : combinedSubjects,
      createdAt : Date.now(),
      studentGrade : grade,

    };
    // console.log('userJson',userJson);
      //  await db.collection('registration').doc(id).add(userJson)
      await setDoc(doc(db, "registration", id), userJson);

    // await addDoc(collection(db, "registration"), {
    //   email: email,
    //   studentName: studentName,
    //   parentName: parentName,
    //   school : school,
    //   contact: contact,
    //   ic : id,
    //   tuitionSubjects : tuitionList,
    //   artsSubjects : artList,
    //   subjects : combinedSubjects
    // });
      res.status(201).json({ success: true, })

  } catch (error) {
console.log(error)
res.status(400).json({ success: false })
  }
}

// try {

//   const UserDataToDB = await UserDataDB.create({
//    "subjects": body ,
//    "userData" : userData,
//    "year" : userYear
// }) /* create a new model in the database */
//   res.status(201).json({ success: true, data: UserDataToDB })
// } catch (error) {
//   res.status(400).json({ success: false })
//   // console.log("what is the errro",error)
// }
}
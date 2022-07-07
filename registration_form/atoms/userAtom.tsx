import { atom } from "recoil";

export const userAtom = atom({
key: "userAtom" ,
default :{
grade : "",
subjects: [],
totalPrice : [],
userData: []


}
})
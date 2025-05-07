import Navbar from "./components/Navbar"
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import {collection} from "firebase/firestore"

const App = () => {
  const [contacts,setContacts]=useState([])

  // performng network call
  useEffect (() => {
    const getContacts =async()=>{
      try {
        const contactsCollection = collection(db ,"contacts")
      } catch (error) {
        setContacts("")

      }
    }
    getContacts()
  },[])

  return (
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-2">
      <div className="flex relative items-center flex-grow ">
        <FiSearch className="text text-3xl text-white absolute ml-1" />
        <input type="text "
          className="bg-transparent border-white rounded-md border h-10 flex-grow pl-9 text-white" />
          
      </div>
      <div >
        <AiFillPlusCircle className="text-5xl cursor-pointer text-white" />
      </div>
      </div>
    </div>
  )
}

export default App;

// fnction(){
//   x=33
//   console.log(x)
//   var = x
// }
// dosomthing()

// let a = 5
// let a = 10
// console.log(a)
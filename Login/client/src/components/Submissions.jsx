import React from 'react'
import { useState } from 'react'
// import './Submissions.css'



function Submissions() {


  const [inputarr, setInputarr] = useState([])

  const [inputdata, SetInputdata] = useState({

    name: "",
    rollNo: ""
  })


  function changehandle(e) {

    SetInputdata({ ...inputdata, [e.target.name]: e.target.value }

    )

  }
  let { name, rollNo } = inputdata;
  function changhandle() {
    setInputarr([...inputarr, { name, rollNo }])
    console.log(inputarr)
    console.log(inputdata)
    SetInputdata({ name: "", rollNo: "" })


  }

  return (

    <div className='app'>
      <input type="text" name='name' value={inputdata.name} onChange={changehandle} placeholder='Enter  name' /><br /><br />
      <input type="text" name='rollNo' value={inputdata.rollNo} onChange={changehandle} placeholder='Roll No' /><br /><br />
      <button onClick={changhandle}>Add User</button><br /><br />
      {/* <button onClick={changhandle2}>check array</button><br /><br /> */}


      <table border={1} width="40%" cellPadding={10}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Roll</td>
          </tr>
          {/* {
            inputarr.map{  
              (info, ind) => {
                return (
                  <tr>
                    <td>{info.name}</td>
                    <td>{info.rollNo}</td>
                  </tr>
                )

              }
            }
          } */}


        </tbody>
      </table>
    </div>
  )
}

export default Submissions

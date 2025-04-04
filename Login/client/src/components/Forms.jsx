import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/esm/Table'
import 'bootstrap/dist/css/bootstrap.min.css'

function Forms() {
  const [employees, setEmployees] = useState([])
  useEffect(() => {

    axios.get("http://localhost:3001/getEmployees")
      .then(employees => setEmployees(employees.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className=" card m-4 ">
      {/* <div className='w-100 vh-100 d-flex justify-content-center align-items-center'> */}
      <div className='w-50'>
        <Table className='table'>
          <thead>
            <tr>
              <th> Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((employee) => {
                return (
               
                  <tr>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.password}</td>
                  </tr>
                )
              }
              )
            }
          </tbody>
        </Table>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Forms

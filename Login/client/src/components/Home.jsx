import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table'
import axios from 'axios'

function Home() {
    const [employees, setEmployees] = useState([])
  useEffect(() => {

    axios.get("http://localhost:3001/getEmployees")
      .then(employees => setEmployees(employees.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div className="container-fluid mb-5">
        <h4 className="page-title py-2">Dashboard</h4>
        <Form>
          <div className=" card m-0">
            <div className="row p-3">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label className="col-form-label">First Name</label>
                  <input className="Form-control" type="text" name="firstName" required placeholder="" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label className="col-form-label">Last Name</label>
                  <input className="Form-control" type="text" name="lastName" required placeholder="" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label className="col-form-label">Email</label>
                  <input className="Form-control" type="text" name="Email" required placeholder="" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label className="col-form-label"> User Role</label>
                  <input className="Form-control" type="text" name="user role" required placeholder=" " />
                </div>
              </div>
            </div>
            <div className="mx-3 mb-3">
              <Button type="button" className="btn btn-primary float-right">Submit</Button>
            </div>
            
          </div>
        </Form >
      </div >
      <hr />

      {/* table */}
      <div className=" card m-0">
        {/* <div className='w-100 vh-50 d-flex justify-content-center align-items-center'>
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
                employees.map(employee => {
                  return <tr>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.password}</td>
                  </tr>
                })
              }
            </tbody>
          </Table>
        </div> */}

        <Table className=''>
          <thead className='text-center'>
            <tr>
              <th>S.No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>User Role</th>
              <th
              // className="no-sort text-center"
              // style={{ width: "9px" }}
              >
                <i className="bi bi-pencil-square text-primary" aria-hidden="true"
                  data-toggle="tooltip"
                  title="Edit" ></i>
              </th>
              <th>
                <i className="bi bi-trash text-danger" aria-hidden="true"
                  data-toggle="tooltip"
                  title="Edit" ></i>
              </th>

            </tr>
          </thead>
          <tbody className='text-center'>
            <tr>
              <td>1</td>
              <td>Rose</td>
              <td>max</td>
              <td>Rose@gmail.com</td>
              <td>Admin</td>
              <td>
                <i className="bi bi-pencil-square text-primary" aria-hidden="true"
                  data-toggle="tooltip"
                  title="Edit" ></i>
              </td>
              <td>
                <i className="bi bi-trash text-danger" aria-hidden="true"
                  data-toggle="tooltip"
                  title="Edit" ></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>jonny</td>
              <td>mac</td>
              <td>jonny@gmail.com</td>
              <td>Admin</td>
              <td>
                <i className="bi bi-pencil-square text-primary" aria-hidden="true"
                  data-toggle="tooltip"
                  title="Edit" ></i>
              </td>
              <td>
                <i className="bi bi-trash text-danger" aria-hidden="true"
                  data-toggle="tooltip"
                  title="Edit" ></i>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>lee</td>
              <td>math</td>
              <td>lee@gmail.com</td>
              <td>Admin</td>
              <td>
                <i className="bi bi-pencil-square text-primary" aria-hidden="true"
                  data-toggle="tooltip"
                  title="Edit" ></i>
              </td>
              <td>
                <i className="bi bi-trash text-danger" aria-hidden="true"
                  data-toggle="tooltip"
                  title="Edit" ></i>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>


    </>

  )
}

export default Home

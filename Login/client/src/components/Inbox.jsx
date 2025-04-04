/* eslint-disable react/jsx-key */
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/esm/Table';


function Inbox() {

  const [inputarr, setInputarr] = useState([])
  const [inputdata, SetInputdata] = useState({

    firstName: "",
    lastName: "",
    email: "",
    userRole: "",
  })


  function changehandle(e) {

    SetInputdata({ ...inputdata, [e.target.name]: e.target.value }

    )

  }
  let { firstName, lastName, email, userRole } = inputdata;
  function changhandle() {
    setInputarr([...inputarr, { firstName, lastName, email, userRole }])
    console.log(inputarr)
    console.log(inputdata)
    SetInputdata({ firstName: "", lastName: "", email: "", userRole: "" })
    


  }
  return (
    <div>
      <div className="container-fluid mb-5">
        <h4 className="page-title py-2">Dashboard</h4>
        <Form>
          <div className=" card m-0">
            <div className="row p-3">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label className="col-form-label">First Name</label>
                  <input className="Form-control" type="text" name="firstName" onChange={changehandle} required placeholder="" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label className="col-form-label">Last Name</label>
                  <input className="Form-control" type="text" name="lastName" onChange={changehandle} required placeholder="" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label className="col-form-label">Email</label>
                  <input className="Form-control" type="text" name="email" onChange={changehandle} required placeholder="" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label className="col-form-label"> User Role</label>
                  <input className="Form-control" type="text" name="userRole" onChange={changehandle} required placeholder=" " />
                </div>
              </div>
            </div>
            <div className="mx-3 mb-3">
              <Button type="button" onClick={changhandle} className="btn btn-primary float-right">Submit</Button>
            </div>
          </div>
        </Form >
      </div >
      <hr />
      <Table border={1} width="100%" cellPadding={10}>

        <tbody className='text-center'>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>User Role</th>
            <th> <i className="bi bi-pencil-square text-primary" aria-hidden="true"
              data-toggle="tooltip"
              title="Edit" ></i>
            </th>
            <th>
              <i className="bi bi-trash text-danger" aria-hidden="true"
                data-toggle="tooltip"
                title="Edit" ></i>
            </th>
          </tr >
          {
            inputarr.map(
              (info, ind) => {
                return (
                  <tr>
                    <td>{info.firstName}</td>
                    <td>{info.lastName}</td>
                    <td>{info.email}</td>
                    <td>{info.userRole}</td>
                    <td> <i className="bi bi-pencil-square text-primary" aria-hidden="true"
                      data-toggle="tooltip"
                      title="Edit" ></i>
                    </td>
                    <td><i className="bi bi-trash text-danger" aria-hidden="true"
                      data-toggle="tooltip"
                      title="Edit" ></i></td>
                  </tr>
                )
              }
            )
          }
        </tbody>

      </Table>
    </div>

  )
}

export default Inbox

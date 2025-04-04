const mongoose = require('mongoose')

const Employee2Schema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    userrole:String
})
const EmployeeModel = mongoose.model("employee2",Employee2Schema)


module.exports = EmployeeModel

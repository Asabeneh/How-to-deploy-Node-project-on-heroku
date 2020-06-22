const express = require('express')
const Router = express.Router()
const {
  showHome,
  showAbout,
  showContact,
  showStudents,
  showStudent,
  showAdd,
  showEdit,
  getAllStudents,
  getSingleStudent,
  addStudent,
  editStudent,
  deleteStudent
} = require('../controller/controllers')

// view or ui
Router.get('/', showHome)
Router.get('/about', showAbout)
Router.get('/contact', showContact)
Router.get('/about', showAbout)
Router.get('/students', showStudents)
Router.get('/students/:id', showStudent)
Router.get('/student/edit/:id', showEdit)
Router.get('/student/add', showAdd)
// data as json or object
Router.get('/api/v1.0.0/students', getAllStudents)
Router.get('/api/v1.0.0/students/:id', getSingleStudent)
Router.post('/api/v.1.0/students', addStudent)
Router.post('/api/v.1.0/students/:id/edit', editStudent)
Router.get('/api/v.1.0/students/:id/delete', deleteStudent)

module.exports = Router

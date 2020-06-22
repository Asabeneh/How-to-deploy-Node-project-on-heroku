const Student = require('../models/Student')

function showHome(req, res) {
  res.render('pages/index')
}
function showAbout(req, res) {
  res.render('pages/about')
}
function showContact(req, res) {
  res.render('pages/contact')
}
function showStudents(req, res) {
  Student.find({}, (err, students) => {
    if (err) return res.status(404).send('Not found')
    res.render('pages/students', { students })
  })
}

function showStudent(req, res) {
  const id = req.params.id
  Student.findOne({ _id: id }, (err, student) => {
    if (err) return res.status(404).send('Not found')
    res.render('pages/student', { student })
  })
}
function showAdd(req, res) {
  res.render('pages/add-student')
}
function showEdit(req, res) {
  const id = req.params.id
  Student.findOne({ _id: id }, (err, student) => {
    if (err) return res.status(404).send(err)
    res.render('pages/edit-student', { student })
  })
}

function getAllStudents(req, res) {
  Student.find({}, (err, students) => {
    if (err) return res.status(404).send('Not found')
    res.json(students)
  })
}

function getSingleStudent(req, res) {
  const id = req.params.id
  Student.findOne({ _id: id }, (err, student) => {
    if (err) return res.status(404).send('Not found')
    res.send(student)
  })
}

function addStudent(req, res) {
  req.body.skills = req.body.skills.split(',')
  const newStudent = new Student(req.body)
  newStudent.save(err => {
    if (err) return res.status(404).send('Not found')
    res.redirect('/students')
  })
}

function editStudent(req, res) {
  const id = req.params.id
  req.body.skills = req.body.skills.split(',')
  const { firstName, lastName, age, country, bio, skills } = req.body
  Student.findOne({ _id: id }, (err, student) => {
    if (err) return res.status(404).send(err)
    student.firstName = firstName
    student.lastName = lastName
    student.age = age
    student.country = country
    student.skills = skills
    student.bio = bio

    student.save(err => {
      if (err) return res.status(404).send(err)
      res.redirect('/students')
    })
  })
}

function deleteStudent(req, res) {
  const id = req.params.id
  Student.deleteOne({ _id: id }, (err, student) => {
    if (err) return res.status(404).send(err)
    res.redirect('/students')
  })
}

module.exports = {
  showHome: showHome,
  showAbout: showAbout,
  showContact: showContact,
  showStudents: showStudents,
  showStudent: showStudent,
  showAdd: showAdd,
  showEdit: showEdit,
  getAllStudents: getAllStudents,
  getSingleStudent: getSingleStudent,
  addStudent: addStudent,
  editStudent: editStudent,
  deleteStudent: deleteStudent
}

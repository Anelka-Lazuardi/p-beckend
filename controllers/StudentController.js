// TODO 3: Import data students dari folder data/students.js
// code here

const students = require("../data/students");

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    // code here
    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(data);
  }

  store(req, res) {
    const { name } = req.body;

    // TODO 5: Tambahkan data students
    // code here
    let id = students.slice(-1)[0].id + 1;
    students.push({ id, name });
    const data = {
      message: `Menambahkan data student: ${name}`,
      data: students,
    };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    // TODO 6: Update data students
    // code here
    let objIndex = students.findIndex((obj) => obj.id == id);
    students[objIndex].name = name;
    const data = {
      message: `Mengedit student id ${id}, nama ${name}`,
      data: students,
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    // TODO 7: Hapus data students
    // code here
    let objIndex = students.findIndex((obj) => obj.id == id);
    students.splice(objIndex, 1);

    const data = {
      message: `Menghapus student id ${id}`,
      data: students,
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;

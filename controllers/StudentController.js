// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();
    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(data);
  }

  async detail(req, res) {
    const { id } = req.params;
    const student = await Student.detail(id);
    const data = {
      message: `Menampilkkan detail students dengan id ${id}`,
      data: student,
    };

    res.json(data);
  }

  async store(req, res) {
    const { name, nim, email, jurusan } = req.body;
    await Student.create(name, nim, email, jurusan);
    const data = {
      message: "Menambahkan data student",
      data: await Student.getLast(),
    };

    res.json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    await Student.update(id, nama);
    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: await Student.detail(id),
    };

    res.json(data);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Student.delete(id);
    const data = {
      message: `Menghapus student id ${id}`,
      data: await Student.all(),
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;

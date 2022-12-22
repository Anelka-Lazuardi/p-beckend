// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static detail(id) {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = `SELECT * from students where id = ${id}`;
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static create(name, nim, email, jurusan) {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO students (name, nim, email, jurusan) VALUES ('${name}', '${nim}', '${email}', '${jurusan}')`;
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        if (err) throw err;
        resolve(results);
      });
    });
  }

  static getLast() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students order by id desc limit 1";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static update(id, name) {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE students SET name = '${name}' WHERE id = ${id}`;
      db.query(sql, (err, results) => {
        if (err) throw err;
        resolve(results);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM students WHERE ID = ${id}`;
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }
}

// export class Student
module.exports = Student;

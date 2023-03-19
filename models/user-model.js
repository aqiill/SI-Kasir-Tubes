const koneksi = require('../config/database');
const { responseData, responseMessage } = require('../utils/response-handler');

exports.insertUser = (response, statement, data) => {
    koneksi.query(statement, data, (err, rows, field) => {
        if (err) {
            return response.status(500).json({ message: 'Gagal insert data!', error: err });
        }

        // res.status(201).json({ success: true, message: 'Berhasil insert data!' });
        responseMessage(response, 200, 'Berhasil insert data!');
    });
}

exports.getUser = (response, statement) => {

    // jalankan query
    koneksi.query(statement, (err, rows, field) => {
        if (err) {
            return response.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        response.status(200).json({ success: true, data: rows });
    });
}

exports.updateUser = (response, searchStatement, updateStatement, id, data) => {
    // query untuk melakukan pencarian data
    koneksi.query(searchStatement, id, (err, rows, field) => {
        if (err) {
            return response.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // cek id yang dimasukkan sesuai data di db
        if (rows.length) {

            koneksi.query(updateStatement, [data, id], (err, rows, field) => {
                if (err) {
                    return response.status(500).json({ message: 'Ada kesalahan', error: err });
                }


                // res.status(200).json({ success: true, message: 'Berhasil update data!' });
                responseMessage(response, 200, 'Berhasil insert data!');
            });
        } else {
            return response.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    });
}

exports.deleteUser = (response, searchStatement, deleteStatement, id) => {
    koneksi.query(searchStatement, id, (err, rows, field) => {
        if (err) {
            return response.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // id ada di db
        if (rows.length) {
            koneksi.query(deleteStatement, id, (err, rows, field) => {
                if (err) {
                    return response.status(500).json({ message: 'Ada kesalahan', error: err });
                }

                // res.status(200).json({ success: true, message: 'Berhasil hapus data!' });    
                responseMessage(response, 200, 'Berhasil delete data!');
            });
        } else {
            return response.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    });
}
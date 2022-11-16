const {
    insertUser,
    getUser,
    updateUser,
    deleteUser
} = require('../models/user-model');

//create data
exports.createData = (req, res) => {
    // variabel penampung data & query sql
    const data = { ...req.body };
    const querySql = 'INSERT INTO user SET ?';

    insertUser(res, querySql, data);
}

//read data
exports.readData = (req, res) => {
    const querySql = 'SELECT * FROM user';
    getUser(res, querySql);
}

//update data
exports.updateData = (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM user WHERE id = ?';
    const queryUpdate = 'UPDATE user SET ? WHERE id = ?';

    updateUser(res, querySearch, queryUpdate, req.params.id, data);
}

//delete data
exports.deleteData = (req, res) => {
    // buat variabel penampung query sql
    const querySearch = 'SELECT * FROM user WHERE id = ?';
    const queryDelete = 'DELETE FROM user WHERE id = ?';

    deleteUser(res, querySearch, queryDelete, req.params.id);

}
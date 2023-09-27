const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data kategori
const ambilDataKategori = async (req, res) => {
        const data = await new Promise((resolve, reject) => {
            connection.query('SELECT * FROM kategori', function (error, rows ) {
                    if (rows) {
                        resolve(rows);
                    } else {
                        reject([]);
                    }
            });
        });
        if (data) {
            res.send({
                    success : true,
                    message : 'Berhasil ambil data',
                    data : data
            });
        } else {
            res.send({
                    success : false,
                    message : 'Gagal ambil data',
                    
            });
        }
}

// menambah data kategori
const tambahDataKategori = async(req, res) => {
    let data = {
        kategori: req.body.kategori
    }
    const result = await new Promise((resolve, reject) => {
        connection.query('INSERT INTO kategori SET ?;', [data], function(error, rows) {
            if (rows) {
                resolve(true);
            } else {
                reject(false);
            }
        });

    });

    if (result) {
        res.send({
            success:true,
            message: 'Berhasil menambahkan data!'
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal menambahkan data!',
        });
    }
}

// mengubah data Kategori
const ubahDataKategori = async(req, res) => {
    let id = req.params.id;
    let dataEdit = {
        kategori: req.body.kategori,
    }

    const result = await new Promise((resolve, reject) => {
        connection.query('UPDATE kategori SET ? WHERE id = ?;', [dataEdit, id], function(error, rows) {
            if (rows) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    });

    if (result) {
        res.send({
            success : true,
            message : 'Berhasil edit data!'
        });
    } else {
        res.send({
            success : false,
            message : "Gagal edit data!"
        });
    }

}

// menghapus data kategori
const hapusDataKategori = async(req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        connection.query('DELETE FROM kategori WHERE id = ?;', [id], function(error, rows) {
            if (rows) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    });

    if (result) {
        res.send({
            success : true,
            message : 'Berhasil hapus data!'
        });
    } else {
        res.send({
            success : false,
            message : 'Gagal hapus data!'
        });
    }

}



module.exports = {
    ambilDataKategori,
    tambahDataKategori,
    ubahDataKategori,
    hapusDataKategori
    
}
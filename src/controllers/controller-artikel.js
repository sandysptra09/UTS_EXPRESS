const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data Artikel
const ambilDataArtikel = async (req, res) => {
        const data = await new Promise((resolve, reject) => {
            connection.query('SELECT * FROM artikel', function (error, rows ) {
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

// menambah data Artikel
const tambahDataArtikel = async(req, res) => {
    let data = {
        judul: req.body.judul,
        deskripsi: req.body.deskripsi,
        tanggal_terbit: req.body.tanggal_terbit,
        penerbit: req.body.penerbit,
        id_kategori: req.body.id_kategori
    }
    const result = await new Promise((resolve, reject) => {
        connection.query('INSERT INTO artikel SET ?;', [data], function(error, rows) {
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

// mengubah data Artikel
const ubahDataArtikel = async(req, res) => {
    let id = req.params.id;
    let dataEdit = {
        judul: req.body.judul,
        deskripsi: req.body.deskripsi,
        tanggal_terbit: req.body.tanggal_terbit,
        penerbit: req.body.penerbit,
        id_kategori: req.body.id_kategori,
    }

    const result = await new Promise((resolve, reject) => {
        connection.query('UPDATE artikel SET ? WHERE id = ?;', [dataEdit, id], function(error, rows) {
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

// menghapus data Artikel
const hapusDataArtikel = async(req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        connection.query('DELETE FROM artikel WHERE id = ?;', [id], function(error, rows) {
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
    ambilDataArtikel,
    tambahDataArtikel,
    ubahDataArtikel,
    hapusDataArtikel
    
}
const router = require('express').Router();
const { artikel } = require('../controllers');

// GET localhost:8080/artikel => Ambil semua data atikel
router.get('/', artikel.ambilDataArtikel);

// POST localhost:8080/artikel/add => Menambah data artikel ke database
router.post('/add', artikel.tambahDataArtikel);

// // PUT localhost:8080/artikel/2 => Mengubah data artikel
router.put('/edit/:id', artikel.ubahDataArtikel);

// POST localhost:8080/artikel/delete => Menghapus data artikel
router.delete('/delete/:id', artikel.hapusDataArtikel)

module.exports = router;
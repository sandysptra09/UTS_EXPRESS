const router = require('express').Router();
const { kategori } = require('../controllers');

// GET localhost:8080/kategori => Ambil semua data kategori
router.get('/', kategori.ambilDataKategori);

// POST localhost:8080/kategori/add => Menambah data kategori ke database
router.post('/add', kategori.tambahDataKategori);

// // PUT localhost:8080/kategori/2 => Mengubah data kategori
router.put('/edit/:id', kategori.ubahDataKategori);

// POST localhost:8080/kategori/delete => Menghapus data kategori
router.delete('/delete/:id', kategori.hapusDataKategori)

module.exports = router;
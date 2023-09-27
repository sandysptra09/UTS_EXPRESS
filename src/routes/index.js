const router = require('express').Router();
const routeKategori = require('./kategori');
const routeArtikel = require('./artikel');

// GET localhost:8080/produk => Ambil semua data kategori dan artikel
router.use('/kategori', routeKategori);
router.use('/artikel', routeArtikel);

module.exports = router;
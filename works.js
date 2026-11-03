// Daftar karya untuk halaman utama dan halaman /design.
//
// Cara menambah karya baru:
// 1. Unggah gambarnya ke repo (nama bebas, misalnya karya-02-thumb.webp) (thumbnail persegi + gambar detail).
// 2. Salin satu blok { ... } di bawah, tempel di PALING ATAS (karya terbaru tampil duluan).
// 3. Ubah isinya, lalu pastikan id-nya unik. Tanda koma di antara blok jangan sampai hilang.
//
//   title    = nama karya
//   category = kategori (kalau ada 2 kategori atau lebih, tombol filter muncul sendiri)
//   desc     = keterangan singkat (\n untuk baris baru)
//   thumb    = gambar persegi kecil untuk grid
//   images   = gambar-gambar detail yang tampil saat karya diklik
window.WORKS = [
  {
    id: 1,
    title: "JB Logo",
    category: "KINSOU-SAN",
    desc: "Client 01\nNama: Kinsou-san",
    thumb: "karya-01-thumb.webp",
    images: ["karya-01-a.webp", "karya-01-b.webp"]
  }
];

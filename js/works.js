// Daftar karya untuk halaman utama dan halaman /design.
//
// Cara menambah atau mengganti karya:
// 1. Unggah gambarnya ke folder "karya" di repo. Nama file mengikuti nomor id:
//      karya-02-thumb.webp  -> gambar persegi kecil untuk grid
//      karya-02-a.webp      -> gambar detail pertama
//      karya-02-b.webp      -> gambar detail kedua (dan seterusnya)
//    Kalau namanya sama dengan file yang sudah ada, file lama otomatis tertimpa.
// 2. Ubah title, category, dan desc di bawah. Tanda koma di antara blok jangan sampai hilang.
// 3. Karya baru: salin satu blok { ... }, tempel di PALING ATAS, dan beri id yang belum dipakai.
//
//   title    = nama karya
//   category = kategori (kalau ada 2 kategori atau lebih, tombol filter muncul sendiri)
//   desc     = keterangan singkat (\n untuk baris baru)
//   pinned   = true supaya tampil di bagian "Pinned" di beranda (maksimal 6 yang tampil).
//              Kalau tidak ada satu pun yang pinned, beranda menampilkan 6 karya teratas.
//   thumb    = gambar persegi untuk grid
//   images   = daftar gambar detail yang tampil saat karya diklik
window.WORKS = [
  {
    id: 6,
    title: "Karya 06",
    category: "Poster",
    desc: "Client 06\nNama: (isi nama client)",
    thumb: "karya/karya-06-thumb.webp",
    images: ["karya/karya-06-a.webp", "karya/karya-06-b.webp"]
  },
  {
    id: 5,
    title: "Karya 05",
    category: "Banner",
    desc: "Client 05\nNama: (isi nama client)",
    thumb: "karya/karya-05-thumb.webp",
    images: ["karya/karya-05-a.webp", "karya/karya-05-b.webp"]
  },
  {
    id: 4,
    title: "Karya 04",
    category: "Logo",
    desc: "Client 04\nNama: (isi nama client)",
    thumb: "karya/karya-04-thumb.webp",
    images: ["karya/karya-04-a.webp", "karya/karya-04-b.webp"]
  },
  {
    id: 3,
    title: "Karya 03",
    category: "Poster",
    desc: "Client 03\nNama: (isi nama client)",
    thumb: "karya/karya-03-thumb.webp",
    images: ["karya/karya-03-a.webp", "karya/karya-03-b.webp"]
  },
  {
    id: 2,
    title: "Karya 02",
    category: "Banner",
    desc: "Client 02\nNama: (isi nama client)",
    thumb: "karya/karya-02-thumb.webp",
    images: ["karya/karya-02-a.webp", "karya/karya-02-b.webp"]
  },
  {
    id: 1,
    title: "JB Logo",
    category: "KINSOU-SAN",
    desc: "Client 01\nNama: Kinsou-san",
    thumb: "karya/karya-01-thumb.webp",
    images: ["karya/karya-01-a.webp", "karya/karya-01-b.webp"]
  }
];

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
    id: 1,
    pinned: true,
    title: "Design 01",
    category: "Logo",
    desc: "aGBtrshrtjhrtjh",
    thumb: "karya/karya-01-thumb.webp",
    images: ["karya/karya-01-a.webp", "karya/karya-01-b.webp"]
  },
  {
    id: 2,
    pinned: true,
    title: "Design 02",
    category: "Logo",
    desc: "EFEFEFFEFFEEFFEFE",
    thumb: "karya/karya-02-thumb.webp",
    images: ["karya/karya-02-a.webp", "karya/karya-02-b.webp"]
  },
  {
    id: 3,
    pinned: true,
    title: "Design 03",
    category: "Logo",
    desc: "reberewegerhbthb",
    thumb: "karya/karya-03-thumb.webp",
    images: ["karya/karya-03-a.webp", "karya/karya-03-b.webp"]
  },
  {
    id: 4,
    pinned: true,
    title: "Design 04",
    category: "Poster",
    desc: "ewfwe5t234tfwtg",
    thumb: "karya/karya-04-thumb.webp",
    images: ["karya/karya-04-a.webp", "karya/karya-04-b.webp"]
  },
  {
    id: 5,
    pinned: true,
    title: "Design 05",
    category: "Poster",
    desc: "ewfwefgewf",
    thumb: "karya/karya-05-thumb.webp",
    images: ["karya/karya-05-a.webp", "karya/karya-05-b.webp"]
  },
  {
    id: 6,
    pinned: true,
    title: "Design 06",
    category: "Poster",
    desc: "wefwefewfwef",
    thumb: "karya/karya-06-thumb.webp",
    images: ["karya/karya-06-a.webp", "karya/karya-06-b.webp"]
  },
  {
    id: 7,
    pinned: false,
    title: "Design 07",
    category: "Logo",
    desc: "ewfgewrgvbre",
    thumb: "karya/karya-07-thumb.webp",
    images: ["karya/karya-07-a.webp", "karya/karya-07-b.webp"]
  },
  {
    id: 8,
    pinned: false,
    title: "Design 08",
    category: "Banner",
    desc: "rebrebredbre",
    thumb: "karya/karya-08-thumb.webp",
    images: ["karya/karya-08-a.webp", "karya/karya-08-b.webp"]
  },
  {
    id: 9,
    pinned: false,
    title: "Design 09",
    category: "Poster",
    desc: "rbgtyrtbndbbsrws",
    thumb: "karya/karya-09-thumb.webp",
    images: ["karya/karya-09-a.webp", "karya/karya-09-b.webp"]
  },
  {
    id: 10,
    pinned: false,
    title: "Design 10",
    category: "Logo",
    desc: "rbhdrshbsdfbdsf",
    thumb: "karya/karya-10-thumb.webp",
    images: ["karya/karya-10-a.webp", "karya/karya-10-b.webp"]
  }
];
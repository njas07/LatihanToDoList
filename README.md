# 📋 To-Do List Dashboard

Aplikasi **To-Do List Dashboard** sederhana berbasis **HTML, CSS, dan JavaScript** yang digunakan untuk mengelola daftar tugas dengan tampilan dashboard modern dan responsif.

## ✨ Fitur

* ➕ Menambahkan tugas baru
* 📋 Menampilkan daftar tugas
* ✅ Menandai tugas sebagai selesai
* 🗑️ Menghapus tugas
* 📊 Statistik jumlah tugas

  * Total tugas
  * Tugas selesai
  * Tugas belum selesai
* 📅 Menampilkan tanggal hari ini
* ⌨️ Menambahkan tugas menggunakan tombol **Enter**
* 📱 Responsive untuk desktop, tablet, dan mobile
* 🎨 Tampilan dashboard modern

## 🛠️ Teknologi

Project ini dibuat menggunakan:

* **HTML5** — Struktur halaman
* **CSS3** — Styling dan responsive design
* **JavaScript** — Logika dan interaksi aplikasi
* **Google Fonts (Inter)** — Font antarmuka

## 📁 Struktur Folder

```text
todo-list-dashboard/
│
├── index.html
│
├── css/
│   └── style.css
│
└── js/
    └── script.js
```

### Penjelasan

**`index.html`**

Berisi struktur utama dashboard dan elemen To-Do List.

**`css/style.css`**

Berisi seluruh tampilan aplikasi, termasuk:

* Dashboard
* Sidebar
* Card statistik
* Form input
* Daftar tugas
* Button
* Responsive design

**`js/script.js`**

Berisi logika aplikasi seperti:

* Menambahkan tugas
* Menampilkan tugas
* Menandai tugas selesai
* Menghapus tugas
* Menghitung statistik

## 🚀 Cara Menjalankan

### 1. Clone repository

```bash
git clone https://github.com/USERNAME/NAMA-REPOSITORY.git
```

### 2. Masuk ke folder project

```bash
cd todo-list-dashboard
```

### 3. Jalankan project

Tidak membutuhkan server atau instalasi package tambahan.

Cukup buka:

```text
index.html
```

menggunakan browser.

Atau jika menggunakan **Visual Studio Code**, kamu bisa menjalankannya menggunakan extension **Live Server**.

## 💻 Cara Menggunakan

### Menambahkan Tugas

1. Masukkan tugas pada kolom input.
2. Klik **Tambah Tugas**.
3. Tugas akan muncul pada daftar.

### Menandai Tugas Selesai

Klik checkbox di sebelah kiri tugas.

Tugas yang selesai akan otomatis diberi efek **coret**.

### Menghapus Tugas

Klik tombol 🗑️ pada tugas yang ingin dihapus.

### Menggunakan Enter

Kamu juga bisa menekan:

```text
Enter
```

setelah mengetik tugas untuk langsung menambahkannya.

## 📊 Dashboard Statistik

Dashboard secara otomatis menghitung:

| Statistik     | Keterangan                      |
| ------------- | ------------------------------- |
| Total Tugas   | Jumlah seluruh tugas            |
| Tugas Selesai | Jumlah tugas yang sudah selesai |
| Belum Selesai | Jumlah tugas yang belum selesai |

## 🎨 Tampilan

Dashboard menggunakan desain modern dengan:

* Sidebar navigation
* Gradient UI
* Statistik cards
* Custom checkbox
* Hover effects
* Responsive layout
* Clean & minimal interface

## ⚠️ Catatan

Versi saat ini menggunakan **JavaScript array** untuk menyimpan data tugas.

Artinya, data tugas belum menggunakan database atau `localStorage`. Jika halaman browser di-refresh, daftar tugas akan kembali kosong.

## 🔮 Pengembangan Selanjutnya

Beberapa fitur yang dapat ditambahkan:

* 💾 Penyimpanan menggunakan `localStorage`
* ✏️ Edit tugas
* 🔎 Search tugas
* 🏷️ Kategori tugas
* 📅 Deadline tugas
* 🔥 Prioritas tugas
* 🌙 Dark mode
* 🔔 Notifikasi
* 📊 Statistik yang lebih lengkap
* ☁️ Database dan backend
* 👤 Sistem login pengguna

## 📄 License

Project ini dibuat untuk tujuan **pembelajaran dan pengembangan web**.

Silakan digunakan, dimodifikasi, dan dikembangkan sesuai kebutuhan.

---

⭐ Jika project ini bermanfaat, jangan lupa memberikan **Star** pada repository GitHub.

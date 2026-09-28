# OpenType Randomizer

Generator fitur `calt` untuk memilih glyph alternatif berdasarkan huruf di sekitarnya. [Buka alatnya](https://abdrhnf.github.io/opentype-randomizer/). Halamannya berjalan langsung di browser tanpa instalasi.

## Cara pakai

1. Masukkan **nama glyph dasar** yang ada di font, dipisahkan spasi. Contoh: `a b c A B C`.
2. Tentukan jumlah **alternatif per glyph** dan akhiran namanya. Dengan nilai `2` dan akhiran `.alt`, Anda perlu membuat `a.alt1`, `a.alt2`, `b.alt1`, `b.alt2`, dan seterusnya.
3. Lihat bagian **Daftar glyph alternatif** dan buat semua glyph yang tercantum di font editor.
4. Di **Glyphs**, buka Font Info → Features → `calt`, klik **Salin untuk Glyphs**, tempel kode, lalu Compile. Jika sudah ada kode `calt`, periksa dan gabungkan isinya dulu. Untuk alur build berbasis berkas `.fea`, klik **Unduh .fea**; berkasnya memuat kelas, dua lookup, dan fitur `calt` lengkap.
5. Kompilasi/ekspor font, aktifkan `calt`, lalu uji hasilnya di font editor atau aplikasi yang mendukung OpenType.

Bagian **Simulasi pilihan** hanya menampilkan alternatif terpilih dengan angka kecil. Bentuk glyph asli dan hasil kompilasi harus diperiksa di font yang sudah jadi.

Mengubah daftar glyph atau jumlah kelompok membuat pembagian kelompok baru. Perubahan jumlah alternatif dan akhiran nama mempertahankan pembagian yang sedang tampil.

## Batasan

- Semua glyph alternatif dalam **Daftar glyph** harus ada sebelum fitur dikompilasi.
- Pratinjau memakai karakter teks sebagai contoh. Untuk nama glyph yang tidak sama dengan satu karakter Unicode, uji hasil akhirnya di font editor.
- Repo dan demo dapat dibuka publik. Kode tidak disertai lisensi redistribusi.

Dikembangkan oleh Awal Studio.

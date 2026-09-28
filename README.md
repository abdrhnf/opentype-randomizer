# OpenType Randomizer - Standalone Tool

## Deskripsi

OpenType Randomizer adalah alat standalone berbasis HTML untuk menghasilkan kode fitur OpenType (.fea) secara otomatis untuk efek pengacakan glyph pseudo-random. Alat ini dirancang khusus untuk font tulisan tangan yang membutuhkan variasi karakter agar terlihat lebih natural.

Demo: https://abdrhnf.github.io/opentype-randomizer/

## Fitur Utama

### 1. Generator Kode OpenType
- **Classes Generator**: Membuat definisi kelas untuk bucket dan alternate
- **PseudoRandom Logic**: Menghasilkan logika pengacakan berbasis konteks (lookahead)
- **BackwardsCheck (Safety)**: Mencegah karakter yang sama muncul dengan alternate yang sama secara berurutan
- **Recipe List**: Daftar semua glyph alternate yang perlu dibuat

### 2. Live Visualizer dengan SafetyCheck
- Pratinjau real-time hasil pengacakan
- Simulasi BackwardsCheck yang akurat
- Indikator warna untuk setiap alternate
- Status diagnostik untuk verifikasi logika

### 3. UI Bahasa Indonesia
- Semua teks, instruksi, dan dokumentasi dalam Bahasa Indonesia
- Tooltips informatif pada setiap elemen
- Panduan pengguna lengkap dengan penjelasan parameter

### 4. Visual Bucket Diagram
- Diagram interaktif berwarna menunjukkan distribusi karakter ke bucket
- Membantu memahami cara kerja algoritma pengacakan
- Update otomatis berdasarkan input pengguna

### 5. Export & Download
- Download individual per tab (.fea files)
- Download All: Gabungan semua fitur dalam satu file
- Copy to clipboard untuk semua output

## Cara Menggunakan

1. **Input Glyph List**: Masukkan daftar karakter dasar (contoh: a b c d e f g)
2. **Konfigurasi Parameter**:
   - **Alternate Count**: Jumlah variasi per karakter (2-8)
   - **Lookahead Depth**: Kedalaman konteks untuk pengacakan (2-4 recommended)
   - **Bucket Count**: Jumlah kelompok karakter (default: 3)
3. **Generate**: Kode otomatis ter-generate di semua tab
4. **Copy/Download**: Salin atau unduh kode untuk digunakan di font editor

## Workflow Integrasi dengan Font Editor

1. Buka tab **4. Recipe List** → Copy daftar glyph
2. Di Glyphs App/FontLab, buat semua glyph alternate sesuai daftar
3. Buka tab **1. Classes** → Copy ke file `.fea`
4. Buka tab **2. Logic (calt)** → Copy ke fitur `calt`
5. Buka tab **3. Safety Check** → Copy ke fitur `calt` (di baris paling akhir)
6. Compile font dan test di tab **Simulate**

## Teknologi

- **Single-File HTML**: Tidak perlu build process atau dependencies
- **Vanilla JavaScript**: Tidak ada framework, ringan dan cepat
- **Responsive Design**: Bekerja di desktop dan tablet

## Parameter Teknis

### Lookahead Depth (Kedalaman Konteks)
Menentukan berapa karakter ke depan yang dianalisis untuk memilih alternate.
- Nilai rendah (2): Pola lebih sederhana, file .fea lebih kecil
- Nilai tinggi (4-5): Pola lebih kompleks dan acak, file .fea lebih besar
- **Rekomendasi**: 2-4

### Alternate Count (Jumlah Alternate)
Berapa banyak variasi glyph per karakter.
- Minimum: 2 (a, a.alt1)
- Maximum: 8 (a, a.alt1, ..., a.alt7)
- **Rekomendasi**: 3-6 untuk hasil optimal

### Bucket Count
Jumlah kelompok untuk membagi karakter.
- Lebih banyak bucket = distribusi lebih merata
- **Default**: 3 bucket
- **Rekomendasi**: 3-5

## Algoritma

Alat ini menggunakan algoritma "Quantum Contextual Alternates" yang:
1. Membagi karakter ke dalam bucket secara acak
2. Menggunakan konteks (lookahead) untuk menghitung alternate
3. Menerapkan BackwardsCheck untuk mencegah pengulangan

Formula pemilihan alternate:
```
noise = Σ(bucket_value × (position + 2))
alternate_index = (noise % alternate_count) + 1
```

## Changelog

### Version 2.0 (2025-01-25)
- ✅ Implementasi SafetyCheck simulation di Visualizer
- ✅ Penambahan tooltips pada legend warna
- ✅ Dokumentasi parameter lengkap dalam Bahasa Indonesia
- ✅ Glyph count display di Recipe List tab
- ✅ Visual bucket diagram dengan color-coding
- ✅ Contoh teks lebih baik ("the quick brown fox...")
- ✅ Penghapusan fitur font upload (simplified UI)

### Version 1.0
- ✅ Core logic implementation
- ✅ Live visualizer
- ✅ Download features
- ✅ Indonesian localization

## Credits

Dikembangkan oleh Awal Studio
Berdasarkan teknik yang digunakan di Playpen Sans

## Status

Demo dapat dibuka publik; repo pengembangannya tetap privat.

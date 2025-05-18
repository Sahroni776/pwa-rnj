# Ketidaksesuaian Antara Kode Aplikasi dan Skema Database

## Tabel Kedai

| Kode Aplikasi | Skema Database | Status |
|---------------|---------------|--------|
| nama_kedai | nama_kedai | ✅ Sesuai |
| foto_kedai | foto_url | ❌ Tidak sesuai |
| jam_buka | jam_buka | ✅ Sesuai |
| deskripsi_singkat | deskripsi_singkat | ✅ Sesuai |
| alamat_kedai | alamat_toko | ❌ Tidak sesuai |
| ongkir_tetap | ongkir_tetap | ✅ Sesuai |
| aktif | aktif | ✅ Sesuai |
| created_at | dibuat_pada | ❌ Tidak sesuai |
| updated_at | diperbarui_pada | ❌ Tidak sesuai |

## Ringkasan Ketidaksesuaian

1. **foto_kedai** di kode aplikasi seharusnya **foto_url** di database
2. **alamat_kedai** di kode aplikasi seharusnya **alamat_toko** di database
3. **created_at** di kode aplikasi seharusnya **dibuat_pada** di database
4. **updated_at** di kode aplikasi seharusnya **diperbarui_pada** di database

Semua ketidaksesuaian ini perlu diperbaiki dalam kode aplikasi untuk menghindari error "Could not find the column" di masa mendatang.

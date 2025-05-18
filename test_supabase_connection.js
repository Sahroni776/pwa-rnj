// Test script untuk memeriksa koneksi ke database Supabase

// Import Supabase client dari CDN
const { createClient } = require('@supabase/supabase-js');

// Konfigurasi Supabase dari file index.html
const SUPABASE_URL = 'https://zezwvrsbehecksmsscjd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inplend2cnNiZWhlY2tzbXNzY2pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5MTg2MzgsImV4cCI6MjA2MjQ5NDYzOH0.313RNDf1LM5qQcC-HjTnX9rZcz2EKw3bT5MHOf2ou2Q';
const STORAGE_BUCKET = 'food-images';

// Inisialisasi Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Fungsi untuk menguji koneksi ke database
async function testDatabaseConnection() {
    console.log('Memulai pengujian koneksi database Supabase...');
    
    try {
        // Tes 1: Memeriksa koneksi umum dengan mencoba mengambil data dari tabel kedai
        console.log('Tes 1: Memeriksa koneksi ke tabel kedai...');
        const { data: kedaiData, error: kedaiError } = await supabase
            .from('kedai')
            .select('*')
            .limit(1);
        
        if (kedaiError) {
            console.error('Error saat mengakses tabel kedai:', kedaiError.message);
        } else {
            console.log('Koneksi ke tabel kedai berhasil!');
            console.log(`Data yang diterima: ${kedaiData.length} baris`);
        }
        
        // Tes 2: Memeriksa koneksi ke tabel menu_makanan
        console.log('\nTes 2: Memeriksa koneksi ke tabel menu_makanan...');
        const { data: menuData, error: menuError } = await supabase
            .from('menu_makanan')
            .select('*')
            .limit(1);
        
        if (menuError) {
            console.error('Error saat mengakses tabel menu_makanan:', menuError.message);
        } else {
            console.log('Koneksi ke tabel menu_makanan berhasil!');
            console.log(`Data yang diterima: ${menuData.length} baris`);
        }
        
        // Tes 3: Memeriksa akses ke storage bucket
        console.log('\nTes 3: Memeriksa akses ke storage bucket...');
        const { data: bucketData, error: bucketError } = await supabase
            .storage
            .from(STORAGE_BUCKET)
            .list('', { limit: 1 });
        
        if (bucketError) {
            console.error('Error saat mengakses storage bucket:', bucketError.message);
        } else {
            console.log('Akses ke storage bucket berhasil!');
            console.log(`File yang ditemukan: ${bucketData.length}`);
        }
        
        // Kesimpulan
        console.log('\n=== KESIMPULAN PENGUJIAN ===');
        if (kedaiError || menuError || bucketError) {
            console.log('Status: GAGAL - Terdapat masalah koneksi ke database Supabase');
        } else {
            console.log('Status: SUKSES - Koneksi ke database Supabase berfungsi dengan baik');
        }
        
    } catch (error) {
        console.error('\nError tidak terduga saat menguji koneksi:', error.message);
        console.log('\n=== KESIMPULAN PENGUJIAN ===');
        console.log('Status: GAGAL - Terjadi error tidak terduga');
    }
}

// Jalankan pengujian
testDatabaseConnection();

// =========================================================
// Data Dummy untuk Dashboard (dashboard.html)
// =========================================================
const dashboardData = {
    totalProducts: 120, // Sesuai contoh
    totalSales: 85,     // Sesuai contoh
    totalRevenue: 12500000, // Rp 12.500.000 (Sesuai contoh)
};

// =========================================================
// Data Dummy untuk List Produk (products.html)
// =========================================================
const productsData = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Cokelat Aceh", price: 30000, stock: 10 },
]; // Sesuai contoh

// Fungsi untuk format mata uang Rupiah
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}
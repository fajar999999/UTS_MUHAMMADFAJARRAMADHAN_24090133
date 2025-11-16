document.addEventListener('DOMContentLoaded', function() {
    // Memastikan elemen ada dan mengambil data dari global.js
    if (document.getElementById('totalProducts')) {
        document.getElementById('totalProducts').textContent = dashboardData.totalProducts;
        document.getElementById('totalSales').textContent = dashboardData.totalSales;
        
        // Menggunakan fungsi formatRupiah dari global.js
        document.getElementById('totalRevenue').textContent = formatRupiah(dashboardData.totalRevenue);
    }
});
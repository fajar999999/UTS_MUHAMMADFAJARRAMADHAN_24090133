// productsData dan formatRupiah diambil dari global.js

function renderProductTable() {
    const tableBody = document.getElementById('productTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = ''; 

    // Menggunakan forEach untuk menampilkan data
    productsData.forEach((product, index) => {
        const row = tableBody.insertRow();
        row.id = `row-${product.id}`; 

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td class="text-right">${formatRupiah(product.price)}</td>
            <td class="text-center">${product.stock}</td>
            <td class="action-cell">
                <button class="action-btn edit-btn" data-id="${product.id}">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="action-btn delete-btn" data-id="${product.id}">
                    <i class="fas fa-trash-alt"></i> Delete
                </button>
            </td>
        `;
    });

    // Menambahkan event listener untuk aksi
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', handleDelete);
    });

    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', handleEdit);
    });
}

// Fungsi Edit (Simulasi: Tampilkan alert)
function handleEdit(event) {
    const id = event.currentTarget.getAttribute('data-id');
    const product = productsData.find(p => p.id == id);
    if (product) {
        // Tampilkan alert: Edit produk (nama produk)
        alert(`Fungsi Edit untuk produk: ${product.name} akan dikembangkan.`);
    }
}

// Fungsi Delete (Hapus baris dari DOM)
function handleDelete(event) {
    const id = parseInt(event.currentTarget.getAttribute('data-id'));
    const rowIndex = productsData.findIndex(p => p.id === id);

    // Tambahkan konfirmasi hapus
    if (rowIndex > -1 && confirm("Yakin ingin menghapus produk ini?")) {
        
        // 1. Hapus dari array JavaScript
        productsData.splice(rowIndex, 1);

        // 2. Hapus baris produk dari tabel dengan method remove()
        const rowElement = document.getElementById(`row-${id}`);
        if (rowElement) {
            rowElement.remove();
        }

        // 3. Re-render tabel untuk memastikan nomor urut (No) diperbarui
        renderProductTable();
        alert("Produk berhasil dihapus!");
    }
}

// Panggil render saat halaman dimuat
document.addEventListener('DOMContentLoaded', renderProductTable);
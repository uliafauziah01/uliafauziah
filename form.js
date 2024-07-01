document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Memanggil fungsi validasi
    if (validateForm()) {
        alert('Formulir berhasil disubmit!');
        showSummaryPopup();
        // Di sini Anda bisa menambahkan kode untuk mengirimkan formulir jika validasi berhasil
        document.getElementById('registrationForm').submit();
    }
});

function validateForm() {
    // Mendapatkan nilai dari input
    const namaLengkap = document.getElementById('namaLengkap').value.trim();
    const namaAlias = document.getElementById('namaAlias').value.trim();
    const tempatLahir = document.getElementById('tempatLahir').value.trim();
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const nomorTelepon = document.getElementById('nomorTelepon').value.trim();
    const email = document.getElementById('email').value.trim();
    const nomorIdentitas = document.getElementById('nomor_identitas').value.trim();
    const statusIdentitas = document.getElementById('status_identitas').value.trim();
    const alamatId = document.getElementById('alamatId').value.trim();

    // Validasi Nama Lengkap
    if (namaLengkap === "") {
        alert("Nama Lengkap harus diisi.");
        return false;
    }

    // Validasi Nama Alias
    if (namaAlias === "") {
        alert("Nama Alias harus diisi.");
        return false;
    }

    // Validasi Tempat Lahir
    if (tempatLahir === "") {
        alert("Tempat Lahir harus diisi.");
        return false;
    }

    // Validasi Tanggal Lahir
    if (tanggalLahir === "") {
        alert("Tanggal Lahir harus diisi.");
        return false;
    }

    // Validasi Nomor Telepon
    if (nomorTelepon === "") {
        alert("Nomor Telepon harus diisi.");
        return false;
    }
    if (!/^\d{10,15}$/.test(nomorTelepon)) {
        alert("Nomor Telepon tidak valid. Harus terdiri dari 10-15 digit angka.");
        return false;
    }

    // Validasi Email
    if (email === "") {
        alert("Email harus diisi.");
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Format Email tidak valid.");
        return false;
    }

    // Validasi Nomor Identitas
    if (nomorIdentitas === "") {
        alert("Nomor Identitas harus diisi.");
        return false;
    }
    
    if (!/^\d{16}$/.test(nomorIdentitas)) {
        alert("Nomor Identitas tidak valid. Harus terdiri dari 16 digit angka.");
        return false;
    }

    // Validasi Status Identitas
    if (statusIdentitas === "") {
        alert("Status Identitas harus diisi.");
        return false;
    }

    // Validasi Alamat Sesuai ID
    if (alamatId === "") {
        alert("Alamat Sesuai ID harus diisi.");
        return false;
    }

    // Jika semua validasi berhasil
    return true;
}

function showSummaryPopup() {
    // Mendapatkan nilai dari input
    const namaLengkap = document.getElementById('namaLengkap').value.trim();
    const namaAlias = document.getElementById('namaAlias').value.trim();
    const tempatLahir = document.getElementById('tempatLahir').value.trim();
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    const nomorTelepon = document.getElementById('nomorTelepon').value.trim();
    const email = document.getElementById('email').value.trim();
    const jenisIdentitas = document.querySelector('input[name="jenis_identitas"]:checked').value;
    const nomorIdentitas = document.getElementById('nomor_identitas').value.trim();
    const statusIdentitas = document.getElementById('status_identitas').value.trim();
    const alamatId = document.getElementById('alamatId').value.trim();
    const jenisDebit = document.querySelector('input[name="jenis_debit"]:checked').value;

    // Membuat pesan rangkuman
    const summaryMessage = `
        Nama Lengkap: ${namaLengkap}\n
        Nama Alias: ${namaAlias}\n
        Tempat Lahir: ${tempatLahir}\n
        Tanggal Lahir: ${tanggalLahir}\n
        Jenis Kelamin: ${jenisKelamin}\n
        Nomor Telepon: ${nomorTelepon}\n
        Email: ${email}\n
        Jenis Identitas: ${jenisIdentitas}\n
        Nomor Identitas: ${nomorIdentitas}\n
        Status Identitas: ${statusIdentitas}\n
        Alamat Sesuai ID: ${alamatId}\n
        Jenis Kartu Debit: ${jenisDebit}
    `;

    // Menampilkan popup dengan pesan rangkuman
    alert(summaryMessage);
}

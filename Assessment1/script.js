document.addEventListener("DOMContentLoaded", function () {
    const profileImg = document.getElementById('profile-img');
    const profileInfo = document.getElementById('profile-info');
    const jumlahField = document.getElementById('jumlah');
    const pilihanSelect = document.getElementById('pilihan');
    const tombol = document.getElementById('tombol');

    const dataMahasiswa = {
        nama: 'Arshifa Demuna',
        nim: '607012390003',
        kelas: 'D3SI-46-01',
        foto: 'foto.png'
    };

    profileImg.src = dataMahasiswa.foto;
    profileInfo.innerHTML = `
        <h2>${dataMahasiswa.nama}</h2>
        <p>NIM: ${dataMahasiswa.nim}</p>
        <p>Kelas: ${dataMahasiswa.kelas}</p>
    `;

    tombol.addEventListener('click', function () {
        const jumlah = parseInt(jumlahField.value);
        const pilihan = pilihanSelect.value;

        if (isNaN(jumlah) || jumlah <= 0) {
            alert('Masukkan jumlah buku!');
            return;
        }

        let buku = [    
            { "nama": "sherlock", "jumlah": 2 },
            { "nama": "lupin", "jumlah": 2 },
            { "nama": "aladin", "jumlah": 2 }
        ];

        let bukuDitemukan = buku.find(item => item.nama === pilihan);
        if (!bukuDitemukan) {
            alert('Buku tidak ditemukan!');
            return;
        }
        
        if (jumlah > bukuDitemukan.jumlah) {
            alert('Jumlah buku tidak tersedia!');
            return;
        }

        alert('Silahkan ambil buku Anda.');

        console.log('Array buku:', buku);
    });
});

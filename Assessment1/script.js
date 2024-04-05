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

        let buku = [
            { "nama": "sherlock", "jumlah":2},
            { "nama": "lupin", "jumlah":2},
            { "nama": "aladin", "jumlah":2 }
        ];

        jumlahField.value = '';

        alert('Jumlah buku berhasil diSubmit!');

        console.log('Array buku:', buku);
    });
});

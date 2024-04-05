document.addEventListener("DOMContentLoaded", function () {
    const profileImg = document.getElementById('profile-img');
    const profileInfo = document.getElementById('profile-info');

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
});

$(document).ready(function() {
    $.ajax({
        url: 'toko_buku.json',
        dataType: 'json',
        success: function(data) {
            $('#toko-info').html(`
                <h1>${data.nama_toko}</h1>
                <p><strong>Pengarang:</strong> ${data.pengarang}</p>
                <p><strong>Alamat:</strong> ${data.alamat}</p>
            `);

            let tableHTML = '<table><tr><th>Judul Buku</th><th>Tahun Terbit</th></tr>';
            data.koleksi_buku.forEach(function(buku) {
                tableHTML += `<tr><td>${buku.judul}</td><td>${buku.tahun_terbit}</td></tr>`;
            });
            tableHTML += '</table>';
            $('#koleksi-buku').html(tableHTML);
        },
        error: function(xhr, status, error) {
            console.error(status, error);
            $('#toko-info').html('<p>Error loading data.</p>');
        }
    });
});



// document.addEventListener("DOMContentLoaded", function() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             var data = JSON.parse(this.responseText);
//             displayTokoInfo(data);
//             displayKoleksiBuku(data.koleksi_buku);
//         }
//     };
//     xhttp.open("GET", "toko_buku.json", true);
//     xhttp.send();
// });

// function displayTokoInfo(data) {
//     var tokoInfoDiv = document.getElementById("tokoInfo");
//     var tokoInfoHTML = `
//         <div>Nama Toko: ${data.nama_toko}</div>
//         <div>Pengarang: ${data.pengarang}</div>
//         <div>Alamat: ${data.alamat}</div>
//     `;
//     tokoInfoDiv.innerHTML = tokoInfoHTML;
// }

// function displayKoleksiBuku(koleksiBuku) {
//     var koleksiBukuTable = document.getElementById("koleksiBuku").getElementsByTagName('tbody')[0];
//     var tableHTML = '';
//     koleksiBuku.forEach(function(buku) {
//         tableHTML += `
//             <tr>
//                 <td>${buku.judul}</td>
//                 <td>${buku.pengarang}</td>
//                 <td>${buku.tahun_terbit}</td>
//             </tr>
//         `;
//     });
//     koleksiBukuTable.innerHTML = tableHTML;
// }


"use strict";
var dataZodiak = [
    { nama: "Aries", tanggal: "21 Mar - 19 Apr", elemen: "Api",
        sifat: "Berani, semangat, dan suka jadi yang terdepan. Kadang gampang emosi." },
    { nama: "Taurus", tanggal: "20 Apr - 20 Mei", elemen: "Tanah",
        sifat: "Setia, sabar, dan suka kenyamanan. Kadang keras kepala." },
    { nama: "Gemini", tanggal: "21 Mei - 20 Jun", elemen: "Udara",
        sifat: "Pintar, suka ngobrol, dan penasaran. Kadang susah fokus." },
    { nama: "Cancer", tanggal: "21 Jun - 22 Jul", elemen: "Air",
        sifat: "Penyayang, perhatian, dan sayang keluarga. Kadang terlalu perasa." },
    { nama: "Leo", tanggal: "23 Jul - 22 Agu", elemen: "Api",
        sifat: "Percaya diri, murah hati, dan suka tampil. Kadang sombong." },
    { nama: "Virgo", tanggal: "23 Agu - 22 Sep", elemen: "Tanah",
        sifat: "Teliti, rapi, dan suka membantu. Kadang terlalu perfeksionis." },
    { nama: "Libra", tanggal: "23 Sep - 22 Okt", elemen: "Udara",
        sifat: "Adil, ramah, dan suka kedamaian. Kadang susah mengambil keputusan." },
    { nama: "Scorpio", tanggal: "23 Okt - 21 Nov", elemen: "Air",
        sifat: "Setia, kuat, dan misterius. Kadang mudah curiga." },
    { nama: "Sagitarius", tanggal: "22 Nov - 21 Des", elemen: "Api",
        sifat: "Optimis, jujur, dan suka petualangan. Kadang asal bicara." },
    { nama: "Capricorn", tanggal: "22 Des - 19 Jan", elemen: "Tanah",
        sifat: "Disiplin, rajin, dan bertanggung jawab. Kadang terlalu serius." },
    { nama: "Aquarius", tanggal: "20 Jan - 18 Feb", elemen: "Udara",
        sifat: "Unik, mandiri, dan kreatif. Kadang susah ditebak." },
    { nama: "Pisces", tanggal: "19 Feb - 20 Mar", elemen: "Air",
        sifat: "Lembut, imajinatif, dan suka seni. Kadang suka melamun." }
];
function isiTabel() {
    var isi = "";
    for (var i = 0; i < dataZodiak.length; i++) {
        isi = isi + "<tr>";
        isi = isi + "<td>" + dataZodiak[i].nama + "</td>";
        isi = isi + "<td>" + dataZodiak[i].tanggal + "</td>";
        isi = isi + "<td>" + dataZodiak[i].elemen + "</td>";
        isi = isi + "</tr>";
    }
    document.getElementById("tabel-zodiak").innerHTML = isi;
}
function tampilkanHalaman(id) {
    document.getElementById("beranda").style.display = "none";
    document.getElementById("cari").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById(id).style.display = "block";
}
function tentukanZodiak(bulan, tanggal) {
    if ((bulan == 3 && tanggal >= 21) || (bulan == 4 && tanggal <= 19)) {
        return 0; // Aries
    }
    else if ((bulan == 4 && tanggal >= 20) || (bulan == 5 && tanggal <= 20)) {
        return 1; // Taurus
    }
    else if ((bulan == 5 && tanggal >= 21) || (bulan == 6 && tanggal <= 20)) {
        return 2; // Gemini
    }
    else if ((bulan == 6 && tanggal >= 21) || (bulan == 7 && tanggal <= 22)) {
        return 3; // Cancer
    }
    else if ((bulan == 7 && tanggal >= 23) || (bulan == 8 && tanggal <= 22)) {
        return 4; // Leo
    }
    else if ((bulan == 8 && tanggal >= 23) || (bulan == 9 && tanggal <= 22)) {
        return 5; // Virgo
    }
    else if ((bulan == 9 && tanggal >= 23) || (bulan == 10 && tanggal <= 22)) {
        return 6; // Libra
    }
    else if ((bulan == 10 && tanggal >= 23) || (bulan == 11 && tanggal <= 21)) {
        return 7; // Scorpio
    }
    else if ((bulan == 11 && tanggal >= 22) || (bulan == 12 && tanggal <= 21)) {
        return 8; // Sagitarius
    }
    else if ((bulan == 12 && tanggal >= 22) || (bulan == 1 && tanggal <= 19)) {
        return 9; // Capricorn
    }
    else if ((bulan == 1 && tanggal >= 20) || (bulan == 2 && tanggal <= 18)) {
        return 10; // Aquarius
    }
    else {
        return 11; // Pisces
    }
}
function cariZodiak() {
    var nama = document.getElementById("nama").value;
    var tanggalLahir = document.getElementById("tanggal").value;
    var error = document.getElementById("error");
    var hasil = document.getElementById("hasil");
    var gender = "";
    if (document.getElementById("pria").checked) {
        gender = "Pria";
    }
    else if (document.getElementById("wanita").checked) {
        gender = "Wanita";
    }
    if (nama == "") {
        error.innerHTML = "Nama belum diisi!";
        hasil.style.display = "none";
        return;
    }
    if (gender == "") {
        error.innerHTML = "Pilih jenis kelamin dulu!";
        hasil.style.display = "none";
        return;
    }
    if (tanggalLahir == "") {
        error.innerHTML = "Tanggal lahir belum diisi!";
        hasil.style.display = "none";
        return;
    }
    error.innerHTML = "";
    var bagian = tanggalLahir.split("-");
    var bulan = Number(bagian[1]);
    var tgl = Number(bagian[2]);
    var nomor = tentukanZodiak(bulan, tgl);
    var z = dataZodiak[nomor];
    document.getElementById("hasil-judul").innerHTML = "Halo " + nama + " (" + gender + "), zodiak kamu " + z.nama + "!";
    document.getElementById("hasil-info").innerHTML = "Tanggal: " + z.tanggal + " | Elemen: " + z.elemen;
    document.getElementById("hasil-sifat").innerHTML = "Sifat: " + z.sifat;
    hasil.style.display = "block";
}
isiTabel();

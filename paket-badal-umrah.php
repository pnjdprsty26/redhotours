<?php
//Koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "redhotoursdb");
// Periksa koneksi
if (mysqli_connect_errno()) {
  die("Koneksi database gagal: " . mysqli_connect_error());
}

//jika tombol simpan diklik
if (isset($_POST['bsimpan'])) {
  //uji apakah data akan di edit atau disimpan baru
  if ($_GET['hal'] == "edit") {
    //data akan diedit
    $edit = mysqli_query($koneksi, " UPDATE paketbadalhaji set  
                                                waktu_pemesanan = '$_POST[twaktu_pemesanan]',
                                                harga_layanan = '$_POST[tharga_layanan]'
                                         WHERE id_paketbadalhaji = '$_GET[id]' ");
    if ($edit) { //jika edit sukses
      echo "<script> alert('Perubahan data sukses!');
                   document.location='admin-edit.php'
                  </script>";
    } else { //jika edit gagal
      echo "<script> alert('Perubahan data gagal!');
                   document.location='admin-edit.php'
                  </script>";
    }
  } else {
    //data akan disimpan baru
    $simpan = mysqli_query($koneksi, " INSERT INTO paketbadalhaji (waktu_pemesanan, harga_layanan)
                                                VALUES ('$_POST[twaktu_pemesanan]',
                                                        '$_POST[tharga_layanan]'
                                                        ");
    if ($simpan) { //jika simpan sukses
      echo "<script> alert('Perubahan data sukses!');
                   document.location='edit.php'
                  </script>";
    } else {
      echo "<script> alert('Perubahan data gagal!');
                   document.location='edit.php'
                  </script>";
    }
  }
}

//tombol edit
if (isset($_GET['hal'])) {
  //tampil data yang akan di edit
  if ($_GET['hal'] == "edit") {
    //tampilkan data yang akan di edit
    $tampil = mysqli_query($koneksi, "SELECT * FROM paketbadalhaji WHERE id_paketbadalhaji = '$_GET[id]'");
    $data = mysqli_fetch_array($tampil);
    if ($data) {
      //jika data ditemukan, maka data ditampung ke dalam variabel
      $vwaktu_pemesanan = $data['waktu_pemesanan'];
      $vharga_layanan = $data['harga_layanan'];
    }
  } else if ($_GET['hal'] == "hapus") {
    //persiapan hapus data
    $hapus = mysqli_query($koneksi, "DELETE FROM paketbadalhaji WHERE id_paketbadalhaji = '$_GET[id]' ");
    if ($hapus) {
      echo "<script>
            alert('hapus data sukses!');
            document.location='edit.php'
            </script>";
    }
  }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>REDHO TOURS & TRAVEL</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/logo/redhotours-black.png " rel="icon">
  <link href="assets/img/logo/redhotours-black.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Project Name: Redho Tours & Travel
  * Author: Panji adi Prasetyo.com
  ======================================================== -->

</head>

<body>


  <!-- ======= Header ======= -->
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <a href="index.html"><img src="assets/img/logo/redhotourslogotext-removebg-preview2.png" alt="" class="img-fluid"></a>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto" href="index.html">BERANDA</a></li>
          <li><a class="nav-link scrollto" href="paket-haji.php">PAKET HAJI</a></li>
          <li><a class="nav-link scrollto" href="paket-umrah.php">PAKET UMRAH</a></li>
          <li><a class="nav-link scrollto" href="paket-badal-haji.php">BADAL HAJI</a></li>
          <li><a class="nav-link scrollto active" href="paket-badal-umrah.php">BADAL UMRAH</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <main id="main">

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8  ">
            <div class="portfolio-info">
              <h3>Pemesanan Badal Umrah</h3>

              <ul>

                <?php
                $no = 1;
                $tampil = mysqli_query($koneksi, "SELECT * from paketbadalumrah order by id_paketbadalumrah desc");
                while ($data = mysqli_fetch_array($tampil)) :
                ?>


                  <label><strong>Waktu Pemesanan</strong></label>
                  <input class="form-control" type="text" value="<?= date ('d/m/Y', strtotime($data['waktu_pemesanan'])) ?>" aria-label="Disabled input example" disabled readonly>

                  <label><strong>Harga Layanan</strong></label>
                  <input class="form-control" type="text" value="IDR <?= $data['harga_layanan'] ?> / Pax" aria-label="Disabled input example" disabled readonly>

                  <label><strong>Jumlah Jamaah</strong></label>
                  <input class="form-control" required="" min="1" name="jumlah_jamaah" type="number" value="1" placeholder="Jumlah Jamaah" autocomplete="off">

                  <label><strong>Deskripsi Layanan</strong></label>

                  <div style="max-height: 500px;" class="box-keterangan-scroll">
                    <p>Badal Umrah dilaksanakan oleh Muthowif / Ustadz yang sudah berpengalaman</p>
                  </div>


                <?php endwhile; //penutup perulangan while 
                ?>

                <label><strong></strong></label>

                <div>
                  <button type="button" class="btn">Pesan Sekarang</button>
                </div>
              </ul>

            </div>
          </div>



          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Syarat & Ketentuan</h3>
              <ul>
                <li><strong>Kelayakan Peserta</strong> Badal Umrah haruslah merupakan individu yang telah mengikuti
                  perjalanan umrah sebelumnya dan memiliki keinginan untuk memberikan peluang serupa kepada orang lain.
                </li>
                <li><strong>Dokumen Dukungan</strong>
                  Peserta wajib menyertakan salinan dokumen perjalanan umrah sebelumnya sebagai bukti partisipasi
                  sebelumnya.</li>

                <li><strong>Perubahan atau pembatalan</strong> Perubahan atau pembatalan pesanan hanya dapat dilakukan
                  dalam batas waktu yang telah ditetapkan sebelum keberangkatan. Syarat dan ketentuan perubahan atau
                  pembatalan akan diberikan pada saat pemesanan.</li>

                <li><strong>Penyesuaian Biaya</strong>
                  Biaya badal umrah dapat disesuaikan berdasarkan perubahan kondisi pasar, regulasi pemerintah, atau
                  faktor-faktor lain yang memengaruhi biaya perjalanan.</li>

                <li><strong>Ketentuan Tambahan</strong>
                  Ketentuan tambahan yang berlaku dapat diinformasikan oleh Redho Tours & Travel sesuai dengan kebijakan
                  perusahaan dan regulasi pemerintah yang berlaku.</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section><!-- End Portfolio Details Section -->




  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-3 footer-info">
            <h3>Redho Tours & Travel</h3>
            <p>
              Jl. Pahlawan Raya No.97 <br>
              Rempoa Ciputat Timur Tangerang Selatan<br><br>
              <strong>Phone:</strong> (021) 749 6093<br>
              <strong>Mobile:</strong> 0811 811 0953<br>

              <strong>Email:</strong> info@redhotours.com<br>
            </p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 footer-links">
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Beranda</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Tentang Kami</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Galeri</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Team</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="faq.html">FAQ</a></li>


            </ul>
          </div>


        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright 2024 <strong><span>Redho Tours & Travel</span></strong>. All Rights Reserved.
      </div>
    </div>
  </footer><!-- End Footer -->

  <a href="https://wa.me/628989290147?text=Assalamualaikum,%20%0ARedho%20Tours%20and%20Travel,%20saya%20tertarik%20untuk%20memesan%20layanan%20Haji%20dan%20Umroh.%20%0AMohon%20informasi%20lebih%20lanjut%20mengenai%20paket,%20jadwal,%20dan%20biaya.%20Terima%20kasih!"
    class="back-to-top d-flex align-items-center justify-content-center">
    <img src="assets/img/ico/whatsapp.png" alt="WhatsApp Icon" style="width: 45px; height: 45px;">
  </a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>
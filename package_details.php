<?php
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "redhotoursdb");

// Periksa koneksi
if (mysqli_connect_errno()) {
    die("Koneksi database gagal: " . mysqli_connect_error());
}

// Ambil data paket umrah berdasarkan ID yang diberikan
if (isset($_GET['id'])) {
    $package_id = $_GET['id'];
    $query = mysqli_query($koneksi, "SELECT * FROM paketumrah WHERE id_paketumrah = $package_id");
    $package_data = mysqli_fetch_array($query);

?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">

        <title>Detail Paket Haji- <?= $package_data['nama_paket'] ?> - REDHO TOURS & TRAVEL</title>

        <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet">
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
        <link href="assets/css/style.css" rel="stylesheet">
    </head>

    <body>
        <header id="header" class="d-flex align-items-center">
            <div class="container d-flex align-items-center justify-content-between">

                <div class="logo">
                    <a href="index.html"><img src="assets/img/logo/redhotourslogotext-removebg-preview2.png" alt="" class="img-fluid"></a>
                </div>

                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a class="nav-link scrollto" href="index.html">Beranda</a></li>
                        <li><a class="nav-link scrollto" href="paket-haji.html">PAKET HAJI</a></li>
                        <li><a class="nav-link scrollto" href="paket-umrah.html">PAKET UMRAH</a></li>
                        <li><a class="nav-link scrollto" href="paket-badal-haji.html">BADAL HAJI</a></li>
                        <li><a class="nav-link scrollto" href="paket-badal-umrah.html">BADAL UMRAH</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav><!-- .navbar -->

            </div>
        </header><!-- End Header -->

        <main id="main">

    <!-- ======= Detail & Pemesanan Paket Haji ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8  ">
            <div class="portfolio-info">
              <h3>Detail & Pemesanan Paket Haji</h3>

              <ul>

                <label><strong>Nama</strong></label>
                <input class="form-control" id="namape" name="namape" value="">

                <label><strong>No Telp</strong></label>
                <input class="form-control" id="nowa" name="nowa" value="">

                <label><strong>Nama Paket Umrah</strong></label>
                <input class="form-control" id="nama" name="nama" value="<?= $package_data['nama_paket'] ?>" aria-label="Disabled input example"
                  disabled readonly>

                <label><strong>Tanggal Keberangkatan</strong></label>
                <input class="form-control" id="email" name="email" type="text" value="<?= $package_data['tanggal_keberangkatan'] ?>"
                  aria-label="Disabled input example" disabled readonly>

                  <label><strong>Akomodasi Hotel Madinah</strong></label>
                <input class="form-control" id="nama" name="nama" value="<?= $package_data['hotel_madinah'] ?>" aria-label="Disabled input example"
                  disabled readonly>

                <label><strong>Akomodasi Hotel Makkah</strong></label>
                <input class="form-control" id="email" name="email" type="text" value="<?= $package_data['hotel_makkah'] ?>"
                  aria-label="Disabled input example" disabled readonly>

                  <label><strong>Harga Layanan</strong></label>
                <input class="form-control" id="nama" name="nama" value="<?= $package_data['harga_paket'] ?> / PAX" aria-label="Disabled input example"
                  disabled readonly>

                  <label><strong>Jumlah Jamaah</strong></label>
                <input class="form-control" id="noHp" name="noHp" required="" min="1" name="jumlah_jamaah" type="number"
                  value="1" placeholder="Jumlah Jamaah" autocomplete="off">




                <label><strong></strong></label>

                <div>
                  <button type="button" class="btn" onclick="generateWhatsAppLink()">Pesan Sekarang</button>
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


        </main>

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
<?php
} else {
    // Handle the case when no package ID is provided
    echo "Invalid package ID";
}
?>
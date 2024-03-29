<?php
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "redhotoursdb");

// Periksa koneksi
if (mysqli_connect_errno()) {
    die("Koneksi database gagal: " . mysqli_connect_error());
}

// Fungsi untuk membersihkan input dari potensi ancaman SQL injection
function cleanInput($input) {
    global $koneksi;
    return mysqli_real_escape_string($koneksi, $input);
}

// Inisialisasi variabel
$username = "";
$password = "";
$pesanError = "";

// Cek apakah form login telah disubmit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form
    $username = cleanInput($_POST["username"]);
    $password = cleanInput($_POST["password"]);

    // Query untuk memeriksa keberadaan pengguna dengan username dan password yang sesuai
    $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($koneksi, $query);

    // Periksa apakah hasil query mengembalikan baris data
    if ($result && mysqli_num_rows($result) > 0) {
        // Login berhasil
        session_start();
        $_SESSION["username"] = $username;
        header("Location: admin-dashboard.php"); // Ganti dengan halaman tujuan setelah login berhasil
        exit();
    } else {
        // Login gagal
        $pesanError = "Username atau password salah.";
    }
}

// Tutup koneksi database
mysqli_close($koneksi);
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
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet">

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
        <!-- <h1 class="text-light"><a href="index.html"><span>Yean Beauty</span></a></h1> -->
        <!-- Uncomment below if you prefer to use an image logo -->
        <a href="index.html"><img src="assets/img/logo/redhotourslogotext-removebg-preview2.png" alt=""
            class="img-fluid"></a>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="index.html">Beranda</a></li>
          <li class="dropdown"><a href="javascript:void(0);"><span>Layanan Kami</span> <i
                class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="paket-haji.php">PAKET HAJI</a></li>
              <li><a href="paket-umrah.php">PAKET UMRAH</a></li>
              <li><a href="paket-badal-haji.php">BADAL HAJI</a></li>
              <li><a href="paket-badal-umrah.php">BADAL UMRAH</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="index.html">Tentang Kami</a></li>
          <li><a class="nav-link scrollto" href="galeri.html">Galeri</a></li>
          <li><a class="nav-link scrollto" href="index.html">Team</a></li>
          <li><a class="nav-link scrollto" href="index.html">Hubungi Kami</a></li>
          <li><a class="nav-link scrollto" href="admin-login.php">Login</a></li>

        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <main id="main">

    <section class="ctalogin">

      <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username" required value="<?php echo htmlspecialchars($username); ?>">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" required>
              </div>
              <button class="cta-btn" type="submit">Login</button>
            </form>
            <?php
            // Tampilkan pesan error jika login gagal
            if ($pesanError !== "") {
                echo '<div class="alert alert-danger mt-3" role="alert">' . $pesanError . '</div>';
            }
            ?>
          </div>
        </div>
      </div>
    </div>
  </div>

      </div>
    </section>


    

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-3 footer-info">
            <h3>Redho Tours & Travel</h3>
            <p>
              Jl. M.H. Thamrin No.1 <br>
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
  <script>
    function generateWhatsAppLink() {
      var nama = document.getElementById('nama').value;
      var noHp = document.getElementById('noHp').value;
      var email = document.getElementById('email').value;
      var pesan = document.getElementById('pesan').value;

      var whatsappMessage = "Assalamualaikum,\nNama saya " + nama + "\nNo WA: " + noHp + "\nEmail: " + email + "\n\n" + pesan;

      var whatsappLink = "https://wa.me/628989290147?text=" + encodeURIComponent(whatsappMessage);

      window.location.href = whatsappLink;
    }
  </script>


</body>

</html>
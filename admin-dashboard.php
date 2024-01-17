<?php
session_start();
if (!isset($_SESSION["username"])) {
    // Pengguna belum login, tampilkan notifikasi dan redirect ke halaman login
    echo '<script>alert("Anda harus login terlebih dahulu!"); window.location.href = "admin-login.php";</script>';
    exit();
}

// Proses logout jika tombol logout diklik
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["logout"])) {
    session_destroy();
    header("Location: admin-login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>REDHOTOURS ADMIN</title>
    <link href="admin/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <link href="admin/css/sb-admin-2.min.css" rel="stylesheet">
    <script>
        // Menambahkan script JavaScript untuk menangani notifikasi
        function showNotification() {
            alert("Anda harus login terlebih dahulu!");
            window.location.href = "admin-login.php";
        }
    </script>
</head>

<body id="page-top">
    <div id="wrapper">
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="admin-dashboard.php">
                <div class="sidebar-brand-text mx-3">ADMIN</div>
            </a>
            <hr class="sidebar-divider my-0">
            <hr class="sidebar-divider">
            <div class="sidebar-heading">
                REDHOTOURS ADMIN
            </div>
            <li class="nav-item active">
                <a class="nav-link" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Menu</span>
                </a>
                <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item active" href="admin-paketbadalhaji.php">Form Paket Badal Haji</a>
                        <a class="collapse-item" href="admin-paketbadalumrah.php">Form Paket Badal Umrah</a>
                        <a class="collapse-item" href="admin-pakethaji.php">Form Paket Haji</a>
                        <a class="collapse-item" href="admin-paketumrah.php">Form Paket Umrah</a>

                    </div>
                </div>
            </li>
        </ul>

        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <div class="container-fluid">
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <!-- ... (kode header) -->
                    </div>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Selamat Datang</h6>
                        </div>
                        <div class="card-body">
                            <p>
                                Selamat Datang di Dashboard Admin Redho Tour and Travel!.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
    <!-- Bootstrap core JavaScript-->
    <script src="admin/vendor/jquery/jquery.min.js"></script>
    <script src="admin/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>

</html>

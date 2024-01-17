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
        $edit = mysqli_query($koneksi, " UPDATE paketumrah set  
                                                nama_paket = '$_POST[tnama_paket]',
                                                tanggal_keberangkatan = '$_POST[ttanggal_keberangkatan]',
                                                harga_paket = '$_POST[tharga_paket]',
                                                hotel_madinah = '$_POST[thotel_madinah]',
                                                hotel_makkah = '$_POST[thotel_makkah]'
                                         WHERE id_paketumrah = '$_GET[id]' ");
        if ($edit) { //jika edit sukses
            echo "<script> alert('Perubahan data diterima!');
            document.location='admin-paketumrah.php'
                  </script>";
        } else { //jika edit gagal
            echo "<script> alert('Perubahan data ditolak!');
            document.location='admin-paketumrah.php'
                  </script>";
        }
    } else {
        //data akan disimpan baru
        $simpan = mysqli_query($koneksi, " INSERT INTO paketumrah (nama_paket, tanggal_keberangkatan, harga_paket, hotel_madinah, hotel_makkah)
                                                VALUES ('$_POST[tnama_paket]',
                                                        '$_POST[ttanggal_keberangkatan]',
                                                        '$_POST[tharga_paket]',
                                                        '$_POST[thotel_madinah]',
                                                        '$_POST[thotel_makkah]') ");
        if ($simpan) { //jika simpan sukses
            echo "<script> alert('simpan data sukses!');
                   document.location='admin-paketumrah.php'
                  </script>";
        } else {
            echo "<script> alert('simpan data gagal!');
                   document.location='admin-paketumrah.php'
                  </script>";
        }
    }
}

//tombol edit
if (isset($_GET['hal'])) {
    //tampil data yang akan di edit
    if ($_GET['hal'] == "edit") {
        //tampilkan data yang akan di edit
        $tampil = mysqli_query($koneksi, "SELECT * FROM paketumrah WHERE id_paketumrah = '$_GET[id]'");
        $data = mysqli_fetch_array($tampil);
        if ($data) {
            //jika data ditemukan, maka data ditampung ke dalam variabel
            $vnama_paket = $data['nama_paket'];
            $vtanggal_keberangkatan = $data['tanggal_keberangkatan'];
            $vharga_paket = $data['harga_paket'];
            $vhotel_madinah = $data['hotel_madinah'];
            $vhotel_makkah = $data['hotel_makkah'];
        }
    } else if ($_GET['hal'] == "hapus") {
        //persiapan hapus data
        $hapus = mysqli_query($koneksi, "DELETE FROM paketumrah WHERE id_paketumrah = '$_GET[id]' ");
        if ($hapus) {
            echo "<script>
            alert('hapus data sukses!');
            document.location='admin-paketumrah.php'
            </script>";
        }
    }
}

session_start();
if (!isset($_SESSION["username"])) {
    // Pengguna belum login, tampilkan notifikasi dan redirect ke halaman login
    echo '<script>alert("Anda harus login terlebih dahulu!"); window.location.href = "admin-login.php";</script>';
    exit();
}

// Proses logout jika tombol logout diklik
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["logout"])) {
    // Hapus semua data sesi
    session_unset();
    
    // Hancurkan sesi
    session_destroy();
    
    // Redirect ke halaman login atau halaman lain yang sesuai
    header("Location: login.php");
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
                    <a class="collapse-item" href="admin-paketbadalhaji.php">Form Paket Badal Haji</a>
                        <a class="collapse-item" href="admin-paketbadalumrah.php">Form Paket Badal Umrah</a>
                        <a class="collapse-item" href="admin-pakethaji.php">Form Paket Haji</a>
                        <a class="collapse-item active" href="admin-paketumrah.php">Form Paket Umrah</a>

                    </div>
                </div>
            </li>
        </ul>

        <!-- Awal Container Fluid -->
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <div class="container-fluid">
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    </div>

                    <!-- Awal Card Form-->
                    <div class="container">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                Form Paket Umrah
                            </div>
                            <div class="card-body">
                                <form method="post" action="">
                                    

                                    <div class="from-group">
                                        <label>Nama Paket</label>
                                        <input type="text" name="tnama_paket" value="<?= @$vnama_paket ?>" class="form-control" placeholder="-- Nama Paket --" required="">
                                        </input>
                                    </div>
                                    
                                    <div class="from-group">
                                        <label>Tanggal keberangkatan</label>
                                        <input type="text" name="ttanggal_keberangkatan" value="<?= @$vtanggal_keberangkatan ?>" class="form-control" placeholder="-- Tanggal keberangkatan --" required="">
                                        </input>
                                    </div>

                                    <div class="from-group">
                                        <label>Harga paket</label>
                                        <input type="text" name="tharga_paket" value="<?= @$vharga_paket ?>" class="form-control" placeholder="-- Harga paket --" required="">
                                        </input>
                                    </div>

                                    <div class="from-group">
                                        <label>Hotel Madinah</label>
                                        <input type="text" name="thotel_madinah" value="<?= @$vhotel_madinah ?>" class="form-control" placeholder="-- Hotel Madinah --" required="">
                                        </input>
                                    </div>

                                    <div class="from-group">
                                        <label>Hotel makkah</label>
                                        <input type="text" name="thotel_makkah" value="<?= @$vhotel_makkah ?>" class="form-control" placeholder="-- Hotel makkah --" required="">
                                        </input>
                                    </div>

                                    <br>
                                    <button type="submit" class="btn btn-success" name="bsimpan">Simpan</button>
                                    <button type="reset" class="btn btn-danger" name="breset">Kosongkan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- Akhir Card Form-->
                    <br>
                    <!-- Awal Card Tabel-->
                    <div class="container">
                        <div class="card">
                            <div class="card-header bg-success text-white">
                                Data Paket Umrah
                            </div>
                            <div class="card-body">

                                <table class="table table-bordered table-striped">
                                    <tr>
                                        <th>No.</th>
                                        <th>Nama Paket</th>
                                        <th>Tanggal keberangkatan</th>
                                        <th>Harga paket</th>
                                        <th>Hotel madinah</th>
                                        <th>Hotel makkah</th>

                                        <th>Menu</th>
                                    </tr>
                                    <?php
                                    $no = 1;
                                    $tampil = mysqli_query($koneksi, "SELECT * from paketumrah order by id_paketumrah desc");
                                    // $tampil = mysqli_query($koneksi, "SELECT * FROM paketumrah WHERE id_paketumrah = 1 ORDER BY id_paketumrah DESC");

                                    while ($data = mysqli_fetch_array($tampil)) :
                                    ?>
                                        <tr>

                                            <td><?= $no++ ?></td>
                                            <td><?= $data['nama_paket'] ?></td>
                                            <td><?= $data['tanggal_keberangkatan'] ?></td>
                                            <td><?= $data['harga_paket'] ?></td>
                                            <td><?= $data['hotel_madinah'] ?></td>
                                            <td><?= $data['hotel_makkah'] ?></td>
                                            <td>
                                                <a href="admin-paketumrah.php?hal=edit&id=<?= $data['id_paketumrah'] ?>" class="btn btn-warning"> Edit</a>
                                                <a href="admin-paketumrah.php?hal=hapus&id=<?= $data['id_paketumrah'] ?>" onclick="return confirm('Apakah yakin ingin menghapus data ini?')" class="btn btn-danger"> Hapus</a>
                                            </td>
                                        </tr>
                                    <?php endwhile; //penutup perulangan while 
                                    ?>
                                </table>

                            </div>
                        </div>
                    </div>
                    <!-- Akhir Card Tabel-->

                    
                    
                    

                </div>
            </div>
        </div>
        <!-- Akhir Container Fluid -->
    </div>
    </div>
    </div>
    <!-- Bootstrap core JavaScript-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>
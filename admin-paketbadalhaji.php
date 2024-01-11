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
            echo "<script> alert('Perubahan data diterima!');
                   document.location='admin-paketbadalhaji.php'
                  </script>";
        } else { //jika edit gagal
            echo "<script> alert('Perubahan data ditolak!');
                   document.location='admin-paketbadalhaji.php'
                  </script>";
        }
    } else {
        //data akan disimpan baru
        $simpan = mysqli_query($koneksi, " INSERT INTO paketbadalhaji (waktu_pemesanan, harga_layanan)
                                                VALUES ('$_POST[twaktu_pemesanan]',
                                                        '$_POST[tharga_layanan]'
                                                        ");
        if ($simpan) { //jika simpan sukses
            echo "<script> alert('Perubahan data diterima!');
                   document.location='edit.php'
                  </script>";
        } else {
            echo "<script> alert('Perubahan data ditolak!');
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
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="admin-index.php">
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
                                Form Paket Badal Haji
                            </div>
                            <div class="card-body">
                                <form method="post" action="">
                                    <div class="from-group">
                                        <label>Waktu Pemesanan (Tahun/Bulan/Tanggal)</label>
                                        <input type="text" name="twaktu_pemesanan" value="<?= @$vwaktu_pemesanan ?>" class="form-control" placeholder="-- Waktu pemesanan --" required="">
                                        </input>
                                    </div>
                                    <div class="from-group">
                                        <label>Harga Layanan</label>
                                        <input type="text" name="tharga_layanan" value="<?= @$vharga_layanan ?>" class="form-control" placeholder="-- Harga Layanan --" required="">
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
                                Daftar Mahasiswa
                            </div>
                            <div class="card-body">

                                <table class="table table-bordered table-striped">
                                    <tr>
                                        <th>No.</th>
                                        <th>Waktu Pemesanan (Tahun/Bulan/Tanggal)</th>
                                        <th>Harga Layanan</th>
                                        <th>Menu</th>
                                    </tr>
                                    <?php
                                    $no = 1;
                                    $tampil = mysqli_query($koneksi, "SELECT * from paketbadalhaji order by id_paketbadalhaji desc");
                                    while ($data = mysqli_fetch_array($tampil)) :
                                    ?>
                                        <tr>
                                            <td><?= $no++ ?></td>
                                            <td><?= $data['waktu_pemesanan'] ?></td>
                                            <td><?= $data['harga_layanan'] ?></td>
                                            <td>
                                                <a href="admin-paketbadalhaji.php?hal=edit&id=<?= $data['id_paketbadalhaji'] ?>" class="btn btn-warning"> Edit</a>
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
    <script src="admin/vendor/jquery/jquery.min.js"></script>
    <script src="admin/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>

</html>
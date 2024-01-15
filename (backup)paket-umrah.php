<?php
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "redhotoursdb");

// Periksa koneksi
if (mysqli_connect_errno()) {
    die("Koneksi database gagal: " . mysqli_connect_error());
}

// Memproses form ketika tombol "Tampilkan Data" ditekan
if (isset($_POST['tampilkanData'])) {
    $selectedPaket = $_POST['namaPaket'];
    $queryData = mysqli_query($koneksi, "SELECT * FROM paketumrah WHERE nama_paket = '$selectedPaket'");
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

    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

    <!-- Form untuk memilih nama paket -->
    <div class="container mt-3">
        <form method="post">
            <div class="form-group">
                <label for="namaPaket">Pilih Nama Paket Umrah:</label>
                <select class="form-control" name="namaPaket" id="namaPaket">
                    <?php
                    $query = mysqli_query($koneksi, "SELECT DISTINCT nama_paket FROM paketumrah");
                    while ($row = mysqli_fetch_assoc($query)) {
                        echo "<option value='" . $row['nama_paket'] . "'>" . $row['nama_paket'] . "</option>";
                    }
                    ?>
                </select>
            </div>
            <button type="submit" name="tampilkanData" class="btn btn-primary">Tampilkan Data</button>
        </form>

        <?php
        // Menampilkan hasil data dalam tabel dengan Bootstrap
        if (isset($queryData)) {
        ?>
            <div class="table-responsive mt-4">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID Paket Umrah</th>
                            <th>Nama Paket</th>
                            <th>Tanggal Keberangkatan</th>
                            <th>Harga Paket</th>
                            <th>Hotel Madinah</th>
                            <th>Hotel Makkah</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        while ($rowData = mysqli_fetch_assoc($queryData)) {
                            echo "<tr>
                                    <td>" . $rowData['id_paketumrah'] . "</td>
                                    <td>" . $rowData['nama_paket'] . "</td>
                                    <td>" . $rowData['tanggal_keberangkatan'] . "</td>
                                    <td>" . $rowData['harga_paket'] . "</td>
                                    <td>" . $rowData['hotel_madinah'] . "</td>
                                    <td>" . $rowData['hotel_makkah'] . "</td>
                                </tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        <?php
        }
        ?>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.

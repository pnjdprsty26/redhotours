<?php
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $noWa = $_POST['noWa'];

        $whatsappMessage = "Nama: $name%0AEmail: $email%0ASubject: $subject%0APesan: $message";
        $whatsappLink = "https://api.whatsapp.com/send?phone=$noWa&text=" . urlencode($whatsappMessage);

        header("location: $whatsappLink");
        exit();  // Ensure that no further code is executed after the header redirect
    } else {
        echo "
            <script>
            window.location=history.go(-1);
            </script>
        ";
        exit();  // Ensure that no further code is executed after the script echo
    }
?>

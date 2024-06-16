<?php
// error
$message = flash('error');
if (!empty($message)) {
    $errorData = json_encode($message); ?>
    <script>
        Swal.fire({
            icon: 'error',
            title: 'خطا',
            text: <?= $errorData ?>,
        });
    </script>
<?php  }

// success
$message = flash('success');
if (!empty($message)) {
    $errorData = json_encode($message); ?>
    <script>
        Swal.fire({
            icon: 'success',
            title: 'موفق',
            text: <?= $errorData ?>,
        });
    </script>
<?php  }?>

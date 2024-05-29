<script>
    $(document).ready(function() {
        $("#spiner").hide();
        $('#submitform').submit(function(event) {
            $("#submit").hide();
            $("#spiner").show();
            event.preventDefault();
            var formData = $(this).serialize();
            var url = $(this).data('url');
            var method = $(this).data('method');
            var successMessage = $(this).data('success-message');
            var errorMessage = $(this).data('error-message');
            $.ajax({
                type: method,
                url: url,
                data: formData,
                dataType: 'json',
                encode: true,
                success: function(response) {
                    console.log(response);
                    $("#submit").show();
                    $("#spiner").hide();
                    if (response.success) {
                        $('#alert').removeClass('error').addClass('success').text(response.message).fadeIn().delay(3000).fadeOut();
                        $('#submitform')[0].reset();
                    } else {
                        $('#alert').removeClass('success').addClass('error').text(response.message).fadeIn().delay(3000).fadeOut();
                    }
                },
                error: function(xhr, status, error) {
                    console.error(xhr.responseText);
                    $('#alert').removeClass('success').addClass('error').text(errorMessage).fadeIn().delay(3000).fadeOut();
                }
            });
        });
    });
</script>
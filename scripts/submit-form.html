<script>
    $(document).ready(function() {
        // add new buy product
        $("#submitForm").submit(function(e) {
            e.preventDefault();

            // check inputs
                function checkInputError(input) {
                    let value = $(input).val().trim();
                    if (value === "") {
                        $(input).addClass('border-error');
                    } else {
                        $(input).removeClass('border-error');
                    }
                }
                $(".checkInput").on("input", function() {
                    checkInputError(this);
                });
                $("#submit").click(function(e) {
                    let inputs = $(".checkInput");
                    let emptyInputs = [];

                    inputs.each(function() {
                        checkInputError(this);
                        if ($(this).val().trim() === "") {
                            emptyInputs.push(this);
                        }
                    });
                    if (emptyInputs.length > 0) {
                        e.preventDefault();
                        $(emptyInputs[0]).focus();
                    }
                });
                // end chack inputs


           
           

            $("#spiner").show();
            $("#submit").hide();
            $("#notification").hide();

            var formData = new FormData(this);
            $.ajax({
                type: "POST",
                url: "buy/product/store",
                data: formData,
                success: function(response) {
                    var response = JSON.parse(response);

                    if (response.status == 'success') {
                        clearImagePreviews();

                        $("#submitForm")[0].reset();

                        $("#spiner").hide();
                        $("#submit").show();
                        $("#notification").css({
                            "background-color": "#4CAF50",
                        });
                        $("#notification").show();
                        $("#notification").text(response.msg);
                        updateTable();
                    } else {
                        $("#spiner").hide();
                        $("#submit").show();
                        $("#notification").css({
                            "background-color": "#e64100",
                        });
                        $("#notification").show();
                        $(".notification").text(response.msg);
                    }

                    showNotification();
                },
                error: function(error) {
                    console.log(error);

                    $("#spiner").hide();
                    $("#submit").show();
                },
                cache: false,
                contentType: false,
                processData: false
            });
        });
    });
</script>
<script>
    $(document).ready(function() {
        $('.checkSelectErr').hide();

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

            // checked select tag
            var selectValue = $('#mySelect').val();
            if (selectValue === "" || selectValue === null) {
                $('.checkSelectErr').show();
                e.preventDefault();
                return false;
            } else {
                $('.checkSelectErr').hide();
            }
        });
    });
</script>
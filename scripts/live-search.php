<script>
  $(document).ready(function() {
      let currentIndex = -1;
      $('#customer_name').on('keydown', function(e) {
          if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter") {
              e.preventDefault();
              navigateOptions(e);
          }
      });
      $('#customer_name').on('keyup', function(e) {
          let query = $(this).val();
          if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "Enter") {
              if (query.length > 0) {
                  $.ajax({
                      url: '<?= url('search-customer') ?>',
                      method: 'POST',
                      data: {
                          customer_name: query,
                          csrf_token: $('input[name="csrf_token"]').val()
                      },
                      dataType: 'json',
                      success: function(response) {
                          let output = '';
                          if (response.status === 'success' && response.customers.length > 0) {
                              response.customers.forEach(function(customer) {
                                  output += '<li class="res search-item color" role="option">' + customer.customer_name + '</li>';
                              });
                          } else {
                              output = '<li class="res search-item color" role="option">چیزی یافت نشد</li>';
                          }
                          $('#backResponse').html(output).show();
                          currentIndex = -1;
                      },
                      error: function(xhr, status, error) {
                          $('#backResponse').html('<li class="res search-item color" role="option">خطایی رخ داد، لطفا دوباره امتحان کنید</li>').show();
                          console.log(xhr.responseText);
                      }
                  });
              } else {
                  $('#backResponse').hide();
              }
          }
      });

      function navigateOptions(e) {
          const items = $('#backResponse li');
          const container = $('#backResponse');
          if (e.key === "ArrowDown") {
              if (currentIndex < items.length - 1) {
                  currentIndex++;
                  items.removeClass('selected');
                  items.eq(currentIndex).addClass('selected');
              }
          } else if (e.key === "ArrowUp") {
              if (currentIndex > 0) {
                  currentIndex--;
                  items.removeClass('selected');
                  items.eq(currentIndex).addClass('selected');
              }
          } else if (e.key === "Enter") {
              if (currentIndex > -1) {
                  const selectedItem = items.eq(currentIndex).text();
                  $('#customer_name').val(selectedItem);
                  $('#backResponse').hide();
              }
          }
          const selectedElement = items.eq(currentIndex);
          if (selectedElement.length > 0) {
              container.scrollTop(selectedElement.position().top + container.scrollTop() - container.height() / 2);
          }
      }
      $(document).on('click', '#backResponse li', function() {
          $('#customer_name').val($(this).text());
          $('#backResponse').hide();
      });
      $('#myForm').on('submit', function(e) {
          e.preventDefault();
      });
      $(document).on('click', function(event) {
          if (!$(event.target).closest('#customer_name, #backResponse').length) {
              $('#backResponse').hide();
          }
      });
      $('#customer_name').on('focus', function() {
          if ($(this).val().length > 0) {
              $('#backResponse').show();
          }
      });
  });
</script>

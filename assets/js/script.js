const sidebar = document.querySelector('.sidebar');
const hamber = document.querySelector('.hamber');
const mainContent = document.querySelector('.content');
const appbar = document.querySelector('.appbar');
const menuToggle = document.querySelector('#menu-toggle');

hamber.addEventListener('click', function(){
     sidebar.classList.toggle('active')
     mainContent.classList.toggle('active');
     appbar.classList.toggle('active');
     menuToggle.classList.toggle('active')
})

menuToggle.addEventListener('click', function(){
     sidebar.classList.toggle('active')
     mainContent.classList.toggle('active');
     appbar.classList.toggle('active');
     menuToggle.classList.toggle('active')
})


// Sidebar submenu
$(".sidebar-dropdown-menu").slideUp("fast");
$(
  ".sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a"
).click(function (e) {
  e.preventDefault();

  if (!$(this).parent().hasClass("focused")) {
    $(this).parent().parent().find(".sidebar-dropdown-menu").slideUp("fast");
    $(this).parent().parent().find(".has-dropdown").removeClass("focused");
  }
  $(this).next().slideToggle("fast");
  $(this).parent().toggleClass("focused");
});


$('.sidebar-toggle').click(function() {
    $('.sidebar').toggleClass('collapsed')

    $('.sidebar.collapsed').mouseleave(function() {
        $('.sidebar-dropdown-menu').slideUp('fast')
        $('.sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown').removeClass('focused')
    })
})

$('.sidebar-overlay').click(function() {
    $('.sidebar').addClass('collapsed')

    $('.sidebar-dropdown-menu').slideUp('fast')
    $('.sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown').removeClass('focused')
})

if(window.innerWidth < 768) {
    $('.sidebar').addClass('collapsed')
}

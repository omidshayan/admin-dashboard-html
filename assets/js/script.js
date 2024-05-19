const sidebar = document.querySelector(".sidebar");
const hamber = document.querySelector(".hamber");
const mainContent = document.querySelector(".content");
const appbar = document.querySelector(".appbar");
const menuToggle = document.querySelector("#menu-toggle");
const left_menu_active = document.querySelector("#left-menu-active");
const settings = document.querySelector(".settings");
const setting = document.querySelector(".setting");
const closeLeftMenu = document.querySelector('.closeLeftMenu');

hamber.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
  appbar.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

menuToggle.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
  appbar.classList.toggle("active");
  menuToggle.classList.toggle("active");
});


// left menu
left_menu_active.addEventListener("click", function () {
  left_menu_active.classList.toggle("left-menu-active");
  setting.classList.toggle("active-left-menu");
});

settings.addEventListener("click", function () {
  setting.classList.toggle("active-left-menu");
  left_menu_active.classList.toggle("left-menu-active");
});
closeLeftMenu.addEventListener("click", function () {
  setting.classList.toggle("active-left-menu");
  left_menu_active.classList.toggle("left-menu-active");
});

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

$(".sidebar-toggle").click(function () {
  $(".sidebar").toggleClass("collapsed");

  $(".sidebar.collapsed").mouseleave(function () {
    $(".sidebar-dropdown-menu").slideUp("fast");
    $(
      ".sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown"
    ).removeClass("focused");
  });
});

$(".sidebar-overlay").click(function () {
  $(".sidebar").addClass("collapsed");

  $(".sidebar-dropdown-menu").slideUp("fast");
  $(
    ".sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown"
  ).removeClass("focused");
});

if (window.innerWidth < 768) {
  $(".sidebar").addClass("collapsed");
}

// dark and light mode
document.addEventListener("DOMContentLoaded", function () {
  let darkModeEnabled = localStorage.getItem("darkModeEnabled");
  if (darkModeEnabled === "true") {
    document.body.classList.add("light-mode");
  }
});
function toggleDarkMode() {
  let body = document.body;
  body.classList.toggle("light-mode");
  let darkModeEnabled = body.classList.contains("light-mode");
  localStorage.setItem("darkModeEnabled", darkModeEnabled);
}

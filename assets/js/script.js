const sidebar = document.querySelector(".sidebar");
const hamber = document.querySelector(".hamber");
const mainContent = document.querySelector(".content");
const appbar = document.querySelector(".appbar");
const menuToggle = document.querySelector("#menu-toggle");
const left_menu_active = document.querySelector("#left-menu-active");
const settings = document.querySelector(".settings");
const setting = document.querySelector(".setting");
const closeLeftMenu = document.querySelector(".closeLeftMenu");

// events
const show_msg = document.querySelector(".show-msg");
const notif_events = document.querySelector(".notif-events");
const shwo_msg_events = document.querySelector(".show-msg-events");

// Function to close menu
function closeMenu() {
  shwo_msg_events.classList.remove("active");
}

// Toggle menu when clicking the icon
show_msg.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent click event from propagating to document
  shwo_msg_events.classList.toggle("active");
});

// Close menu when clicking outside the menu
document.addEventListener("click", function (event) {
  const targetElement = event.target;

  // Check if the clicked element is not the menu or the icon, then close the menu
  if (
    !targetElement.closest(".show-msg-events") &&
    !targetElement.closest(".show-msg")
  ) {
    closeMenu();
  }
});

notif_events.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent click event from propagating to document
  shwo_msg_events.classList.toggle("active");
});

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

// collapse
const accor = document.querySelectorAll(".accordion-title");

accor.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
    const content = item.nextElementSibling;
    if (content.style.height) {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + "px";
    }
  });
});

// enable checkbox
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("start");
  const dateTimeInput = document.getElementById("time_start");

  function toggleDateTimeInput() {
    if (checkbox.checked) {
      dateTimeInput.removeAttribute("disabled");
      dateTimeInput.classList.remove("grayed-out");
    } else {
      dateTimeInput.setAttribute("disabled", "disabled");
      dateTimeInput.classList.add("grayed-out");
    }
  }

  toggleDateTimeInput();

  checkbox.addEventListener("change", toggleDateTimeInput);
});
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("end");
  const dateTimeInput = document.getElementById("time_end");

  function toggleDateTimeInput() {
    if (checkbox.checked) {
      dateTimeInput.removeAttribute("disabled");
      dateTimeInput.classList.remove("grayed-out");
    } else {
      dateTimeInput.setAttribute("disabled", "disabled");
      dateTimeInput.classList.add("grayed-out");
    }
  }

  toggleDateTimeInput();

  checkbox.addEventListener("change", toggleDateTimeInput);
});

// start modals
var modalInfo = document.getElementById("showInfosModal");
var btnInfo = document.getElementById("showModalBtn");
var closeModal = document.getElementsByClassName("modalClose")[0];
btnInfo.onclick = function () {
  modalInfo.style.display = "block";
};
closeModal.onclick = function () {
  modalInfo.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modalInfo) {
    modalInfo.style.display = "none";
  }
};

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document.getElementById("cancelBtn").onclick = function () {
  modal.style.display = "none";
};
document.getElementById("confirmBtn").onclick = function () {
  var email = document.getElementById("emailInput").value;
  modal.style.display = "none";
};
// end modals

// show password icon
function togglePasswordVisibility() {
  const passwordInput = document.querySelector('input[name="password"]');
  const passwordToggle = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
              <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
          </svg>`;
  } else {
    passwordInput.type = "password";
    passwordToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
          </svg>`;
  }
}

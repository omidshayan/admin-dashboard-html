document.addEventListener("DOMContentLoaded", function () {
  var mainCheckboxes = document.querySelectorAll(".main-checkbox-select");
  var innerCheckboxes = document.querySelectorAll(".inner-checkbox-select");

  innerCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      var parentId = this.getAttribute("data-parent");
      var parentCheckbox = document.getElementById(parentId);

      var allChecked = Array.from(
        document.querySelectorAll(`input[data-parent='${parentId}']`)
      ).every((cb) => cb.checked);
      var anyChecked = Array.from(
        document.querySelectorAll(`input[data-parent='${parentId}']`)
      ).some((cb) => cb.checked);

      if (anyChecked) {
        parentCheckbox.checked = true;
      } else {
        parentCheckbox.checked = false;
      }
    });
  });

  mainCheckboxes.forEach(function (checkbox) {
    checkbox.style.display = "none";
  });

  var accordionButtons = document.querySelectorAll(".accordion-button-select");
  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var content = this.nextElementSibling;
      var isOpen = content.style.maxHeight;

      // بستن تمامی منوهای باز قبل از باز کردن منوی جدید
      var allContents = document.querySelectorAll(".accordion-content-select");
      allContents.forEach(function (cont) {
        cont.style.maxHeight = null;
      });

      if (isOpen) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

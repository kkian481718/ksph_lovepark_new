/*!
 * Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Activate SimpleLightbox plugin for portfolio items
  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });
});

// smtp JS
const form = document.querySelector("form");
const Name = document.getElementById("name");
const FormEmail = document.getElementById("email");
const Phone = document.getElementById("phone");
const Message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `姓名： ${Name.value}<br>
    Email： ${FormEmail.value}<br>
    電話： ${Phone.value}<br>
    訊息： ${Message.value}`;
  
  Email.send({
    SecureToken: "977053ee-6491-4e2e-884e-0932e6357838",
    To: "miffyptmail@gmail.com",
    From: "miffyptmail@gmail.com",
    Subject: "【愛心園官網】有人傳送了訊息！",
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "發送成功！",
        text: "您的訊息已成功送出",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "發送失敗！",
        text: "您的訊息無法被送出，請稍後再嘗試。（" + message + "）",
        icon: "error",
      });
    }
  });
}

function checkInput() {
  const items = document.querySelectorAll(".form-control");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("is-invalid");
      item.parentElement.classList.add("is-invalid");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", function () {
      checkEmail();
    });

    item.addEventListener("keyup", function () {
      if (item.value!= "") {
        item.classList.remove("is-invalid");
        item.parentElement.classList.remove("is-invalid");
      } else {
        item.classList.add("is-invalid");
        item.parentElement.classList.add("is-invalid");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  const errorTxtEmail = document.querySelector(".invalid-feedback.email")

  if (!FormEmail.value.match(emailRegex)) {
    FormEmail.classList.add("is-invalid");
    FormEmail.parentElement.classList.add("is-invalid");

    if (emailRegex.value != "") {
      errorTxtEmail.innerText = "Email 格式不正確";
    } else {
      errorTxtEmail.innerText = "請填入您的 Email";
    }

  } else {
    FormEmail.classList.remove("is-invalid");
    FormEmail.parentElement.classList.remove("is-invalid");
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkInput();

  if (!Name.classList.contains("is-invalid") && !FormEmail.classList.contains("is-invalid") && 
    !Phone.classList.contains("is-invalid") && !Message.classList.contains("is-invalid")) {
    console.log("OK");
    sendEmail();
  }
  
});
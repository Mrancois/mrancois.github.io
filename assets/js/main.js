function submitContact() {
  var URL_MAIL = "https://script.google.com/macros/s/AKfycbwF86EBohR2neIyCjj7IXcd3eo03HSbsWEQQc3bWZM_DSIoNGo/exec"
  var email = document.getElementById("emailInput");
  var name = document.getElementById("nameInput");
  var subject = document.getElementById("subjectInput");
  var message = document.getElementById("messageInput");

  var mail = {
    "name": name.value,
    "email": email.value,
    "subject": subject.value,
    "message": message.value
  };

  fetch(URL_MAIL, {
    method: 'post',
    mode: 'no-cors',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(mail)
  }).then(function(response) {
    var contactForm = document.getElementById("contact__form");
    contactForm.classList.add('no-display');
    if (response.status === 0) {
      // OK
      var contactForm_success = document.getElementById("contact__form--success");
      contactForm_success.classList.remove('no-display');
    } else {
      // ERROR
      var contactForm_error = document.getElementById("contact__form--error");
      contactForm_error.classList.remove('no-display');
    }
  });
}

function clickMenu(element) {
  var el = document.getElementById('sc' + element.innerHTML);
  scrollIt(el);
}

function scrollIt(element) {
   // 55 (size_header) + 20 (margin_separator)
  var offsetHeigh = (window.innerWidth >= 767) ? (55 - 20 ) : (83 - 20);

  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop - offsetHeigh // 55 (size of header) + 20 (margin separator)
  });
}


window.onload = function() {
  // lazyload ?
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
      img.removeAttribute('data-src');
    };
  });

  // init ISOTOPE
  var postElement = document.getElementById("post");
  if (postElement) {
    var iso = new Isotope('#post', {
      itemSelector: '.post__item',
      layoutMode: 'fitRows',
      isFitWidth: true
    });
  }

  var filtersElem = document.getElementById("filters");
  if (filtersElem) {
    filtersElem.addEventListener( 'click', function( event ) {
      // only work with buttons
      if (!matchesSelector( event.target, 'button' ) ) {
        return;
      }

      var allBtn = document.querySelectorAll('.button-filter');

      // remove class is-checked from all class
      for (var i = 0; i < allBtn.length; i++) {
        allBtn[i].classList.remove('is-checked');
      }
      // add class is-check on the clicked element
      event.target.classList.add('is-checked');

      var filterValue = event.target.getAttribute('data-filter');
      // use matching filter function
      iso.arrange({ filter: filterValue });
    });
  }

  var email = document.getElementById("emailInput");
  var name = document.getElementById("nameInput");
  var subject = document.getElementById("subjectInput");
  var message = document.getElementById("messageInput");
  var btnSend = document.getElementById("btnSend");

  if (email) {
    [email, name, subject, message].forEach(function(elem) {
      elem.addEventListener("input", function() {
        if(email.value && name.value && subject.value && message.value) {
          btnSend.disabled = false;
          btnSend.classList.remove('disable-btn');
          btnSend.classList.add('enable-btn');
        }
      });
    });
  }
}

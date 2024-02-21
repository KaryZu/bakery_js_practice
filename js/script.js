
// contacto.html
// Map 

function initializeMap() {
  var mymap = L.map('map').setView([36.7161368, -4.4264715], 15);

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
    }).addTo(mymap);

  var markerIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  L.marker([36.7149057, -4.4328213], {
    draggable: false,
    icon: markerIcon
  }).addTo(mymap)
    .bindPopup("<b>Cary Bakery</b> <br> street Alferez Delgado 5 <br> Tel: 34-528-26-48");

  L.Routing.control({
    waypoints: [
      L.latLng(36.7179382, -4.4299768),
      L.latLng(36.7149057, -4.4328213)
    ],
    routeWhileDragging: true
  }).addTo(mymap);
}


// Mane page index.html
// Section News 

function loadNews() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      show(xmlhttp);
    }
  };

  xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xmlhttp.send();

  function show(xmlhttp) {
    var responseJsonObj = JSON.parse(xmlhttp.responseText);

    var htmlString = '';
    for (var i = 0; i < 5; i++) {
      htmlString += `<div>
        <a class='newsLink' href='https://jsonplaceholder.typicode.com/posts' target="_blank">
        <h3>${responseJsonObj[i].title}</h3>
        <p>${responseJsonObj[i].body}</p></a>
      </div>`
    }
    document.getElementById('cajaNews').innerHTML = htmlString;
  }
}


// Page presupuesto.html

function sendForm() {
  // validar Name
  var nameOfUser = document.getElementById('input1').value
  if (nameOfUser === '') {
    alert('Please, enter your name');
    datos.name.focus();
    return false;
  }
  if (!/^[a-zA-Z]+$/.test(nameOfUser)) {
    alert('Please, use only letters for your name');
    datos.name.focus();
    return false;
  }
  if (nameOfUser.length > 15) {
    alert('Input length should be not more than 15 characters');
    datos.name.focus();
    return false;
  }

  // validar Surname
  var surNameOfUser = document.getElementById('input2').value
  if (surNameOfUser === '') {
    alert('Please, enter your Surname');
    datos.surname.focus();
    return false;
  }
  if (!/^[a-zA-Z]+$/.test(surNameOfUser)) {
    alert('Please, use only letters for your Surname');
    datos.surname.focus();
    return false;
  }
  if (nameOfUser.length > 40) {
    alert('Input length should be not more than 40 characters');
    datos.surname.focus();
    return false;
  }

  // Validar email

  var emailOfUser = document.getElementById('input3').value;
  var regexpEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/
  if (emailOfUser === '') {
    alert('Please, enter your email');
    datos.email.focus();
    return false;
  }
  if (!regexpEmail.test(emailOfUser)) {
    alert('Your email is not correct. Please, enter your email');
    datos.email.focus();
    return false;
  }

  // Validar telephone
  var telephoneOfUser = document.getElementById('input4').value;
  var regexpTelephone = /^(6|7|8|9)[0-9]{8}$/
  if (telephoneOfUser === '') {
    alert('Please, enter your phonenumber');
    datos.telefono.focus();
    return false;
  }
  if (!regexpTelephone.test(telephoneOfUser)) {
    alert('Please, enter your correct phonenumber');
    datos.telefono.focus();
    return false;
  }
  if (!(/^\d{9}$/.test(telephoneOfUser))) {
    alert('Please, enter your correct phonenumber');
    datos.telefono.focus();
    return false;
  }

  // Validar option
  var option = document.getElementById('selectOption').value
  if (option == 0) {
    alert('Please, select option');
    return false;
  }

  // Amount of desserts
  var amount = document.getElementById('amount').value
  if (amount == '' || amount == 0) {
    alert('Please enter amount of dessert');
    return false;
  }

  // Validar privacy
  var privacyCheck = document.getElementById('check4');
  if (!privacyCheck.checked) {
    alert('Please, read and agree with privacy policy');
    return false;
  }

  alert('Sent successfully!')
}


function calculate() {
  var option = document.getElementById('selectOption').value;
  var priceforOne = 0;

  // Croissants
  if (option == 1) {
    priceforOne = 1.65;
  }
  // Cakes
  if (option == 2) {
    priceforOne = 20;
  }
  // Muffins
  if (option == 3) {
    priceforOne = 2.14;
  }

  // Double chocolate topping
  var inputcheck2 = document.getElementById('check2');
  if (inputcheck2.checked) {
    var priceforOneTopping = 1.5;
    priceforOne += priceforOneTopping;
  }

  var amount = Number(document.getElementById('amount').value);
  var total = priceforOne * amount;

  // Gift wrap
  var inputcheck1 = document.getElementById('check1');
  if (inputcheck1.checked) {
    var priceforBox = 10;
    total += priceforBox;
  }

  // Add ice cream
  var inputcheck3 = document.getElementById('check3');
  if (inputcheck3.checked) {
    var addIceCream = 5;
    total += addIceCream;
  }

  var totalstring = total.toFixed(2) + '$';
  document.getElementById('pricetotal').value = totalstring;
}


// On privacy check chang
function privacy() {
  var privacyCheck = document.getElementById('check4');
  if (!privacyCheck.checked) {
    document.getElementById("submit").disabled = true;
  } else {
    document.getElementById("submit").disabled = false;
  }
}






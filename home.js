const delivery = document.getElementById('delivery');
const pickUp = document.getElementById('pickUp');
const deliveryForm = document.getElementById('deliveryForm');
const phone = document.getElementById('phone');
const name1 = document.getElementById('name');
const city = document.getElementById('city');
const street = document.getElementById('street');
const apartment = document.getElementById('apartment');
const floor = document.getElementById('floor');
const login = document.getElementById('login');
const notes = document.getElementById('notes');
const submit = document.getElementById('submit');
delivery.onclick = () => {
  deliveryForm.style.visibility = "visible";
  submit.style.visibility = "visible";
};

function validateInput(input) {
  input.value = input.value.replace(/\D/g, '').slice(0, 10);
}
phone.onchange = () => {
  sessionStorage.setItem('phone', JSON.stringify(phone.value));
  const details = JSON.parse(localStorage.getItem(phone.value));
  if (details) {
    if (details.city)
      city.value = details.city;
    name1.value = details.name;
    if (details.street)
      street.value = details.street;
    apartment.value = details.apartment;
    floor.value = details.floor;
    login.value = details.login;
    if (details.notes)
      notes.value = details.notes;

  }
}
pickUp.onclick = () => {
  if (phone.value === '' || name1.value === '') {
    // Display an error message or perform other actions
    alert('Please fill in all fields');
  }

  else {
    sessionStorage.setItem('delivery', JSON.stringify(false));
    details = JSON.parse(localStorage.getItem(phone.value));
    if (details) {
      details.name = name1.value;
      localStorage.setItem(phone.value, JSON.stringify(details));
    }
    else {
      const det = {
        phone: phone.value,
        name: name1.value
      }
      localStorage.setItem(phone.value, JSON.stringify(det));
    }
    window.location.href = 'restaurant.html';
  }

}
submit.onclick = () => {
  if (phone.value === '' || name1.value === '' || city.value === '' || street.value === '' || apartment.value === '') {
    alert('נא למלא את כל הפרטים.');
  }
  else {
    sessionStorage.setItem('delivery', JSON.stringify(true));
    const det = {
      phone: phone.value,
      name: name1.value,
      city: city.value,
      street: street.value,
      apartment: apartment.value,
      floor: floor.value,
      login: login.value,
      notes: notes.value
    }
    localStorage.setItem(phone.value, JSON.stringify(det));
    window.location.href = 'restaurant.html';
  }
}

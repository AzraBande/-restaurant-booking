document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  if (!name || !email || !date || !time || !guests) {
    alert("Please fill in all fields.");
    return;
  }

  // Store to localStorage (mock backend)
  const reservation = { name, email, date, time, guests };
  const stored = JSON.parse(localStorage.getItem("reservations") || "[]");
  stored.push(reservation);
  localStorage.setItem("reservations", JSON.stringify(stored));

  window.location.href = "confirmation.html";
});
// main.js: Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// booking.js: form handling
document.getElementById('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  const fields = ['name','email','date','time','guests'];
  let valid = fields.every(id => document.getElementById(id).value.trim() !== '');
  if (!valid) return alert('Please fill in all fields.');

  const reservation = fields.reduce((acc,id) => {
    acc[id] = document.getElementById(id).value.trim(); return acc;
  }, {});
  const stored = JSON.parse(localStorage.getItem('reservations') || '[]');
  stored.push(reservation);
  localStorage.setItem('reservations', JSON.stringify(stored));
  window.location = 'confirmation.html';
});

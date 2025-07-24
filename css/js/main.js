// Theme toggler 🌗
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
// main.js: Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
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

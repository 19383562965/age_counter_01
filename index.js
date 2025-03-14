document.getElementById('button').onclick = function() {
  let year = document.getElementById('year').value;
  let age = 2025 - Number(year);
  document.getElementById('age').textContent = age;
};
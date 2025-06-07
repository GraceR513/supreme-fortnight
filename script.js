document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Retrieve input values
  const make = document.getElementById('make').value.trim();
  const model = document.getElementById('model').value.trim();
  const topSpeed = document.getElementById('topSpeed').value.trim();


  // Create a new table row
  const tableBody = document.getElementById('userTableBody');
  const newRow = tableBody.insertRow();

  const makeCell = newRow.insertCell(0);
  const modelCell = newRow.insertCell(1);
  const topSpeedCell = newRow.insertCell(2);

  makeCell.textContent = make;
  modelCell.textContent = model;
  topSpeedCell.textContent = topSpeed;

  // Reset form
  document.getElementById('userForm').reset();
});

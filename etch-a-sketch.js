const grid = document.querySelector('#grid-container');

for (let i = 0; i < 16; i++) {
  let row = document.createElement('div');
  row.classList.add('row');

  grid.appendChild(row);
}
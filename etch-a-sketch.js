const grid = document.querySelector('#grid-container');

// * Loop to create and add all the cells in the grid
for (let i = 0; i < 16; i++) {
  let row = document.createElement('div');
  row.classList.add('row');

  for (let j = 0; j < 16; j++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    row.appendChild(cell);
  }

  grid.appendChild(row);
}

// * Select all the cells and make them black on hover
const allCells = document.querySelectorAll('.cell')

allCells.forEach(cell => {
  cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = 'black';
  })
})

// * Prompt to get the number of cells per side
const cellNumberButton = document.querySelector('#grid-size');

cellNumberButton.addEventListener('click', () => {
  let squaresPerSide = prompt('Enter the number of squares per side between from 1-100', );
  
  while (true) {
    
  }
})
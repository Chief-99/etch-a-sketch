const grid = document.createElement('div');
grid.id = 'grid-container';
document.body.appendChild(grid);

// // * Loop to create and add all the cells in the grid
// for (let i = 0; i < 16; i++) {
//   let row = document.createElement('div');
//   row.classList.add('row');

//   for (let j = 0; j < 16; j++) {
//     let cell = document.createElement('div');
//     cell.classList.add('cell');
//     row.appendChild(cell);
//   }

//   grid.appendChild(row);
// }

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
  let squaresPerSide;

  while(true) {
    squaresPerSide = Number(prompt('Enter the number of squares per side between 1 and 100.'));

    if (isNaN(squaresPerSide)) {
      alert('Please enter a valid number.');
    } else if (squaresPerSide < 1 || squaresPerSide > 100) {
      alert('Please enter a number between 1 and 100.');
    } else {
      break;
    }
  }
})

createGrid();
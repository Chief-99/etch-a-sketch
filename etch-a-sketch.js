let squaresPerSide = 16;

function createGrid() {
  const existingGrid = document.getElementById('grid-container');
  if (existingGrid) {
    document.body.removeChild(existingGrid);
  }

  const grid = document.createElement('div');
  grid.id = 'grid-container';
  document.body.appendChild(grid);

  // * Loop to create and add all the cells in the grid
  for (let i = 0; i < squaresPerSide; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
  
    for (let j = 0; j < squaresPerSide; j++) {
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
}

createGrid();

// * Function to generate a random number
let number;  
function generateRandomNumber() {
  
}

// * Prompt to get the number of cells per side
const cellNumberButton = document.querySelector('#grid-size');

cellNumberButton.addEventListener('click', () => {
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

  createGrid();
})
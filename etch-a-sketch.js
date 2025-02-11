let squaresPerSide = 16;

function createGrid() {
  const existingGrid = document.getElementById('grid-container');
  if (existingGrid) {
    document.body.removeChild(existingGrid);
  }

  const grid = document.createElement('div');
  grid.id = 'grid-container';
  document.body.appendChild(grid);

  // Loop to create and add all the cells in the grid
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

  cellEventListeners();
}

// Buttons to change the colour of the squares
const randomButton = document.getElementById('random-colour');
const blackButton = document.getElementById('black-colour');

// Generate a random colour
const randomColour = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`
};

// Function to clear the cells
function clearCells(event) {
  const allCells = document.querySelectorAll('.cell');  
  allCells.forEach(cell => {
    cell.style.backgroundColor = '';
  });
}

// Function to progressively raise the opacity
function raiseOpacity() {
  for (let i = 1; i <= 10; i++) {
    const allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => {
      cell.style.opacity = `${i * 10}%`;
    })
  }
}

// Function to handle cell hover 
let currentColour = 'black';

function handleCellHover(event) {
  if (currentColour === 'random') {
    event.target.style.backgroundColor = randomColour();
  } else if (currentColour === 'black') {
    event.target.style.backgroundColor = 'black';
  }
}

// Add event listeners to the cells
function cellEventListeners() {
  const allCells = document.querySelectorAll('.cell');  
  allCells.forEach(cell => {
    cell.addEventListener('mouseover', handleCellHover);
  });
}

// Add event listeners to the buttons
randomButton.addEventListener('click', () => {
  currentColour = 'random';
  clearCells();
});

blackButton.addEventListener('click', () => {
  currentColour = 'black';
  clearCells();
  raiseOpacity();
})

// Prompt to get the number of cells per side
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


createGrid();
cellEventListeners();
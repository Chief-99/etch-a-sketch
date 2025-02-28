let squaresPerSide = 16;

function createGrid() {
  const gridPlaceholder = document.getElementById('grid-placeholder');
  const existingGrid = document.getElementById('grid-container');
  if (existingGrid) {
    gridPlaceholder.removeChild(existingGrid);
  }

  const grid = document.createElement('div');
  grid.id = 'grid-container';
  gridPlaceholder.appendChild(grid);


  // Loop to create and add all the cells in the grid
  for (let i = 0; i < squaresPerSide; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
  
    for (let j = 0; j < squaresPerSide; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.background = 'rgba(255, 255, 255, 0)';
      row.appendChild(cell);
    }
  
    grid.appendChild(row);
  }

  const currentGridSize = document.body.querySelector('.current-grid-size');
  currentGridSize.textContent = `${squaresPerSide} x ${squaresPerSide}`;

  cellEventListeners(); // Add event listeners after the grid is created
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
    cell.style.background = 'rgba(0, 0, 0, 0)';
  });
}

// Function to handle colour changes on cell hover 
let currentColour = 'black';

function handleCellHover(event) {
  let cell = event.target;
  let currentOpacity = parseFloat(cell.style.background.split(',')[3]);

  if (currentColour === 'random') {
    event.target.style.backgroundColor = randomColour();
    cell.style.opacity = '1';
  } else if (currentColour === 'black') {
    event.target.style.backgroundColor = 'black';

    if (isActive) {
      if (currentOpacity < 1) {
        cell.style.background = `rgba(0, 0, 0, ${(currentOpacity + 0.1).toFixed(1)})`;
      }
    }
  }
}

// Function to increase opacity 
const toggleShadingButton = document.querySelector('#toggle-shading');
const shadingCheckbox = document.querySelector('#shading-checkbox');
let isActive = false; 
shadingCheckbox.checked = false;

toggleShadingButton.addEventListener('click', () => {
  isActive = !isActive; // Toggle the isActive flag
  shadingCheckbox.checked = !shadingCheckbox.checked;
})



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
  randomFlag = true;
  blackFlag = false;
  activeColourMode();
});

blackButton.addEventListener('click', () => {
  currentColour = 'black';
  clearCells();
  blackFlag = true;
  randomFlag = false;
  activeColourMode();
})

// Change button appearance based on which colour mode is active
let blackFlag = true;
let randomFlag;
function activeColourMode() {
  if (blackFlag == true) {
    blackButton.style.backgroundColor = 'var(--active-purple)';
    randomButton.style.backgroundColor = 'var(--blue-400)';
  } else if (randomFlag == true) {
    randomButton.style.backgroundColor = 'var(--active-purple)';
    blackButton.style.backgroundColor = 'var(--blue-400)';
  }
}

// Clear button 
const clearButton = document.querySelector('.clear-grid');
clearButton.addEventListener('click', clearCells);

// Prompt to get the number of cells per side
const cellNumberButton = document.querySelector('#grid-size-button');

cellNumberButton.addEventListener('click', (tempGridSize) => {
  while(true) {
    tempGridSize = prompt('Enter the number of squares per side between 1 and 100.');

    if (tempGridSize === null) {
      break;
    } else {
      squaresPerSide = Number(tempGridSize);
    }

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
activeColourMode();
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const newGridBtn = document.getElementById('newGridBtn');

    function createGrid(size) {
        // Clear existing grid
        container.innerHTML = '';

        // Calculate the size of each grid item
        const containerSize = 960; // Container size in pixels
        const itemSize = containerSize / size;

        // Set grid template
        container.style.gridTemplateColumns = `repeat(${size}, ${itemSize}px)`;
        container.style.gridTemplateRows = `repeat(${size}, ${itemSize}px)`;

        // Create new grid
        for (let i = 0; i < size * size; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            
            // Set the size of each grid item
            gridItem.style.width = `${itemSize}px`;
            gridItem.style.height = `${itemSize}px`;
            
            gridItem.addEventListener('mouseover', function() {
                this.style.backgroundColor = 'blue';
            });
            
            container.appendChild(gridItem);
        }
    }

    newGridBtn.addEventListener('click', function() {
        let size = prompt("Enter the number of squares per side for the new grid (max 100):");
        size = parseInt(size);
        if (isNaN(size) || size < 1 || size > 100) {
            alert("Please enter a valid number between 1 and 100.");
            return;
        }
        createGrid(size);
    });

    // Initial grid creation
    createGrid(16);
});
let table = document.body.firstElementChild;

// let rows = table.getElementsByTagName('tr');

// // Loop through rows and color the diagonal cells in red
// for (let i = 0; i < rows.length; i++) {
//   let cells = rows[i].getElementsByTagName('td');

//   // Check if the cell is on the diagonal (row index === column index)
//   if (i < cells.length) {
//     cells[i].style.backgroundColor = 'red';
//   }
// }

let cells = document.querySelectorAll('table td');

    // Loop through cells and color the diagonal cells in red
    for (let i = 0; i < cells.length; i++) {
      // Check if the cell is on the diagonal (row index === column index)
      if (i % 6 === 0) { // Assuming a square matrix, change 6 to the number of columns if needed
        cells[i].style.backgroundColor = 'red';
      }
    }
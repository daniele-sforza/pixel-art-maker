// Select table and size form
const canvas = $('#pixel_canvas');
const sizePicker = $('#sizePicker');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // Select size input
    let gridHeight = $('#input_height').val();
    let gridWidth = $('#input_width').val();
    // Clear canvas
    canvas.children().remove();
    // Nested loop to create rows and columns
    for (let i = 1; i <= gridHeight; i++) {
        let rowHtml = "";
        rowHtml += "<tr>";
        for (let i = 1; i <= gridWidth; i++) {
            rowHtml += "<td></td>";
        }
        canvas.append(rowHtml + "</tr>");
    }
}

// Set onSubmit event to makeGrid
sizePicker.submit(function(evnt) {
    evnt.preventDefault();
    makeGrid();
});

// Function to color a cell:
function colorCell(evnt) {
    // Prevent triggering of default click events (like dragging table or cells)
    evnt.preventDefault();
    // if left click then color cell else empty cell
    let color = '';
    switch (evnt.buttons) {
        case 1: // left click
            color = $('#colorPicker').val();
            break;
        case 2:  // right click
            color = '#ffffff';
            break;
    }
    if (color !== '') {
        $(this).css('background-color', color);
    }
}
// Color a cell when clicking and when moving over it, empty a cell on right click
canvas.on('mousedown mouseover contextmenu', 'td', colorCell);

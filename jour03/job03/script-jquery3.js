$(document).ready(function () {
    const gameBoard = $('#game-board');
    let emptyCell = $('#GCell9'); // La cellule vide

    function getCellPosition(cell) {
        return cell.index();
    }

    function getMovableCells(emptyPos) {
        let cells = [];
        let row = Math.floor(emptyPos / 3);
        let col = emptyPos % 3;

        if (col > 0) cells.push(emptyPos - 1);
        if (col < 2) cells.push(emptyPos + 1);
        if (row > 0) cells.push(emptyPos - 3);
        if (row < 2) cells.push(emptyPos + 3);

        return cells;
    }

    gameBoard.on('click', '.game-tile', function () {
        let clickedCell = $(this);
        let emptyPos = getCellPosition(emptyCell);
        let clickedPos = getCellPosition(clickedCell);

        if (getMovableCells(emptyPos).includes(clickedPos)) {
            // Échange l'image avec la case vide
            let tempHTML = emptyCell.html();
            emptyCell.html(clickedCell.html());
            clickedCell.html(tempHTML);

            // Met à jour la case vide
            emptyCell = clickedCell;
        }
    });

    $("#restartButton").click(function () {
        location.reload();
    });
});
















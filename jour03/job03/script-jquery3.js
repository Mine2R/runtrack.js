$(document).ready(function() {
    const tiles = [1, 2, 3, 4, 5, 6, 7, 8, null];
    let emptyTileIndex = tiles.indexOf(null);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createTiles() {
        const gameBoard = $('#game-board');
        gameBoard.empty();
        tiles.forEach((tile, index) => {
            if (tile !== null) {
                const div = $('<div></div>')
                    .addClass('tile')
                    .css('left', `${(index % 3) * 100}px`)
                    .css('top', `${Math.floor(index / 3) * 100}px`)
                    .attr('data-index', index);
                const img = $(`#pieces img:nth-child(${tile})`).clone();
                div.append(img);
                div.on('click', moveTile);
                gameBoard.append(div);
            }
        });
    }

    function moveTile() {
        const index = parseInt($(this).attr('data-index'));
        const emptyIndex = tiles.indexOf(null);
        const diff = Math.abs(index - emptyIndex);
        if (diff === 1 || diff === 3) {
            [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
            updateTiles();
            checkWin();
        }
    }

    function updateTiles() {
        createTiles();
    }

    function checkWin() {
        const isWin = tiles.every((tile, index) => tile === index + 1 || (tile === null && index === 8));
        const message = $('#message');
        if (isWin) {
            message.text('Vous avez gagné !').show();
            $('#restartButton').show();
        } else {
            message.hide();
        }
    }

    function restartGame() {
        shuffle(tiles);
        updateTiles();
        $('#message').hide();
        $('#restartButton').hide();
    }

    $('#restartButton').on('click', restartGame);

    shuffle(tiles);
    createTiles();
});






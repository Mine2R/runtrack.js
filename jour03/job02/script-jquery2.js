$(document).ready(function() {
    const correctOrder = [
        'img arc en ciel/arc1.png',
        'img arc en ciel/arc2.png',
        'img arc en ciel/arc3.png',
        'img arc en ciel/arc4.png',
        'img arc en ciel/arc5.png',
        'img arc en ciel/arc6.png'
    ];
    let currentOrder = [...correctOrder];

    function shuffleImages() {
        currentOrder.sort(() => Math.random() - 0.5);
        updateImages();
        $('#message').text('');
    }

    function updateImages() {
        const $imageContainer = $('#imageContainer');
        $imageContainer.empty();
        currentOrder.forEach((src, index) => {
            const $img = $('<img>').attr('src', src).attr('data-position', index + 1).attr('draggable', true);
            $imageContainer.append($img);
        });
    }

    function checkOrder() {
        const isCorrect = currentOrder.every((src, index) => src === correctOrder[index]);
        const $message = $('#message');
        if (isCorrect) {
            $message.text('Vous avez gagné').css('color', 'green');
        } else {
            $message.text('Vous avez perdu').css('color', 'red');
        }
    }

    $('#shuffleButton').click(shuffleImages);

    $('#imageContainer').on('click', 'img', function() {
        const $img = $(this);
        const src = $img.attr('src');
        const index = currentOrder.indexOf(src);

        if (index < currentOrder.length - 1) {
            [currentOrder[index], currentOrder[index + 1]] = [currentOrder[index + 1], currentOrder[index]];
            updateImages();
            checkOrder();
        }
    });

    // Initial shuffle
    shuffleImages();
});




<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeu du Taquin</title>
    <link rel="stylesheet" href="style3.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <h1>Jeu du Taquin - Logo La Plateforme_</h1>
    <div id="message"></div>
    <div id="game-board">
        <?php
        for ($i = 1; $i <= 8; $i++) {
            echo '<div class="game-tile" id="GCell' . $i . '">';
            echo '<img src="img_logo/logo' . $i . '.PNG" alt="LOGO">';
            echo '</div>';
        }
        ?>
        <!-- Case vide -->
        <div class="game-tile empty" id="GCell9"></div>
    </div>
    <button id="restartButton" style="display: none;">Recommencer</button>

    <script src="script-jquery3.js"></script>
</body>
</html>

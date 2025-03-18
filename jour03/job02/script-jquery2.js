$(document).ready(function () {
    let $container = $("#container");
    let $dropzone = $("#dropzone");
    let $images = $("#container img").toArray();

    // Fonction pour mélanger les images
    $("#shuffleBtn").click(function () {
        let shuffled = $images.sort(() => Math.random() - 0.5);
        $container.empty().append(shuffled);
        $("#message").text("").css("color", "black");
        $dropzone.empty(); // On vide la zone de drop
        setDraggable(); // Réactive le drag
    });

    // Fonction pour rendre les images "draggables"
    function setDraggable() {
        // Rendre les images du container et dropzone déplaçables
        $("#container img, #dropzone img").draggable({
            revert: "invalid", // Si l'image n'est pas dans une zone autorisée, elle revient à sa place
            cursor: "move",
            helper: "clone",  // Créer une copie de l'image pour le drag
        });

        // Zone de drop
        $dropzone.droppable({
            accept: "#container img", // Accepter uniquement les images du container
            drop: function (event, ui) {
                let $droppedImage = ui.helper.clone(); // Clone l'image déplacée
                $droppedImage.css({ border: "2px solid green" }); // Ajoute une bordure pour montrer l'image droppée
                $droppedImage.draggable({
                    revert: "invalid", // Assure que l'image ne puisse pas être déplacée de la zone de drop
                });
                $(this).append($droppedImage);
                ui.helper.remove(); // Enlève l'image d'origine du container
            }
        });
    }

    setDraggable(); // Activation initiale

    // Vérifier si les images sont bien ordonnées
    $("#checkBtn").click(function () {
        let correctOrder = ["1", "2", "3", "4", "5", "6"];
        let userOrder = [];

        $("#dropzone img").each(function () {
            userOrder.push($(this).attr("data-position"));
        });

        if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
            $("#message").text("Vous avez gagné !").css("color", "green");
        } else {
            $("#message").text("Vous avez perdu !").css("color", "red");
        }
    });
});



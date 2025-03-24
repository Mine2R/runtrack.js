<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Récupération des données
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Vérification du domaine de l'email
    if (strpos($email, '@laplateforme.io') === false) {
        echo "L'email doit appartenir à @laplateforme.io";
    } else {
        // Si l'email est valide, on peut enregistrer les données dans un fichier JSON
        $users = json_decode(file_get_contents('users.json'), true);
        $new_user = [
            'name' => $name,
            'email' => $email,
            'password' => password_hash($password, PASSWORD_DEFAULT)
        ];
        $users[] = $new_user;

        // Sauvegarde des utilisateurs dans le fichier JSON
        file_put_contents('users.json', json_encode($users, JSON_PRETTY_PRINT));
        echo "Inscription réussie!";
    }
}
?>

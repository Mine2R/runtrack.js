// Script de validation de formulaire d'inscription

document.getElementById('inscription-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Expressions régulières pour validation
    var emailRegex = /^[a-zA-Z0-9._-]+@laplateforme\.io$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    // Réinitialisation des erreurs
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';
    document.getElementById('confirm-password-error').style.display = 'none';

    // Validation de l'email
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').style.display = 'block';
        event.preventDefault(); // Empêche l'envoi du formulaire
    }

    // Validation du mot de passe
    if (!passwordRegex.test(password)) {
        document.getElementById('password-error').style.display = 'block';
        event.preventDefault(); // Empêche l'envoi du formulaire
    }

    // Validation de la confirmation du mot de passe
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').style.display = 'block';
        event.preventDefault(); // Empêche l'envoi du formulaire
    }
});



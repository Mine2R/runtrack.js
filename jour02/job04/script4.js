const keylogger = document.getElementById ("keylogger");
document.addEventListener("keydown", function (event) {
    if ((event.key >= 'a' && event.key <= 'z' || event.key >= 'A' && event.key <= 'Z')) {
        let letter = event.key;
        event.preventDefault();

        if (keylogger === document.activeElement) {
            keylogger.value += letter + letter;

        } else {
            keylogger.value += letter;
        }

    }
});
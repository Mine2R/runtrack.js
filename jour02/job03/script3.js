let i = 0;

const compteur = document.getElementById("compteur");
const button = document.getElementById("button");
function addOne() {
   i++;
   compteur.textContent = i;
    }

button.addEventListener("click", addOne);
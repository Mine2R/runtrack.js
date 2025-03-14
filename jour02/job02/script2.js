function showhide() {
    let article = document.querySelector("article");
    
    if (article){
        document.body.removeChild(article);
    } else {
        let newArticle = document.createElement("article");
            newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
            document.body.appendChild(newArticle);
        }

}
document.getElementById("button").addEventListener("click", showhide);
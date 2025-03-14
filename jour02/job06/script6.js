const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyQ"];
let currentCodeIndex = 0;


document.addEventListener("keydown", function(event) {
    console.log(event.code);
   
    if (event.code === konamiCode[currentCodeIndex]) {
        currentCodeIndex++;
        
        
        if (currentCodeIndex === konamiCode.length) {
            document.body.classList.add("konami");
            console.log("Code Konami activé!");
            currentCodeIndex = 0;  
        }
    } else {
        
        currentCodeIndex = 0;
    }
});

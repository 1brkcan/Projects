const words = ["Bakkodum", "Wikings", "Burakcan", "Bayramoğlu", "Developer"];

let input = document.getElementById('text');
let overlay = document.getElementById('overlay');

input.addEventListener('input', () => {

    let isChanged = words.some((word) => {
        if(input.value.lenght !== 0 &&
            word.startsWith(input.value)
        ){
            overlay.innerText = word;
            return true;
        }
    })

    if(!isChanged)
        overlay.innerText = "";
    

});



input.addEventListener("keydown", (event) => {

    if (event.key === "Enter"){
        if(overlay.innerText.length > 0){

            input.value = overlay.innerText;

        }
    }

});




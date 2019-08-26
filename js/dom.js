const askedQS = document.querySelector(".askedQ");
const problemBoxS = document.querySelector(".problemBox");
const submitProblemS = document.querySelector(".submitProblem");
const helpedS = document.querySelector(".helped");
const counterS = document.querySelector(".counter");
const namedStickyS = document.querySelector(".namedSticky");


const stickyDome = DigitalMentor();

const tempsourceS = document.querySelector(".userTemplate").innerHTML;
const userTemplateS = Handlebars.compile(tempsourceS);
namedStickyS.innerHTML = userTemplateS({ stickyPro: [] });
console.log(namedStickyS);

function clearTemError() {
    setTimeout(function () {
        errorHb.innerHTML = "";
    }, 2000);
}



function showText(){
    var sticky = stickyDome.stickyInput(askedQS.value, problemBoxS.value);
    
        namedStickyS.innerHTML = "";
        counterS.innerHTML = stickyDome.stickyCounter();        
        namedStickyS.innerHTML = userTemplateS({ stickyPro: stickyDome.stickyList() });

     }
     




submitProblemS.addEventListener("click", showText);
// helpedS.addEventListener("click", );
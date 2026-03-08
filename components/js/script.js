var card = document.querySelectorAll('.card');
let addButton = document.getElementsByClassName('cardAdd');
let arrayNode = new Array();

let user = getCookie("username");

if(user == "testUser5") {
    addButton['addCard'].style.visibility = "visible";
}
else {
    addButton['addCard'].style.visibility = "hidden";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

updateDOM();


function addArrow(startX, startY, card) {

    let arrow = document.createElement("div");
    arrow.className = "rotate-arrow";
    arrow.style.top = startY + "px";
    arrow.style.left = startX + "px";

    let arrowLine = document.createElement("hr");
    arrowLine.className = "arrow";
    arrowLine.style.width = 100 + "px";

    card.appendChild(arrow);
    arrow.appendChild(arrowLine);

}

function addCard(y, cardId, i) {

    let app = document.getElementById(cardId);
    let cardDiv = document.createElement("div");
    let length = card.length;

    cardDiv.id = "cardGrab" + i;
    cardDiv.className = "card";

    cardDiv.style.top = 100 + y + "px";
    cardDiv.style.left = 0 + "px";
    
    app.appendChild(cardDiv);
}

const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

// const response = fetch('http://localhost/jsonParser.php', {
//     method:'GET',
//     headers: header
// });

// response.then(res => res.json())
// .then(data => {
//     let j = 0;
//     for(let i = 0; i< data.length; i++){
        
//         let cardAdd = "";

//         if(i > 0) {
//             cardAdd = document.getElementById("cardGrab" + i.toString());
//         }
//         else {
//             cardAdd = document.getElementById("cardGrab");
//         }

//         let width = cardAdd.clientWidth / 2;
//         let height = cardAdd.clientHeight;

//         let y = document.documentElement.scrollTop + height;

//         addArrow(width, y, cardAdd);
//         addCard(height, cardAdd.id, (i +1).toString());
//     }}
// )


addButton['addCard'].addEventListener("click", async(e) => {

    let cardPane = document.querySelectorAll('.card');
    let i = 0;

    cardPane.forEach(app => {

        i = i + 1;

        if(i == cardPane.length) {        
            let cardAdd = document.getElementById(app.id.toString());

            let width = cardAdd.clientWidth / 2;
            let height = cardAdd.clientHeight;

            let y = document.documentElement.scrollTop + height;

            addArrow(width, y, cardAdd);
            addCard(height, app.id.toString(), i.toString());
        }


    });

    cardPane = document.querySelectorAll('.card');
    updateDOM();

})

function updateDOM() {
    
    card = document.querySelectorAll('.card');
    
    card.forEach(cards => {
        cards.addEventListener("mousedown", mouseDown);
})}

function mouseDown(e){
    // Start point of the coordinates
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e){
    newX = startX - e.clientX; 
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    if(e.target.id.includes('cardGrab')) {
        document.getElementById(e.target.id.toString()).style.top = (document.getElementById(e.target.id.toString()).offsetTop - newY) + 'px'
        document.getElementById(e.target.id.toString()).style.left = (document.getElementById(e.target.id.toString()).offsetLeft- newX) + 'px'
    } 


}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove);
}


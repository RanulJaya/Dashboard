let newX = 0, newY = 0, startX = 0, startY = 0;

const card = document.getElementById("cardGrab")
const textArea = document.getElementById("text")
const cardBody = document.querySelector(".card-body")


  console.log(cardBody.style)

// Initiate drag from adding listener
card.addEventListener('mousedown', mouseDown)
card.addEventListener('keypress', keyPress)

function mouseDown(e){
    // Start point of the coordinates
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX = startX - e.clientX 
    newY = startY - e.clientY 
  
    startX = e.clientX
    startY = e.clientY

    card.style.top = (card.offsetTop - newY) + 'px'
    card.style.left = (card.offsetLeft - newX) + 'px'

}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}

function keyPress(e){

  if(card.clientHeight > 200){
    card.style.height = "200px"
    textArea.style.height = "175px"
    textArea.style.overflowY = "visible"
  }
}

const xmlhttp = new XMLHttpRequest();

xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj[1]['body'];
}
xmlhttp.open("GET", "../jsonParser.php");
xmlhttp.send();


            

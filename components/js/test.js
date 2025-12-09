for (let index = 0; index < 1; index++) {
    var parent = document.getElementById('app')
    var board = document.createElement("div")

    board.id = 'cardGrab1'
    board.className = 'card'
    board.style.backgroundColor = 'rgba(223, 223, 89, 1)'
    board.style.top = '200px'
    board.style.left = '0px'
    board.style.position = 'fixed'

    var childBoard = document.createElement('div')
    childBoard.className = 'card-body'

    board.appendChild(childBoard)
    parent.appendChild(board)
}


const xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "../jsonParser.php");
xmlhttp.send();

xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj[1]['body'];
}

let newX = 0, newY = 0, startX = 0, startY = 0;

const card = [document.getElementById("cardGrab"), document.getElementById("cardGrab1")]

// Initiate drag from adding listener

card[0].addEventListener('mousedown', mouseDown)
card[1].addEventListener('mousedown', mouseDown)

console.log(card[1])


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
    
    console.log(e.target.id)

    for (let index = 0; index < 2; index++) {
        if (card[index].id == e.target.id) {
          card[index].style.top = (card[index].offsetTop - newY) + 'px'
          card[index].style.left = (card[index].offsetLeft- newX) + 'px'
        }
    }
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}


            

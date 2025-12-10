let parentIndex = 0
for (let index = 0; index < 2; index++) {
    var parent = document.getElementById('app')
    var board = document.createElement("div")

    board.id = 'cardGrab' + index.toString()
    console.log(board.id)
    board.className = 'card'
    board.style.backgroundColor = 'rgba(223, 223, 89, 1)'
    board.style.top = '200px'
    board.style.left = '0px'

    var childBoard = document.createElement('div')
    childBoard.className = 'card-body'

    board.appendChild(childBoard)
    parent.appendChild(board)

    parentIndex = parentIndex + 1
}



const xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "../jsonParser.php");
xmlhttp.send();

xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj[1]['body'];
}

let newX = 0, newY = 0, startX = 0, startY = 0;

const card = []

for (let index = 0; index < parentIndex; index++) {
    let indexToString = "cardGrab" + index.toString()
    card[index] = document.getElementById(indexToString.toString())
}

// Initiate drag from adding listener
for(let i =0; i < card.length; i++){
    card[i].addEventListener('mousedown', mouseDown)
}



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
    

    for (let index = 0; index < card.length; index++) {
        if (card[index].id == e.target.id) {
          card[index].style.top = (card[index].offsetTop - newY) + 'px'
          card[index].style.left = (card[index].offsetLeft- newX) + 'px'
        }
    }
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}


testMainBox()
            
function testMainBox()
{
    const card = document.getElementById('cardGrab')

    card.addEventListener('mousedown' ,mouseDown)
    
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
        card.style.left = (card.offsetLeft- newX) + 'px'
    }

    function mouseUp(e){
        document.removeEventListener('mousemove', mouseMove)
    }

}
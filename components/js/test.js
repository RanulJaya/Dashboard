var parentIndex = 0

for (let index = 0; index < 2; index++) {
    var parent = document.getElementById('app')
    var board = document.createElement("div")

    board.id = 'cardGrab' + index.toString()
    board.className = 'card'
    board.style.backgroundColor = 'rgba(223, 223, 89, 1)'
    board.style.top = '200px'
    board.style.left = '0px'

    var para = document.createElement('p')
    para.id = 'demo' + index
    para.className = 'car'

    var childBoard = document.createElement('div')
    childBoard.className = 'card-body'

    board.appendChild(childBoard)
    parent.appendChild(board)

    childBoard.appendChild(para)

    parentIndex = parentIndex + 1
}

parentIndex += 1;

const button = document.getElementById('plus')

const xmlhttp = new XMLHttpRequest();

let newX = 0, newY = 0, startX = 0, startY = 0;

// var card2 = document.getElementsByClassName('card')

// // Initiate drag from adding listener
// for (let index = 1; index < parentIndex; index++) { 
//     card2[index].addEventListener('mousedown', mouseDown)
// }

const card = document.querySelectorAll('.card')

card.forEach(cards => {
    cards.addEventListener('mousedown', mouseDown)
    console.log(cards)
})

button.addEventListener('click', addButton)

function addButton(e){
    var parent = document.getElementById('app')
    var card = document.createElement('div')
    
    parentIndex +=1

    card.id = 'cardGrab' + (parentIndex - 2).toString()
    card.className = 'card'
    card.style.top = '200px'
    card.style.left = '200px'

    var para = document.createElement('p')
    para.id = 'demo' + parentIndex
    para.className = 'car'

    var childBoard = document.createElement('div')
    childBoard.className = 'card-body'

    card.appendChild(childBoard)
    parent.appendChild(card)

    childBoard.appendChild(para)

    card.addEventListener('mousedown', mouseDown)

    // var element = document.getElementById('cardGrab' + parentIndex.toString())

    
    xmlhttp.open("GET", "../jsonParser.php");
    xmlhttp.send();

    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        document.getElementById("demo4").innerHTML = myObj[1]['body'];
    }

    
    // autoRender = setInterval(reRender(element), 1000)

}

function reRender(elmnt){
    elmnt.style.display = 'none'
    elmnt.style.display = 'block'
}

xmlhttp.open("GET", "../jsonParser.php");
xmlhttp.send();

xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj[1]['body'];
  document.getElementById("demo0").innerHTML = myObj[1]['body'];
  document.getElementById("demo1").innerHTML = myObj[1]['body'];
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

    if(e.srcElement.offsetParent.id.includes('cardGrab')){
        document.getElementById(e.srcElement.offsetParent.id.toString()).style.top = (document.getElementById(e.srcElement.offsetParent.id.toString()).offsetTop - newY) + 'px'
        document.getElementById(e.srcElement.offsetParent.id.toString()).style.left = (document.getElementById(e.srcElement.offsetParent.id.toString()).offsetLeft- newX) + 'px'
    }
    else if(e.target.id.includes('cardGrab')){
        document.getElementById(e.target.id.toString()).style.top = (document.getElementById(e.target.id.toString()).offsetTop - newY) + 'px'
        document.getElementById(e.target.id.toString()).style.left = (document.getElementById(e.target.id.toString()).offsetLeft- newX) + 'px'
    }
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}


// testMainBox()
            
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
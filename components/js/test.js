// dragElement(document.getElementById('test1'))
// dragElement(document.getElementById('test6'))
dragElement(document.getElementById("myCanvas"))


test.addEventListener("click",ClickEventMouse)
test.addEventListener("keypress",onChangeText)

function ClickEventMouse(){
  console.log(test.innerText)
  if (test.innerText == "Please enter text"){
    test.innerText = ""
  }
}

function onChangeText(e){
  if(e.key == 'Enter') {
    document.getElementById('test1').innerText = test.innerText
    document.getElementById('test1').style.fontSize = "30px"
    document.getElementById('test1').style.fontWeight = 1000
  }
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
   
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
   


  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmousemove = elementDrag;
    document.onmouseup = closeDragElement;

  }

    function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    console.log(elmnt.style.top = (elmnt.offsetTop - pos2))
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

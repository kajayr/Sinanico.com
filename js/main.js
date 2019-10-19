var valves = document.getElementById('valves');
var main = document.getElementById('main');
var contact = document.getElementById('contact');
var ActiveB = true;
var addElementB = true;

var addul = document.createElement('ul');
var list1 = document.createElement('li');
var list2 = document.createElement('li');
var list3 = document.createElement('li');
var list4 = document.createElement('li');
var ballValve = document.createTextNode("Ball Valves");
var ButterflyValve = document.createTextNode("Butterfly Valve");
var SafetyValve = document.createTextNode("Safety Valve");
var CheckValve = document.createTextNode("Check Valve");

function addElement(parentId, elementTag, elementId, html) {
   if(addElementB == true){
    var parentid = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.classList.add('descDetails');
    newElement.innerHTML = html;
    parentid.appendChild(newElement);
    ActiveB = false;
    return;
   }
   else{
   document.getElementById(newElement).remove();
   addElementB = true;
   }

}

function goValve(){
    if ( ActiveB == true ) {
        addul.setAttribute('id', 'valveList');
    list1.appendChild(ballValve); 
    document.getElementById('valveButtonText').appendChild(addul);
    list1.setAttribute('class', 'list');
    document.getElementById('valveList').appendChild(list1);

    list2.appendChild(ButterflyValve); 
    list2.setAttribute('class', 'list');
    document.getElementById('valveList').appendChild(list2);

    list3.appendChild(SafetyValve); 
    list3.setAttribute('class', 'list');
    document.getElementById('valveList').appendChild(list3);

    list4.appendChild(CheckValve); 
    list4.setAttribute('class', 'list');
    document.getElementById('valveList').appendChild(list4);


    
    //main.classList.add("valves");
   //document.getElementById('main').style.backgroundImage = "url('./img/filterpress/header.jpg')";
   document.getElementById('main').classList.add('valveBackground');
   document.getElementById('main').style.backgroundImage = "url('./img/valve/header.jpg')";
   document.getElementById('main').style.opacity = 1;
    contact.style.display = 'none';
    addElement('desc', 'p', 'pVal', "ball valve is a form of quarter-turn valve which uses a hollow, perforated and pivoting ball to control flow through it. It is open when the ball's hole is in line with the flow and closed when it is pivoted 90-degrees by the valve handle. The handle lies flat in alignment with the flow when open, and is perpendicular to it when closed, making for easy visual confirmation of the valve's status.");
    
        //document.getElementById('valves').setAttribute("disabled","disabled");
        ActiveB = false;
        addElementB = false;
        return;
     } else {
         document.getElementById('valveList').remove();
        ActiveB = true;
        return;
     }

}

function dropValveText(){
    document.getElementById('valveList').remove();
    document.getElementById("pVal").outerHTML = "";
    contact.style.display = 'block';
    ActiveB = true;
    addElementB = true;
}


var ejector = document.getElementById('ejector');
var main = document.getElementById('main');
var contact = document.getElementById('contact');
var ActiveEJ = true;
var addElementBejector = true;

var addulEJ = document.createElement('ul');
var list1EJ = document.createElement('li');
var list2EJ = document.createElement('li');

var ejector1 = document.createTextNode("Ejector");
var injector = document.createTextNode("Injector");

function addElementejector(parentId, elementTag, elementId, html) {

   if(addElementBejector == true){
    var parentidejector = document.getElementById(parentId);
    var newElementejector = document.createElement(elementTag);
    newElementejector.setAttribute('id', elementId);
    newElementejector.classList.add('descDetails');
    newElementejector.innerHTML = html;
    parentidejector.appendChild(newElementejector);
    ActiveEJ = false;
    return;
   }
   else{
   document.getElementById(newElementejector).remove();
   addElementBejector = true;
   }

}

function goejector(){
    if ( ActiveEJ == true ) {
        addulEJ.setAttribute('id', 'ejectorList');
    list1EJ.appendChild(ejector1); 
    document.getElementById('ejectorButtonText').appendChild(addulEJ);
    list1EJ.setAttribute('class', 'listEJ');
    document.getElementById('ejectorList').appendChild(list1EJ);

    list2EJ.appendChild(injector); 
    list2EJ.setAttribute('class', 'listEJ');
    document.getElementById('ejectorList').appendChild(list2EJ);



   document.getElementById('main').classList.add('ejectorBackground');
   document.getElementById('main').style.backgroundImage = "url('./img/ejector/header.jpg')";
    contact.style.display = 'none';
    addElementejector('desc', 'p', 'pejector', 'typically used to deliver cold water to a boiler against its own pressure using its own live or exhaust steam, replacing any mechanical pump. Its operation was from the start intriguing since it seemed paradoxical, almost like perpetual motion, but its operation was later explained using thermodynamics. Other types of injector may use other pressurised motive fluids such as air.');

    ActiveEJ = false;
    addElementBejector = false;
        return;
     } else {
         document.getElementById('ejectorList').remove();
         ActiveEJ = true;
        return;
     }

}

function dropejectorText(){
    document.getElementById('ejectorList').remove();
    document.getElementById("pejector").outerHTML = "";
    contact.style.display = 'block';
    ActiveEJ = true;
    addElementBejector = true;
}

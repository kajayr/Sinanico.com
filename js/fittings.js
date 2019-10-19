var fitting = document.getElementById('fitting');
var main = document.getElementById('main');
var contact = document.getElementById('contact');
var ActiveEJF = true;
var addElementBfitting = true;

var addulEJF = document.createElement('ul');
var list1EJF = document.createElement('li');
var list2EJF = document.createElement('li');

var fitting1 = document.createTextNode("Fittings");
var fitting2 = document.createTextNode("Coming soon");

function addElementfitting(parentId, elementTag, elementId, html) {

   if(addElementBfitting == true){
    var parentidfitting = document.getElementById(parentId);
    var newElementfitting = document.createElement(elementTag);
    newElementfitting.setAttribute('id', elementId);
    newElementfitting.classList.add('descDetails');
    newElementfitting.innerHTML = html;
    parentidfitting.appendChild(newElementfitting);
    ActiveEJF = false;
    return;
   }
   else{
   document.getElementById(newElementfitting).remove();
   addElementBfitting = true;
   }

}

function gofitting(){
    if ( ActiveEJF == true ) {
        addulEJF.setAttribute('id', 'fittingList');
    list1EJF.appendChild(fitting1); 
    document.getElementById('fittingButtonText').appendChild(addulEJF);
    list1EJF.setAttribute('class', 'listEJF');
    document.getElementById('fittingList').appendChild(list1EJF);

    list2EJF.appendChild(fitting2); 
    list2EJF.setAttribute('class', 'listEJF');
    document.getElementById('fittingList').appendChild(list2EJF);



   document.getElementById('main').classList.add('fittingBackground');
   document.getElementById('main').style.backgroundImage = "url('./img/fitting/header.jpg')";
    contact.style.display = 'none';
    addElementfitting('desc', 'p', 'pfitting', 'used in pipe systems to connect straight sections of pipe or tube, adapt to different sizes or shapes, and for other purposes such as regulating fluid flow.');

    ActiveEJF = false;
    addElementBfitting = false;
        return;
     } else {
         document.getElementById('fittingList').remove();
         ActiveEJF = true;
        return;
     }

}

function dropfittingText(){
    document.getElementById('fittingList').remove();
    document.getElementById("pfitting").outerHTML = "";
    contact.style.display = 'block';
    ActiveEJF = true;
    addElementBfitting = true;
}

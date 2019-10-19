var equ = document.getElementById('equ');
var main = document.getElementById('main');
var contact = document.getElementById('contact');
var ActiveE = true;
var addElementBequ = true;

var addulE = document.createElement('ul');
var list1E = document.createElement('li');
var list2E = document.createElement('li');
var list3E = document.createElement('li');

var FilterPress = document.createTextNode("Filter Press");
var Mixer = document.createTextNode("Mixer");
var Scraper = document.createTextNode("Scraper");

function addElementEqu(parentId, elementTag, elementId, html) {

   if(addElementBequ == true){
    var parentidEqu = document.getElementById(parentId);
    var newElementEqu = document.createElement(elementTag);
    newElementEqu.setAttribute('id', elementId);
    newElementEqu.classList.add('descDetails');
    newElementEqu.innerHTML = html;
    parentidEqu.appendChild(newElementEqu);
    ActiveE = false;
    return;
   }
   else{
   document.getElementById(newElementEqu).remove();
   addElementBequ = true;
   }

}

function goEqu(){
    if ( ActiveE == true ) {
        addulE.setAttribute('id', 'equList');
    list1E.appendChild(FilterPress); 
    document.getElementById('equButtonText').appendChild(addulE);
    list1E.setAttribute('class', 'listE');
    document.getElementById('equList').appendChild(list1E);

    list2E.appendChild(Mixer); 
    list2E.setAttribute('class', 'listE');
    document.getElementById('equList').appendChild(list2E);

    list3E.appendChild(Scraper); 
    list3E.setAttribute('class', 'listE');
    document.getElementById('equList').appendChild(list3E);



   document.getElementById('main').classList.add('equBackground');
   document.getElementById('main').style.backgroundImage = "url('./img/filterpress/header.jpg')";
    contact.style.display = 'none';
    addElementEqu('desc', 'p', 'pEqu', 'filter press is a tool used in separation processes, specifically to separate solids and liquids. The process uses the principle of pressure drive,[clarification needed] as provided by a slurry pump. Among other uses, filter presses are utilized in marble factories in order to separate water from mud in order to reuse the water during the marble cutting process.');

    ActiveE = false;
    addElementBequ = false;
        return;
     } else {
         document.getElementById('equList').remove();
         ActiveE = true;
        return;
     }

}

function dropEquText(){
    document.getElementById('equList').remove();
    document.getElementById("pEqu").outerHTML = "";
    contact.style.display = 'block';
    ActiveE = true;
    addElementBequ = true;
}


var box1 = document.getElementById('img-box1');
var box2 = document.getElementById('img-box2');
var box3 = document.getElementById('img-box3');
var box4 = document.getElementById('img-box4');
var box5 = document.getElementById('img-box5');
var box6 = document.getElementById('img-box6');


var searchBox = document.getElementById('search-box');

   box1.style.backgroundImage = "url('./img/valve/ball_valve.jpg')";
   box2.style.backgroundImage = "url('./img/filterpress/filterpress1.jpg')";
   box3.style.backgroundImage = "url('./img/valve/butterfly_valve.jpg')";
   box4.style.backgroundImage = "url('./img/filterpress/mixer1.jpg')";
   box5.style.backgroundImage = "url('./img/filterpress/scraper1.jpg')";
   box6.style.backgroundImage = "url('./img/ejector/ejector1.jpg')";

 function searching(){
     var text = searchBox.value.toLowerCase();
        if(text == 'ball' || text == 'valve' || text == 'ball valve' || text == 'valv' || text == 'check' || text == 'safty' || text == 'safti' || text == 'butterfly'){
return document.getElementById('pop-up-valve').style.display = 'block';
                     }  
else if(text == 'filter' || text == 'press' || text == 'filter press' || text == 'scraper' || text == 'mixer' || text == 'mix' || text == 'scruber' || text == 'filterpress'){
    return document.getElementById('pop-up-equ').style.display = 'block';
}

else if(text == 'fitting' || text == 'fittings' || text == 'fiting'){
    return document.getElementById('pop-up-fitting').style.display = 'block';
}
else if(text == 'ejector' || text == 'injector' || text == 'eject' || text == 'inject'){
    return document.getElementById('pop-up-ejector').style.display = 'block';
}
else{
    document.getElementById('notFound').innerHTML = '<p>Result not found.</p>';
    document.getElementById('notFound').style.display = 'block';
     setInterval(() => {
        document.getElementById('notFound').style.display = 'none'; 
     }, 3000);
          

}
 }

 function selectingValve(){
document.getElementById('pop-up-valve').style.display = 'block';
document.getElementById('pop-up-equ').style.display = 'none';
document.getElementById('pop-up-fitting').style.display = 'none';
document.getElementById('pop-up-ejector').style.display = 'none';
                    }  

function selectingEqu(){
document.getElementById('pop-up-equ').style.display = 'block';
document.getElementById('pop-up-valve').style.display = 'none';
document.getElementById('pop-up-fitting').style.display = 'none';
document.getElementById('pop-up-ejector').style.display = 'none';
}  

function selectingFitting(){
 document.getElementById('pop-up-fitting').style.display = 'block';
 document.getElementById('pop-up-valve').style.display = 'none';
 document.getElementById('pop-up-equ').style.display = 'none';
 document.getElementById('pop-up-ejector').style.display = 'none';
}  

function selectingEjector(){
document.getElementById('pop-up-ejector').style.display = 'block';
document.getElementById('pop-up-valve').style.display = 'none';
document.getElementById('pop-up-equ').style.display = 'none';
document.getElementById('pop-up-fitting').style.display = 'none';
}  
                   
                        

                        


 function closeSearch(){
     document.getElementById('pop-up-valve').style.display = 'none';
     document.getElementById('pop-up-equ').style.display = 'none';
     document.getElementById('pop-up-fitting').style.display = 'none';
     document.getElementById('pop-up-ejector').style.display = 'none';
 }
var searchInput = document.getElementById('search-box');
var searchBtn = document.getElementById('search-btn');
 function searchOnPhone(){
    searchInput.style.display = 'inline';
    searchBtn.style.display = 'inline';
 }
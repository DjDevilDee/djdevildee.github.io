var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kotpies.jfif') {
      myImage.setAttribute ('src','images/zwierzęta-domowe.jfif');
    } else {
      myImage.setAttribute ('src','images/kotpies.jfif');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Zwierzoluby.pl Witaj, ' + myName + '!';
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Zwierzoluby.pl Witaj, ' + storedName +'!';
  }
  myButton.onclick = function() {
    setUserName();
  }

  


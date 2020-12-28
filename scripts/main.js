//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'ΓΕΙΑ ΣΟΥ ΚΟΣΜΕ';
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ellada-mou.jpg') {
      myImage.setAttribute('src','images/ellada-mou2.jpg');
    } else {
      myImage.setAttribute('src','images/ellada-mou.jpg');
    }
}
function setUserName() {
    let myName = prompt("Πως σε λένε;");
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + " ΖΗΣΕ ΤΗΝ ΕΛΛΑΔΑ";
    }
} 
if(!localStorage.getItem('name')) {
    setUserName();
  }
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent =storedName +" ΖΗΣΕ ΤΗΝ ΕΛΛΑΔΑ";
  }
myButton.onclick = function() {
    setUserName();
  }
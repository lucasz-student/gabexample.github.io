let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/gabriel.jpg') {
    myImage.setAttribute('src', 'images/lol.png')
  } else {
    myImage.setAttribute('src', 'images/gabriel.jpg') 
  }
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Geeham will be the supreme ruler! ' + myName;
  }
}


if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Geeham will be the supreme ruler! ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

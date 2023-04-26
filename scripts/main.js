const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/vago.JPG") {
    myImage.setAttribute("src", "images/vago2.JPG");
  } else {
    myImage.setAttribute("src", "images/vago.JPG");
  }
};

let myButton = document.querySelector("button");

let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Sailing is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Sailing is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};

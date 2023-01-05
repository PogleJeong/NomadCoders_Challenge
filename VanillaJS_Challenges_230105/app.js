const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  const button = document.querySelector("body button");
  
  function clickOnButton() {
    const randomNumber1 = Math.floor(Math.random() * colors.length);
    const randomNumber2 = Math.floor(Math.random() * colors.length);
    const randomRadius = Math.floor(Math.random() * 360);
    const randomColor1 = colors[randomNumber1];
    const randomColor2 = colors[randomNumber2];
    document.body.style.background = `linear-gradient(${randomRadius}deg,${randomColor1},${randomColor2})`;
  }
  
  button.addEventListener("click", clickOnButton);
  
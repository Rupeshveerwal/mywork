const colors= ["green", "red", "yellow", "blue"];
const btn= document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener("click", () => {
  //get the random number btw the 0-3
  const randomNumber= Math.floor(Math.random() * colors.length);
    //change the color of the button
    btn.style.backgroundColor= colors[randomNumber];
    //change the color of the color
    color.style.backgroundColor= colors[randomNumber];
  });
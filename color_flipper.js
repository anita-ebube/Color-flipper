const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".btn");
 btn.addEventListener('click', function(){
    //get random number from 0-3
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
      hexColor += colors[getRandomNumber()];
    }
  const randomNumber = getRandomNumber();  
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
 })

 function getRandomNumber(){
  return Math.floor(Math.random() * colors.length)
 }
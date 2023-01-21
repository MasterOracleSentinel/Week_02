//Set global variable that would contain the position, velocity and the html element "ball"
const velocity = 100;
var reverse = false;
var reverseY = false;
var positionX = 0;
var positionY = 200;
var ball = document.getElementById('ball');
//write a function that can change the position of the html element "ball"

function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  const Xmin = 0;
  const Xmax = 500;
  const Ymin = 0;
  const Ymax = 500;
  
  if (reverse === false){
    positionX = positionX + velocity;
  } else {
    positionX = positionX - velocity;
  }

  if (reverseY === false)
  {
    positionY = positionY + velocity;
  } else {
    positionY = positionY - velocity;
  }

  ball.style.left = positionX + 'px';
  ball.style.top  = positionY + 'px';

  if (positionX > Xmax || positionX === Xmin){
    reverse = !reverse;
  }

  if (positionY > Ymax || positionY === Ymin){
    reverseY = !reverseY;
  }

  
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);

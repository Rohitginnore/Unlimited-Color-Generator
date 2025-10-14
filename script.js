// generate a Random color;



const changeColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
  for(let i = 0; i<6; i++){
    color = color+hex[Math.floor(Math.random()*16)];
  }  

  return color;

  } 
const Start = document.querySelector('#start');
const stop = document.querySelector("#stop");

let interval
  const startChangingColor = function(){
    if(interval == null){
      interval = setInterval(changeBGColors,1000);
    }
    function changeBGColors(){
        document.body.style.backgroundColor = changeColor();
      }
  };
//   console.log(startChangingColor());
  

  const stopChangingColor = function(){
    clearInterval(interval);
    interval = null;
  }

  Start.addEventListener('click',startChangingColor);
  stop.addEventListener('click',stopChangingColor);

// const Btn = document.getElementById("bton");
// const style = document.documentElement.style;

// let State = true;

// Btn.addEventListener("click", ()=>{
//    if(State){
//    style.setProperty("--colorfondo", "#faeed6");
//    style.setProperty("--colorletras", "#e9ab57");
//    } else {
//    style.setProperty("--colorletras", "#e9ab57");
//    style.setProperty("--colorfondo", "#faeed6");
//    }
//    State = !State
// })


const Btn = document.getElementById("btn");
let State = false;

const Changecolor = () => {
   if(State) {
      document.documentElement.style.setProperty("--colorfondo", "#faeed6");
      document.documentElement.style.setProperty("--colorletras", "#e9ab57");
   } else {
      document.documentElement.style.setProperty("--colorletras", "#e9ab57");
      document.documentElement.style.setProperty("--colorfondo", "#faeed6");
   }
   State = !State
};

Btn.addEventListener("click", ()=> Changecolor());
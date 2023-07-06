const container = document.querySelector('.container');
const loadingText = document.querySelector('.loadingText');
const counter = document.querySelector('.counter');
const loadingBarFront = document.querySelector('.loadingBarFront');
const loadingBarStart = document.querySelector('.loadingBarStart');
const array = ["Loading","Loading.","Loading..","Loading..."]

loadingBarStart.addEventListener("click", () =>{
   let index = 0;
let lastNumber = 0 ;
   let number = 0;
   loadingBarFront.style.width = 0 + '%';
   container.classList.remove("smallerWidth")
   container.classList.add("largerWidth")
   setTimeout(() => {
    loadingBarStart.classList.add("dNone")
    loadingText.classList.remove("dNone")
    updateNumber(number,lastNumber,index)
   }, 500);
   setTimeout(() => {
      container.classList.remove("largerWidth")
      container.classList.add("smallerWidth")
      loadingBarStart.classList.remove("dNone")
    loadingText.classList.add("dNone")
    counter.textContent = "başarılı";
   }, 2500);
})



function updateNumber(number,lastNumber,index) {
  if(number%10 == 0){
    lastNumber = number
    index = (number/10)%4
    loadingTextTemplate(index)
  }
  counter.textContent = lastNumber + '%';
  loadingBarFront.style.width = number + '%';
  number++;
  loadingTextTemplate(index)
  if (number < 101) {
   setTimeout(function() {
      updateNumber(number, lastNumber, index);
    }, 15);
  }
}


function loadingTextTemplate(index){
   loadingText.textContent = array[index]
}

// button.addEventListener("click", function () {

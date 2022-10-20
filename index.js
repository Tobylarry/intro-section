let feature = document.querySelector(".ft");
let company = document.querySelector(".cy");
let fList = document.querySelector(".features");
let cList = document.querySelector(".company");
let fI = document.querySelector(".fI");
let cI = document.querySelector(".cI");
let menu = document.querySelector(".menu");
let right = document.querySelector(".right");
let popup = document.querySelector(".popup");
let close = document.querySelector(".close");
let popfeature = document.querySelector(".popfeature");
let popcompany = document.querySelector(".popcompany");
let popft = document.querySelector(".popft");
let popcy = document.querySelector(".popcy");
let popfI = document.querySelector(".popfI");
let popcI = document.querySelector(".popcI");

menu.addEventListener("click", function () {
  popup.style.display = "block";
  menu.style.display = "none";
});

close.addEventListener("click", function () {
  popup.style.display = "none";
  menu.style.display = "block";
});

feature.addEventListener("click", function () {
  if (fList.style.display === "none") {
    fList.style.display = "block";
    feature.style.color = "hsl(0, 0%, 8%)";
    cList.style.display = "none";
    fI.src = "./images/icon-arrow-up.svg";
  } else {
    fList.style.display = "none";
    fI.src = "./images/icon-arrow-down.svg";
    feature.style.color = "hsl(0, 0%, 41%)";
  }
});

popfeature.addEventListener('click', function(){
    if(popft.style.display === 'none'){
        popft.style.display = 'block';
        popfeature.style.color = 'hsl(0, 0%, 8%)'
        popcy.style.display = 'none';
        popfI.src = './images/icon-arrow-up.svg';
        }
        else{
            popft.style.display = 'none';
            popfI.src = './images/icon-arrow-down.svg';
            popfeature.style.color = 'hsl(0, 0%, 41%)'
        }
}) 

company.addEventListener("click", function () {
  if (cList.style.display === "none") {
    fList.style.display = "none";
    cList.style.display = "block";
    company.style.color = "hsl(0, 0%, 8%)";
    cI.src = "./images/icon-arrow-up.svg";
  } else {
    cList.style.display = "none";
    cI.src = "./images/icon-arrow-down.svg";
    company.style.color = "hsl(0, 0%, 41%)";
  }
});


popcompany.addEventListener('click', function(){
    if(popcy.style.display === 'none'){
        popcy.style.display = 'block';
        popcompany.style.color = 'hsl(0, 0%, 8%)'
        popft.style.display = 'none';
        popcI.src = './images/icon-arrow-up.svg';
        }
        else{
            popcy.style.display = 'none';
            popcI.src = './images/icon-arrow-down.svg';
            popcompany.style.color = 'hsl(0, 0%, 41%)'
        }
})



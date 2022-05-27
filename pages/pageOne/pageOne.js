let menu = document.querySelector(".header_menu");
let navBar = document.querySelector(".nav_bar");
let bodyAfter = document.querySelector("body");
let a = 0;
function playMenu() {
    menu.src = "../../images/header/menu.png";
    menu.classList.remove("active");
    navBar.style.display = "none";
    navBarMeaningOne.style.display = "none";
    navBarMeaningTwo.style.display = "none";
    navBarMeaningThree.style.display = "none";
    bodyAfter.classList.remove("active");
    bodyAfter.style.zIndex = "-1000";
    bodyAfter.style.overflow = "inherit";
    a--;
}
menu.onclick = () => {
    if (a == 0) {
        menu.src = "../../images/header/close.png";
        menu.classList.add("active");
        navBar.style.display = "flex";
        bodyAfter.classList.add("active");
        bodyAfter.style.zIndex = "1000";
        bodyAfter.style.overflow = "hidden";
        a++;
    } else if (a == 1) {
        playMenu();
    }
}

let listLiOne = document.querySelector(".list_li.one");
let listLiTwo = document.querySelector(".list_li.two");
let listLiFour = document.querySelector(".list_li.four");
let navBarMeaningOne = document.querySelector(".nav_bar__meaning.one");
let navBarMeaningTwo = document.querySelector(".nav_bar__meaning.two");
let navBarMeaningThree = document.querySelector(".nav_bar__meaning.three");

listLiOne.onclick = () => {
    navBarMeaningOne.style.display = "flex";
    navBarMeaningTwo.style.display = "none";
    navBarMeaningThree.style.display = "none";
}

listLiTwo.onclick = () => {
    navBarMeaningOne.style.display = "none";
    navBarMeaningTwo.style.display = "flex";
    navBarMeaningThree.style.display = "none";
}

listLiFour.onclick = () => {
    navBarMeaningOne.style.display = "none";
    navBarMeaningTwo.style.display = "none";
    navBarMeaningThree.style.display = "flex";
}

let headerTitle = document.querySelector(".header_title");
let boxTitleSmall = document.querySelector(".box_title__small");

// title header targget
titleName();
window.onresize = () => {
    titleName();
}

function titleName() {
    if (1398 < window.innerWidth) {
        headerTitle.innerHTML = "Роменський фаховий коледж КНЕУ";
    } else if (1398 >= window.innerWidth) {
        headerTitle.innerHTML = "РФК КНЕУ";
    }
}

let ourImgs = document.querySelectorAll(".our_imgs");
let bal = document.querySelectorAll(".bal");

let bigImgLock = document.querySelector(".big_img__lock");
let ourImgsOne = document.querySelector(".our_imgs.one");
// box_our__content
function plusSlides(a) {
    console.log(ourImgs)
    for (let i = 0; i < bal.length; i++) {
        bal[i].style.background = 'white';
    }
    bal[a].style.background = 'rgba(2, 86, 52, 1)';
    bigImgLock.src = ourImgs[a].src;
    if (a == 2) {
        ourImgsOne.style.display = "none";
    } else if (a == 1) {
        ourImgsOne.style.display = "flex";
    }
}




setInterval(playSlider, 5000);
let number =0;
function playSlider() {

    setInterval(plusSlides(number), 10);
    number++;
    if(number == 4){
        number=0;
    }
    else if (number == 2) {
        ourImgsOne.style.display = "none";
    } else if (number == 1) {
        ourImgsOne.style.display = "flex";
    }
    
}


let imgGreen = document.querySelector(".img_green");
let greenText = document.querySelector(".green_text");

imgGreen.onmouseout = ()=>{
    console.log("yes")
    imgGreen.classList.add("active");
    greenText.classList.add("active");
    setTimeout(function() {
        location.href = '../../index.html';
      }, 400);
}


// Вешаем на прикосновение функцию handleTouchStart
imgGreen.addEventListener('touchstart', handleTouchStart, false);  
// А на движение пальцем по экрану - handleTouchMove      
imgGreen.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    // немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат (почему модули? потому что если движение сделано влево или вниз, то его показатель будет отрицательным) и сравнивается, чего было больше: движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо, но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
        } else {
            imgGreen.classList.add("active");
            greenText.classList.add("active");
            setTimeout(function() {
            location.href = '../../index.html';
      }, 400);
        }                       
    } 
                                            
};


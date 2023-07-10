//////////drop-menu/////////

const form1 = document.querySelector(".form-select-1");
const dropCategory = document.querySelector(".drop-category");
const overlay = document.querySelector(".overlay");
form1.addEventListener("click", dropDown);

function dropDown(){
    if(dropCategory.className === "drop-category"){
        dropCategory.className += " show";
        overlay.style.display = "block";
    }else{
        dropCategory.className = "drop-category";
        overlay.style.display = "none";
        
    }
    
}

///////popup/////////////


const form2 = document.querySelector(".form-select-2");
const popUp = document.querySelector(".popup");
const closeIcon = document.querySelector(".close");
const list = document.querySelector(".popup-list");
form2.addEventListener("click",popUpList);
closeIcon.addEventListener("click",close);

overlay.addEventListener("click",() =>{
    if(dropCategory.className !== "drop-category"){
        dropCategory.className = "drop-category";
        overlay.style.display = "none";
    }
});
popUp.addEventListener("click",reset)
list.addEventListener("click",reset);


function reset(){
    if(popUp.className !== "popup"){
        popUp.className = "popup";
        
    }else if(list.className === "popup-list"){
        popUp.className = "popup open";
    }
    
    
}

function popUpList(){
    if(popUp.className === "popup"){
        popUp.className += " open";
    }
    
    dropCategory.className = "drop-category";
        overlay.style.display = "none";
    
}

function close(){
    if(popUp.className !== "popup"){
        popUp.className = "popup";
    }
    
}

const popUpSearch = document.querySelector(".popup-search");
const deleteText = document.querySelector(".delete-text");

popUpSearch.addEventListener("keyup",showIcon);
// deleteText.addEventListener("change",showIcon);
deleteText.addEventListener("click",dltTxet);


function showIcon(){
    if(popUpSearch.value !== ''){
          deleteText.className += " show-icon";
  }else if(popUpSearch.value === ''){
    deleteText.className = "delete-text";
    }
   
}

function dltTxet(){
    popUpSearch.value = '';
    if(popUpSearch.value === ''){
        deleteText.className = "delete-text";
    }
}

//////////slider//////////

    const slideContent = document.querySelector(".slide-content");
    const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector(".btn-next");
    const pervBtn = document.querySelector(".btn-perv");
    const slide = document.querySelector(".slide");
    nextBtn.addEventListener("click",forward);
    pervBtn.addEventListener("click",backward);

    
    function forward(){
        slideContent.scrollLeft += -240;
        if(slideContent.scrollLeft >= -240){
            pervBtn.className = "btn-perv active";
        }
         if(slideContent.scrollLeft < -800){
            nextBtn.className = "btn-next";
        }
          
    }

    function backward(){
        if(slideContent.scrollLeft < -1){
            slideContent.scrollLeft += 240;
        }else if(slideContent.scrollLeft > -240){
            pervBtn.className = "btn-perv";
        }
        if(slideContent.scrollLeft >= -1070){
            nextBtn.className = "btn-next active";
        }
    
    }

    let isDown = false;
    let startX;
    let scrollLeft;

    function end(){
         isDown = false;
        slideContent.className = "slide-content";
    };

    function start(e){
        isDown = true;
        
        slideContent.classList = "slide-content grab";
        startX = e.pageX || e.touches[0].pageX - slideContent.offsetLeft;
        scrollLeft = slideContent.scrollLeft;
    };

    function move(e){
        if(!isDown) return;

        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX - slideContent.offsetLeft;
        const dist = (x - startX);
        slideContent.scrollLeft = scrollLeft - dist;
    };

    (() =>{
        slideContent.addEventListener("mousedown",start);
        slideContent.addEventListener("touchstart",start);
        slideContent.addEventListener("mousemove",move);
        slideContent.addEventListener("touchmove",move);
        slideContent.addEventListener("mouseup",end);
        slideContent.addEventListener("touchend",end);
        slideContent.addEventListener("mouseleave",end);
    })();
//////////-Humburger menu-//////////

const humburger = document.querySelector(".header__humburger-link");
const menu = document.querySelector(".header__menu");
const menuComputed = getComputedStyle(menu);

humburger.addEventListener("click", function(e){
    e.preventDefault();
    let menuDisplay = menuComputed.display;
    
    if (menuDisplay == "none"){        
        menu.style.display = "flex";

    }else{
        menu.style.display = "none";
    }
    
})


//////////-Bars consist-//////////

const consistButton = document.querySelector(".slider__consist");
const consistInfo = document.querySelector(".consist");

consistButton.addEventListener("mouseover", function(){
    
    if (consistInfo.classList.contains("hidden")){       
        consistInfo.classList.remove("hidden");
    }
});

consistButton.addEventListener("mouseout", function(){
    
    if (!(consistInfo.classList.contains("hidden"))){       
        consistInfo.classList.add("hidden");
    }
})


//////////-Menu accordion-//////////


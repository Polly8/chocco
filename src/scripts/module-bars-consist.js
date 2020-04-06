
//////////-Bars consist-//////////

const consistButton = document.querySelector(".consist-wrapper");
const consistInfo = document.querySelector(".consist-info-wrapper");

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
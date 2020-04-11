
//////////-Team accordion-//////////

const teamItem = document.querySelectorAll(".team__item");
const linkTeam = document.querySelectorAll(".team__name");
const linkLength = linkTeam.length;
const teamLength = teamItem.length;

for (i = 0; i < linkLength; i++){

    linkTeam[i].addEventListener("click", function(event){
        event.stopPropagation();
        event.preventDefault();

        if (this.parentNode.classList.contains("team__item--active")){
            
            this.parentNode.classList.remove("team__item--active");
        }else{
            
            for (i = 0; i < teamLength; i++){

                linkTeam[i].parentNode.classList.remove("team__item--active");
            }

            this.parentNode.classList.add("team__item--active");
        }        
    })
};


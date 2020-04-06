
//////////-Form figures valid-//////////

const figuresInput = document.querySelectorAll(".input-figures");

for (i=0; i < figuresInput.length; i++){

    figuresInput[i].addEventListener("keydown", function(event){

        let isFigure = false;
        let isControl = false;

        if (event.key >= 0 || event.key <= 9){
            isFigure = true;
        };

        if (event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "Backspace"){
            isControl = true;
        };

        if (!isFigure && !isControl){
            event.preventDefault();         
        };
    });
};

const noDash = document.querySelectorAll(".order-noDash");

for (i=0; i < noDash.length; i++){

    noDash[i].addEventListener("keydown", function(event){

        if (event.key == "-"){
            event.preventDefault();
        }
    })
}



//////////-Form-//////////

const myForm = document.querySelector(".order");
const send = document.querySelector(".order__submit");
const modal = document.querySelector(".modal-form");
const modalText = document.querySelector(".modal-form__text");
const modalClose = document.querySelector(".modal-form__btn");

send.addEventListener("click", function(event){
    event.preventDefault();

    if(validateForm(myForm)){

        const formData = new FormData();
        formData.append('name',  myForm.elements.name.value);
        formData.append('phone',  myForm.elements.phone.value);
        formData.append('comment',  myForm.elements.comment.value);
        formData.append('to',  'some@mail.com');

        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
        xhr.send(formData);

        xhr.addEventListener("load", function(){

            if(xhr.response.status < 400){
                
                modalText.textContent = "Сообщение отправлено";
                modal.style.display = "block";
                document.body.style.overflow = "hidden";

                modalClose.addEventListener("click", function(event){
                    event.stopPropagation();
                    event.preventDefault();

                    modal.style.display = "none";
                    document.body.style.overflow = "visible";         
                });

                modal.addEventListener("click", function(event){
                    event.stopPropagation();

                    modal.style.display = "none";
                    document.body.style.overflow = "visible";          
                });

                document.addEventListener("keyup", function(event){
                    let keyName = event.key;

                    if(keyName === "Escape"){
                        modal.style.display = "none";
                        document.body.style.overflow = "visible"; 
                    }
                });
            }
        }); 
        
    }
});


function validateForm(form){
    let valid = true;

    if(!validateField(form.elements.name)){
        valid = false;
    };

    if(!validateField(form.elements.phone)){
        valid = false;
    };

    return valid;
};


function validateField(field){

    field.nextElementSibling.textContent = field.validationMessage;

    return field.checkValidity();
};
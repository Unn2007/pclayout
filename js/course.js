const courseBtn=document.querySelector(".course__button");
const modalWindow=document.querySelector(".modal");
const modalInner = document.querySelector(".modal__inner");
const buttonClose = `<button type="button" class="modal__close">X</button>`;
courseBtn.addEventListener("click",()=>{
    modalWindow.style.display="flex";
   
   let buttonCloseRef;
    
    
    if (!buttonCloseRef) {
        modalInner.insertAdjacentHTML("afterbegin", buttonClose);
    }

    buttonCloseRef=document.querySelector(".modal__close");
    buttonCloseRef.style.position="absolute";
    buttonCloseRef.style.top="5%";
    buttonCloseRef.style.right="5%";
    buttonCloseRef.style.fontSize="20px";
    buttonCloseRef.style.backgroundColor="transparent";
    buttonCloseRef.style.color="white";
    modalInner.style.position="relative";
    buttonCloseRef.addEventListener("click",(event)=>{
       
       
        event.preventDefault();
        modalWindow.style.display="";
        
    })
})


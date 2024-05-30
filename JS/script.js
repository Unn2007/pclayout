const contens = document.querySelectorAll(".program-line__content");
const allDescr=document.querySelectorAll(".program-line__descr");

contens.forEach((element)=>{
    const title=element.querySelector(".program-line__title");
    const descr = element.querySelector(".program-line__descr");
    
    
   
    title.addEventListener("click",(event)=>{
        const numberClickedDescr = event.target.textContent.split("")[8]
        descr.classList.toggle("active")
        allDescr.forEach((el,index)=>{
            
            if ((el.classList.contains("active"))&&((index+1)!==(+numberClickedDescr))) {
                el.classList.remove("active")
               
            }
            
        })
    });
})
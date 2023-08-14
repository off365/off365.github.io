const email = document.querySelector(".email");
const sign = document.querySelector(".sign");
const cancle = document.querySelector(".fa-xmark")

sign.addEventListener("click" ,function(){
    email.classList.add("open")
    sign.style.display="none"

})

cancle.addEventListener("click", function(){
    email.classList.remove("open")
    sign.style.display="flex"

})

const bars = document.querySelector(".fa-bars");
const links = document.querySelector(".links");

bars.addEventListener("click",function(){
    if(links.classList.contains("drop")){
        links.classList.remove("drop")
    }else{
        links.classList.add("drop")
    }
})

const add = document.querySelector(".arrow")
add.addEventListener("click",function(){
    const mail = document.querySelector("#e")
    console.log(mail.value)
    localStorage.setItem("inputValue",mail.value)
})




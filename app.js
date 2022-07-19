let offBtn = document.querySelector(".off")
let onBtn = document.querySelector(".on")
let bulb = document.querySelector(".bulb")

onBtn.addEventListener("click", function(){
    bulb.src = "pic_bulboff.gif"
})

offBtn.addEventListener("click", function(){
    bulb.src = "pic_bulbon.gif"
})


let offPic = document.querySelector(".offpic")
let onPic = document.querySelector(".onpic")
let pic = document.querySelector(".pic")

onPic.addEventListener("click", function(){
    pic.src = "AYSZ3730.jpg"
})

offPic.addEventListener("click", function(){
    pic.src = "IMG_2979.jpg"
})
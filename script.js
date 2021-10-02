let taskbar = document.getElementsByClassName("touch")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "710px"){
        startmenu.style.bottom = "-650px"
    }
    else{
        startmenu.style.bottom = "710px"
    }
})

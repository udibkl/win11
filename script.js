alert("Please Press F11");
let taskbar = document.getElementsByClassName("taskbar")[0]
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

let string = ""
let buttons = document.querySelectorAll(".btn")
let display = document.querySelector(".dis")

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let disValue = e.target.innerHTML
        if(disValue == "AC"){
            string = ""
        }
        else if (disValue == "="){
            string = eval(display.value)
        }
        else if(disValue == "DE"){
            string = display.value.toString().slice(0, -1)
        }
        else{
            string = string + e.target.innerHTML
        }
        display.value = string
    })
})
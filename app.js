window.addEventListener("load", async () =>{
 let darkMode = localStorage.getItem("darkMode");
//console.log(darkMode)

let btn = document.querySelector("#dark-mode-toggle");

let enabledDarkMode = () =>{
    document.body.classList.add('darkmode');

    localStorage.setItem('darkMode', 'enabled')
}

let disabledDarkMode = () =>{
    document.body.classList.remove("darkmode");

    localStorage.setItem("darkMode", null)
}

if(darkMode === "enabled"){
    enabledDarkMode();
}

btn.addEventListener("click", ()=>{
    darkMode = localStorage.getItem("darkMode");

    if(darkMode !== "enabled"){
        enabledDarkMode();
        console.log(darkMode)
    } else{
        disabledDarkMode();
        console.log(darkMode)
    }
}) 

let cont = document.querySelector(".container")
let contain = document.querySelector(".container");

let hideB = document.querySelector(".unchecked");
let hideBox = document.querySelector("#checked");
hideBox.addEventListener("change", e =>{
    
    let hide = ((hideBox.checked ? true : false) && ((contain.style.display = "block", contain.style.backgroundColor = "black") ? true : false)) || ((hideB.unchecked ? true : false) || (cont.style.display = "block", cont.style.backgroundColor = "white"));

    console.log(hide)
})

let linkRot = {
    linkA : document.querySelector(".btn-accent"),
    linkB: document.querySelector(".btn-secondary"),
    get_btn_group: function() {
        console.log(this)
        document.querySelector(".btn-accent").style.color = "white";
        document.querySelector(".btn-accent").style.transition = "all 1s ease-in-out";

        return this.linkA;
    }
};
console.log(linkRot.get_btn_group() )
 
})
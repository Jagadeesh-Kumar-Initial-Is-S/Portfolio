(function () {  
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            // document.querySelector(".active").classList.remove("active");
            // document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    // document.querySelector(".theme-btn").addEventListener("click", () => {
        
    //     document.body.classList.toggle("light-mode");
        
        
    // });
})();


document.querySelector(".theme-btn").addEventListener("click", (e) => {
        e.preventDefault();
    document.body.classList.toggle("light-mode");
    
    
});


// document.getElementById("theme").click();

// setTimeout(document.getElementById("theme").click(), 20.0 * 1000);
let currentDate = new Date();
let hours = currentDate.getHours();
// let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
// console.log(time, hours);

if(hours<19 && hours>6){
    document.getElementById("theme").click();
}

setTimeout(function () {
    document.getElementById("theme").click();
}, 0.5 * 1000);

setTimeout(function () {
    document.getElementById("theme").click();
}, 1.0 * 1000);

// console.log(hours);

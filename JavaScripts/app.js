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

if(hours<18 && hours>6){
    document.getElementById("theme").click();
    setTimeout(function () {
    modal.style.backgroundColor = "rgb(255,255,255,0.7)";
}, 0.0 * 1000);
}

setTimeout(function () {
    document.getElementById("theme").click();
}, 0.5 * 1000);

setTimeout(function () {
    document.getElementById("theme").click();
}, 1.0 * 1000);

// console.log(hours);

function myFunction001(e) {
    e.preventDefault();
    document.querySelector(".active-btn").classList.remove("active-btn");
    var node = document.querySelector('[title="Home"]');
    node.classList.add("active-btn");
}

function myFunction002(e) {
                e.preventDefault();
                document.querySelector(".active-btn").classList.remove("active-btn");
                var node = document.querySelector('[title="About"]');
                node.classList.add("active-btn");
  }

  function myFunction003(e) {
    e.preventDefault();
    document.querySelector(".active-btn").classList.remove("active-btn");
    var node = document.querySelector('[title="Portfolio"]');
    node.classList.add("active-btn");
}
function myFunction004(e) {
    e.preventDefault();
    document.querySelector(".active-btn").classList.remove("active-btn");
    var node = document.querySelector('[title="Certificates"]');
    node.classList.add("active-btn");
}
function myFunction005(e) {
    e.preventDefault();
    document.querySelector(".active-btn").classList.remove("active-btn");
    var node = document.querySelector('[title="Blogs"]');
    node.classList.add("active-btn");
}
function myFunction006(e) {
    e.preventDefault();
    document.querySelector(".active-btn").classList.remove("active-btn");
    var node = document.querySelector('[title="Donate"]');
    node.classList.add("active-btn");
}
function myFunction007(e) {
    e.preventDefault();
    document.querySelector(".active-btn").classList.remove("active-btn");
    var node = document.querySelector('[title="Contact"]');
    node.classList.add("active-btn");
}
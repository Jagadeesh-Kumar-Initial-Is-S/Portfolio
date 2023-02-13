(function () {


//     let currentDate = new Date();
//     let time = currentDate.getHours();
//     // console.log(time);
//     if(time<19){
//         var button = document.getElementById('theme-btn');
  
//     button.click();
//   }
        
    
    



    
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        
        document.body.classList.toggle("light-mode");
        
        
    })
})();

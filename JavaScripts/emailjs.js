
(function(){
    emailjs.init("-fF-_T-Yubqvo6Df3");
 })();

 function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      subject: document.getElementById("subject").value,
      mnumber: document.getElementById("mobile's-number").value,
      to_name: "Jagadeesh Kumar . S ."
    };
  
    const serviceID = "service_0u4fvri";
    const templateID = "template_2e11rcg";
     if(document.getElementById("name").value == ""||
          document.getElementById("email").value == ""||
          document.getElementById("message").value == ""||
          document.getElementById("mobile's-number").value == ""||
          document.getElementById("subject").value == "")
      {
          alert("Enter all the fields.")
      }
          
          else {
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          document.getElementById("mobile's-number").value = "";
          document.getElementById("subject").value = "";
          // console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  }
  }
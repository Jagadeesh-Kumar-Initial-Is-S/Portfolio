function donate(){
    var in1 =document.getElementById("formGroupExampleInput1").value;

    in1 = in1.toUpperCase();
    
    var money = document.getElementById("formGroupExampleInput2").value;
    
    var options = {
          key: "rzp_test_yl5ED8ivCfD3dM",
          key_secret:"lKiTrGtlL4HdorDh3oqpxBEs",
          amount:money*100,
          currency:in1,
          name:"STARTUP_PROJECTS",
          description:"for testing purpose",
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name:"Jagadeesh Kumar . S",          
            email:"jagadeesh_2k17@proton.me",
            contact:"+917397285837"
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        
        var pay = new window.Razorpay(options);
        pay.open();
        
      
    }
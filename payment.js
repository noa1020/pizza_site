const forPaing=document.getElementById('forPaing');
forPaing.innerHTML= 'לתשלום: '+JSON.parse(sessionStorage.getItem('cost'))+'₪';
const divSend=document.getElementById('divSend');
const cc=document.getElementById('cc');
const cash=document.getElementById('cash');
let flafcash=false;
let flagcc=false;
const ccForm=document.getElementById('ccForm');
cash.onclick=()=>{
    if(flagcc===true){
        ccForm.style.visibility="hidden";
        flagcc=false;
    }
    if( flafcash===false   ){
        flafcash=true;
   const button= document.createElement("button");
    button.innerHTML="אישור";
    button.setAttribute('class', 'col-lg-2  btn btn-success m-2');
    divSend.appendChild(button);
    button.onclick=()=>{
        window.location.href = "./end.html"
    }
    }
}
cc.onclick=()=>{
    if( flafcash===true   ){
        divSend.removeChild(divSend.firstChild);
        flafcash=false;
    }
    if( flagcc===false   ){
        flagcc=true;
        ccForm.style.visibility= "visible";
    }

}
function validateInput(input) {
    input.value = input.value.replace(/\D/g, "");
  }
  function validateForm() {
    var cardNumber = document.getElementById("cardNumber").value;
    var expDate = document.getElementById("expDate").value;
    var cvv = document.getElementById("cvv").value;
    var id = document.getElementById("id").value;
  
    if (cardNumber === "" || expDate === "" || cvv === ""||id==="") {
      alert("נא למלא את כל הפרטים.");
      return false; 
    }
    return true;
  }
  
  
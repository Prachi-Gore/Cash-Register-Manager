//console.log('hiiii');
const billAmount=document.getElementById("bill-amount");
//console.log( Number(billAmount.value)); bill amt should not be string
//console.log(billAmount);
const cashGiven=document.getElementById('cash-given');
const checkBtn=document.querySelector('.btn');
//console.log(typeof checkBtn);
const errorMsg=document.querySelector('.error-msg');

const notesToReturn=document.querySelectorAll('.notesToReturn');
const notes=[2000,500,200,100,50,20,10,5,2,1];

//const notes=document.querySelectorAll('.rupees');
//console.log(notes[0].innerText);

checkBtn.addEventListener("click",  ()=>{
   // console.log("btn clicked")
   
   
    if(billAmount.value<=0){
        errorFn("The bill amount should be greater than 0");
        
    }
   
      else if(Number(cashGiven.value)>=Number(billAmount.value)){
            var amountToBeReturned=cashGiven.value-billAmount.value;
            for(var i=0;i<notes.length;i++){
                notesToReturn[i].innerText=Math.trunc(amountToBeReturned/notes[i]);
                //console.log(notesToReturn[i].innerText)
                if(notes[i]<=amountToBeReturned){
                        amountToBeReturned%=notes[i];
                } 
}
}else{
    errorFn("Cash Given should be greater than Bill Amount");
}
}
);
const errorFn=(msg)=>{
    
   
    errorMsg.innerText=msg;
    errorMsg.style.display="block";
    //console.log(errorMsg.innerText);
    
}





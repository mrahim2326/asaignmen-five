document.getElementById('donate-now').addEventListener('click',function(event){
    event.preventDefault();

    const cashout=getInputFieldValuerById('inp-one');
    const balance=this.getInputFieldValuerById('main-balance')
    if(isNaN(cashout)){
        alert('faild to cashout')
        return;
    }
      const newBlance=balance- cashout;
      document.getElementById('main-balance',).innerText=newBlance;
     
 
})
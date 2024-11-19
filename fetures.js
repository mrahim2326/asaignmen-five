// document.getElementById('blog').addEventListener('click',
//     function(event){
//         event.preventDefault();
//         window.location.href = '/fAndQ.html'

// })
// document.getElementById('home').addEventListener('click',
//     function(){
//      window.location.href='../index.html'
//     }
// )
document.getElementById('blog').addEventListener('click',
    function(){
        window.location.href='quaction.html'
    }
)
document.getElementById('home').addEventListener('click',
    function(){
        window.location.href='index.html'
    }
)
document.getElementById('donate-now').addEventListener('click',
    function(event){
        event.preventDefault();
        showSectionId('popup-sec');
        const cashout=getInputFieldValuerById('input-cash-out');
        const pinNumber=getInputFieldValuerById('input-cash-out-pin');
        console.log('add money pareaniter', cashout,pinNumber)


    }
)
document.getElementById('btn-pop').addEventListener('click',
    function(){
        this.hidePopover('popup-section')
    }
)

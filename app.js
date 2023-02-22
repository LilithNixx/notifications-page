const main = document.querySelector('main');
const amount = document.querySelector('.amount');
const markedRead = document.querySelector('.marked-read');
const dot = document.querySelectorAll('i');


markedRead.addEventListener('click', () => {
    
    for(let n = 0; n < main.children.length; n++){
        main.children[n].classList.remove('unseen');
    }
    
    dot.forEach(dot => {dot.style.visibility = 'hidden';})
        
    amount.textContent = '0';

});


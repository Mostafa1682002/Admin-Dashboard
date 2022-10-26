let header=document.querySelector('header')
let sidbar=document.querySelector('.sidbar');
let closeSidbar=document.querySelector('.close-sidbar');
let openSidar=document.querySelector('.open-sidbar');

addEventListener('scroll',()=>{
    if(scrollY>50){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
})
openSidar.addEventListener('click',()=>{
    sidbar.classList.add('active');
})
closeSidbar.addEventListener('click',()=>{
    sidbar.classList.remove('active');
})

//Progress
let yearlyBox=document.querySelector('.yearly-box');
let allspanProg=document.querySelectorAll('.prog span');
addEventListener('scroll',()=>{
    if(scrollY>=yearlyBox.offsetTop-350){
        allspanProg.forEach((span)=>{
            span.style.width=span.getAttribute('data-prog');
        })
    }
})

//Counter Number
let ticketBox=document.querySelector('.tickets-box');
let allNumber=document.querySelectorAll('.item-ticket > h3');
function count(number){
    let interval=setInterval(()=>{
        if(number.textContent==number.getAttribute('data-number')){
            clearInterval(interval);
        }else{
            number.textContent++;
        }
    },2000/number.getAttribute('data-number'))
}
addEventListener('scroll',()=>{
    if(scrollY>=ticketBox.offsetTop-350){
        allNumber.forEach(num=>{count(num)})
    }
})
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
if(document.body.classList.contains('dashboard')){
    addEventListener('scroll',()=>{
        if(scrollY>=yearlyBox.offsetTop-350){
            allspanProg.forEach((span)=>{
                span.style.width=span.getAttribute('data-prog');
            })
        }
    })
}

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
if(document.body.classList.contains('dashboard')){
    addEventListener('scroll',()=>{
        if(scrollY>=ticketBox.offsetTop-350){
            allNumber.forEach(num=>{count(num)})
        }
    })
}

//Button Up
let upBtn=document.querySelector('.up');
addEventListener('scroll',()=>{
    if(scrollY>=120){
        upBtn.classList.add('active')
    }else{
        upBtn.classList.remove('active')
    }
})
upBtn.addEventListener('click',()=>{
    window.scrollTo(0,0)
})

//Backup Manager
let backupContent=document.querySelectorAll('.backup-box');
backupContent.forEach((box)=>{
    box.addEventListener('click',()=>{
        backupContent.forEach((e)=>e.classList.remove('active'))
        box.classList.add('active')
    })
})
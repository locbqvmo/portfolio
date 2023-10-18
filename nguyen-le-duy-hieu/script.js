const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);

const cursor=$('.cursor')
const headerMobile=$('.header_mobile')
const headerPC=$('#header-pc').parentElement
const headerMobileContainer=$('.header_mobile .header_nav-mobile')
const homeTitle=$('.home_section_title')
const linkMobile=$$('.header_nav-mobile a')
const btnToggle=$$('.button_menu-toggle')

btnToggle[0].addEventListener('click',()=>{
    headerMobile.style.display='block'
})

btnToggle[1].addEventListener('click',()=>{
    headerMobile.style.display='none'
})
headerMobileContainer.addEventListener('click',()=>{
    headerMobile.style.display='none'
})


window.addEventListener('resize',()=>{
    if(window.innerWidth>1023){
        headerMobile.style.display='none'
    }
})


let prevScrollY = window.scrollY||window.pageYOffset;

window.addEventListener('scroll',()=>{
    const currentScrollY=window.scrollY||window.pageYOffset;

    if((document.body.scrollTop>300||document.documentElement.scrollTop>300)&&prevScrollY>currentScrollY){
        headerPC.classList.add('fixed-nav')
    }else{
        headerPC.classList.remove('fixed-nav')
    }
    prevScrollY=currentScrollY
})

// infinite typing effect
setInterval(()=>{
    const nameTyping=document.createElement('p')
    nameTyping.innerHTML="Duy Hieu - Web Developer."
    nameTyping.classList.add('typewriter')
    homeTitle.appendChild(nameTyping)

    setTimeout(()=>{
        homeTitle.removeChild(nameTyping)
    },4900)
},5000)

// cursor
document.addEventListener('mousemove',(e)=>{
    let x=e.clientX
    let y=e.clientY
    
    cursor.style.top=y+'px';
    cursor.style.left=x+'px';
    cursor.style.display='block';
})

document.addEventListener('mouseout',()=>{
    cursor.style.display='none'
})
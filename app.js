let menubar= document.querySelector('.fa-bars');

let navbar = document.querySelector('.navbar');

menubar.addEventListener('click', () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle')
})

window.addEventListener('scroll' , () =>{
    menubar.classList.remove('fa-times')
    navbar.classList.remove('nav-toggle')
})



let typewriter = document.querySelector('.typewriter')
let myname1 = `im kiran`
let myname2 = `
 a web developer
`
let fullName = `${myname1}
 
 ${myname2}`




let index = 1;

function typing() {
    let new_name = fullName.slice(0,index)
    typewriter.innerHTML=  new_name;
    index > fullName.length ? index = 1 : index++
    setTimeout(() => typing(

    ),300)
}

typing()
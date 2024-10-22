const navLinks = document.querySelector('#navlinks');
const showMenu = document.querySelector('#showmenu');
const hideMenu = document.querySelector('#hidemenu');


function menu(){
    navLinks.style.right = "0";
}

function close1(){
    navLinks.style.right = "-200px";
}


showMenu.addEventListener('click', ()=>{
    menu();
})

hideMenu.addEventListener('click', () =>{
    close1();
})

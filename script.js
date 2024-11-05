const menuicon= document.querrySelector('#menu-icon')
const navbar= document.querrySelector('.navbar')

menuicon.onclick = ()=> {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toogle('active');
}
const hideMenuOnResize = (openedMenuDiv,menu) =>{

    // on resize menu become hidden
    openedMenuDiv.classList.remove('opening-menu')
    menu.childNodes[1].classList.remove('opening-menu')
    menu.childNodes[3].classList.remove('opening-menu')
    menu.childNodes[5].classList.remove('opening-menu')
    menu.childNodes[1].style.transform='rotate(0deg)'
    menu.childNodes[1].style.backgroundColor='black'
    menu.childNodes[3].classList.remove('opening-menu-middle-element')
    menu.childNodes[3].style.backgroundColor='black'
    menu.childNodes[5].style.transform='rotate(0deg)'
    menu.childNodes[5].style.backgroundColor='black'
}
export default hideMenuOnResize
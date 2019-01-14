import hideMenuOptions from '../hideMenuOptions/hideMenuOptions'

const menuEvent = () =>{

    const openedMenuDiv=document.querySelector('.opened-menu')
    const menu=document.querySelector('.menu')


    const click=()=>{
        if(menu.childNodes[1].style.transform==='rotate(-45deg)'){


            setTimeout(()=>{
                openedMenuDiv.classList.remove('opening-menu')
                menu.childNodes[1].classList.remove('opening-menu')
                menu.childNodes[3].classList.remove('opening-menu')
                menu.childNodes[5].classList.remove('opening-menu')

            },1000)

            //on close menu hide opened menu elements
            hideMenuOptions(openedMenuDiv)
            //animation burger bar
            openedMenuDiv.style.transform='translateX(100%)'
            menu.childNodes[1].style.transform='rotate(0deg)'
            menu.childNodes[1].style.backgroundColor='black'
            menu.childNodes[3].classList.remove('opening-menu-middle-element')
            menu.childNodes[3].style.backgroundColor='black'
            menu.childNodes[5].style.transform='rotate(0deg)'
            menu.childNodes[5].style.backgroundColor='black'
        }else{
            openedMenuDiv.classList.add('opening-menu')
            menu.childNodes[1].classList.add('opening-menu')
            menu.childNodes[3].classList.add('opening-menu')
            menu.childNodes[5].classList.add('opening-menu')
            //animation burger bar
            openedMenuDiv.style.transform='translateX(0%)'
            menu.childNodes[1].style.transform='rotate(-45deg)'
            menu.childNodes[1].style.backgroundColor='white'
            menu.childNodes[3].classList.add('opening-menu-middle-element')
            menu.childNodes[3].style.backgroundColor='white'
            menu.childNodes[5].style.transform='rotate(45deg)'
            menu.childNodes[5].style.backgroundColor='white'
        }
    }

    click()
}

export default menuEvent
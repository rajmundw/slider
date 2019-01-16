import hideMenuOptions from '../hideMenuOptions/hideMenuOptions'

const menuEvent = (event,type) =>{
    const eventHandler =event.toString().substr(8,10)
    const openedMenuDiv=document.querySelector('.opened-menu')
    const menu=document.querySelector('.menu')

    if(eventHandler==="TouchEvent"){
        console.log(window.location.hash)
        if(window.location.hash==="#menu"){
            window.location.hash=""
        }else{
            window.location.hash="menu"
        }
    }
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

    if(eventHandler==="TouchEvent"){
        click()
    }

    if(type==="mainPage" && document.querySelector(".opened-menu").style.transform==="translateX(0%)"){
        click()

    }else if(type==="menuPage" && document.querySelector(".opened-menu").style.transform==="translateX(100%)"){
        click()

    }
}

export default menuEvent
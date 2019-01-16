import hideMenuOptions from '../hideMenuOptions/hideMenuOptions'
import menuEvent from "../hushMapLayout/menuEvent"


const router = () => {

    const openedMenuDiv=document.querySelector('.opened-menu')

    window.addEventListener("hashchange",()=>{
        const currentHash=window.location.hash

        switch(currentHash){
            case "":{

                document.querySelector(".photo-slider").classList.remove("opened-photo")

                if(window.innerWidth<=1020){
                    if(document.querySelector(".opened-menu").style.transform==="translateX(0%)"){
                        menuEvent(event,"mainPage")
                    }
                }else{
                    document.querySelector('.initial-inputs-container').style.display = 'none'
                    document.querySelector('.opened-menu').style.height = '0%'
                    document.querySelector('.close-menu-laptop-layout').style.display="none"
                    hideMenuOptions(openedMenuDiv,"hashChange")

                }

                break;
            }
            case "#menu":{
                if(window.innerWidth<=1020) {
                    menuEvent(event,"menuPage")
                }else{
                    document.querySelector('.opened-menu').style.height = '100%'
                    document.querySelector('.close-menu-laptop-layout').style.display="block"
                    console.log(document.querySelector('.opened-menu').style.height)

                    openedMenuDiv.childNodes[1].childNodes.forEach(li=>{
                        console.log(li.getAttribute("click"))
                        if(li.getAttribute("click")==="true"){
                            const inputsContainer = li.nextSibling
                            inputsContainer.style.display = 'block'
                        }
                    })

                }
                break;
            }
            case "#photo":{
                document.querySelector(".photo-slider").classList.add("opened-photo")
                break;
            }
        }
    })
}

export default router
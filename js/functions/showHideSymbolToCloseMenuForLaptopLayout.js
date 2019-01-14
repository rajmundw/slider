const showHideSymbolToCloseMenuForLaptopLayout = () =>{
    const closeMenuForLaptopLayout=document.querySelector(".close-menu-laptop-layout")
    if(window.innerWidth>1020 && document.querySelector(".opened-menu").style.height==="100%"){
        closeMenuForLaptopLayout.style.display="block"
        document.querySelector(".opened-menu-list").style.position="absolute",
        window.scrollTo(0, 0)

    }else if(window.innerWidth>1020){
        closeMenuForLaptopLayout.style.display="none"
        document.querySelector(".opened-menu-list").style.position="fixed"
    }
}

export default showHideSymbolToCloseMenuForLaptopLayout
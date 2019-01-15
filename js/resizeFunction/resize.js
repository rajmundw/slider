import numberOfPages from '../hushMapLayout/numberOfpages'
import hideMenuOptions from "../hideMenuOptions/hideMenuOptions"
import createPhotoSlider from "../functions/createPhotoSlider"
import setPageHeight from "../functions/setPageHeight"

const resizeFunction = (type) =>{

    window.addEventListener('resize',()=>{
        const openedMenuDiv=document.querySelector('.opened-menu')
        const menu=document.querySelector('.menu')
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



        if(document.querySelector(".photo-slider").classList.contains("opened-photo") ){
            createPhotoSlider()
        }
        if(window.innerWidth<=1020){
            document.querySelector(".opened-menu").style.height="100%"
            document.querySelector(".opened-menu-list").style.position=""
            hideMenuOptions(openedMenuDiv)
        }else{
            document.querySelector(".opened-menu").style.height="0%"
            document.querySelector(".opened-menu-list").style.position="fixed"
            document.querySelector(".close-menu-laptop-layout").style.display="none"
            hideMenuOptions(openedMenuDiv)

        }
        if(document.querySelector(".add-category")) {
            if (window.innerWidth <= 1020 && document.querySelector(".add-category").innerHTML === "submit") {
                document.querySelector(".back-to-menu-from-add-element").style.display = "block"
            }
        }

        setPageHeight()


        if(document.querySelector(".category-container")) {
            const categoryContainer = document.querySelector(".category-container")
            numberOfPages(categoryContainer, '', "resize")
        }

        document.querySelector('.hush-map-header').style.marginTop="130px"
        if(window.innerWidth>300 && window.innerWidth<=570){
            if(!document.querySelector('#hush-map').classList.contains('initial')){
                document.querySelector('.slide').style.display="block"
            }

            document.querySelector('.opened-menu').style.transform="translateX(100%)"
        }else if(window.innerWidth<=300){
            if(!document.querySelector('#hush-map').classList.contains('initial')){
                document.querySelector('.slide').style.display="block"
            }

            document.querySelector('.opened-menu').style.transform="translateX(100%)"
            document.querySelector('.hush-map-header').style.marginTop="130px"
        }else if(window.innerWidth<=1020 && window.innerWidth>570) {
            if(!document.querySelector('#hush-map').classList.contains('initial')){
                const headerHeight=  document.querySelector('.hush-map-header').getBoundingClientRect().bottom
            }

            document.querySelector('.opened-menu').style.transform="translateX(100%)"
            document.querySelector('.slide').style.display="none"
            document.querySelector('.hush-map-header').style.marginTop="170px"

        }else if(window.innerWidth<=1800 && window.innerWidth>1020){
            document.querySelector('.slide').style.display="none"
            document.querySelector('.hush-map-header').style.marginTop="170px"
            document.querySelector('.opened-menu').style.transform=""
        }else if(window.innerWidth>1800) {
            document.querySelector('.slide').style.display = "none"
            document.querySelector('.hush-map-header').style.marginTop = "15vh"
            document.querySelector('.opened-menu').style.transform = ""
        }

        //small mobile layout slide and high propeities on resize
        if(window.innerWidth<=300){
            if(document.querySelector('.category-container') && document.querySelector('.category-container').style.transform) {
                const photos = document.querySelectorAll('#photo')
                photos.forEach(photo => {
                    photo.style.width = "33.33%"
                    photo.style.left="11%"

                })
                const trushes = document.querySelectorAll('#delete')
                trushes.forEach(trush => {
                    trush.style.width = "33.33%"
                    trush.style.left = "20%"
                })
            }

        }
        //mobile layout slide and high propeities on resize
        else if(window.innerWidth>300 && window.innerWidth<570){
            if(document.querySelector('.category-container') && document.querySelector('.category-container').style.transform) {
                const photos = document.querySelectorAll('#photo')
                photos.forEach(photo => {
                    photo.style.width = "33.33%"
                    photo.style.left="6%"
                })
                const trushes = document.querySelectorAll('#delete')
                trushes.forEach(trush => {
                    trush.style.width = "33.33%"
                    trush.style.left = "25%"
                })
            }
        }
        else if(window.innerWidth>570 && window.innerWidth<=1020){

            if(document.querySelector('.category-container') && document.querySelector('.category-container').style.transform) {

                document.querySelector('.category-container').style.transform="translateX(0%)"

                const photos = document.querySelectorAll('#photo')
                photos.forEach(photo => {
                    photo.style.left=`40%`
                    photo.style.width = "25%"
                    photo.style.transform=`translateX(0%)`

                })
                const trushes = document.querySelectorAll('#delete')
                trushes.forEach(trush => {
                    trush.style.width = "25%"
                    trush.style.left = `60%`
                    trush.style.transform=`translateX(0%)`

                })
            }
        }
    })

    if(type==="lastPage"){
        if(window.innerWidth>300 && window.innerWidth<=570){

            if(!document.querySelector('#hush-map').classList.contains('initial')){
                document.querySelector('.slide').style.display="block"
            }

            document.querySelector(".hush-map-header").style.marginTop="130px"

            if(window.innerHeight>706){
                //if device has higher screen height than 706 set screen heigh as height page container
                document.querySelector('.page-container').style.height=`${window.innerHeight}px`

                if(document.querySelector(".category-container")){
                    const categoryContainer=document.querySelector(".category-container")
                    // run function to set proper number of pages
                    numberOfPages(categoryContainer,'',"resize")
                }
            }else{
                document.querySelector('.page-container').style.height=`${706}px`
                if(document.querySelector(".category-container")) {
                    const categoryContainer = document.querySelector(".category-container")
                    numberOfPages(categoryContainer, '', "resize")
                }
            }
        }else if(window.innerWidth<=300){

            if(!document.querySelector('#hush-map').classList.contains('initial')){
                document.querySelector('.slide').style.display="block"
            }

            document.querySelector(".hush-map-header").style.marginTop="130px"
            if(window.innerHeight>901){
                //if device has higher screen height than 706 set screen heigh as height page container
                document.querySelector('.page-container').style.height=`${window.innerHeight}px`

                if(document.querySelector(".category-container")){
                    const categoryContainer=document.querySelector(".category-container")
                    // run function to set proper number of pages
                    numberOfPages(categoryContainer,'',"resize")
                }
            }else{
                document.querySelector('.page-container').style.height=`${901}px`
                const categoryContainer=document.querySelector(".category-container")
                if(document.querySelector(".category-container")) {
                    numberOfPages(categoryContainer, '', "resize")
                }
            }
        }else if(window.innerWidth<=1800 && window.innerWidth>570) {

            document.querySelector('.slide').style.display="none"
            if (window.innerHeight > 1050) {
                //if device has higher screen height than 706 set screen heigh as height page container
                document.querySelector('.page-container').style.height = `${window.innerHeight}px`
                if(document.querySelector(".category-container")) {
                    const categoryContainer=document.querySelector(".category-container")
                    numberOfPages(categoryContainer, '', "resize")
                }
            } else {
                if(document.querySelector(".category-container")) {
                    const categoryContainer=document.querySelector(".category-container")
                    numberOfPages(categoryContainer, '', "resize")
                }
                document.querySelector('.page-container').style.height = `${1050}px`
            }
        }else if(window.innerWidth<=1800){
            if(document.querySelector(".category-container")) {
                const categoryContainer=document.querySelector(".category-container")
                numberOfPages(categoryContainer, '', "resize")
            }
        }

    }
}
export default resizeFunction

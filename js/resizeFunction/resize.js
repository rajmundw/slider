import numberOfPages from '../hushMapLayout/numberOfpages'
import hideMenuOptions from "../hideMenuOptions/hideMenuOptions"
import createPhotoSlider from "../functions/createPhotoSlider"
import setPageHeight from "../functions/setPageHeight"
import hideMenuOnResize from "../functions/hideMenuOnResize"
import reiszeSlideHandler from "./resizeSlideHandler"
import resizePhotoAndTrushSize from "./resizePhotoAndTrushSize"

const resizeFunction = (type) =>{

    window.addEventListener('resize',()=>{

        const openedMenuDiv=document.querySelector('.opened-menu')
        const menu=document.querySelector('.menu')

        hideMenuOnResize(menu)

        // set proper feature for zoom photo
        if(document.querySelector(".photo-slider").classList.contains("opened-photo") ){
            createPhotoSlider()
        }


        // small layout other type of menu
        if(window.innerWidth<=1020){
            document.querySelector(".opened-menu").style.height="100%"
            document.querySelector(".opened-menu-list").style.position=""
            hideMenuOptions(openedMenuDiv)
        }
        // laptop layout full menu and other options
        else{
            document.querySelector(".opened-menu").style.height="0%"
            document.querySelector(".opened-menu-list").style.position="fixed"
            document.querySelector(".close-menu-laptop-layout").style.display="none"
            hideMenuOptions(openedMenuDiv)

        }


        // for small layout fuctionality to back to menu from add elements input
        if(document.querySelector(".add-category")) {
            if (window.innerWidth <= 1020 && document.querySelector(".add-category").innerHTML === "submit") {
                document.querySelector(".back-to-menu-from-add-element").style.display = "block"
            }
        }

        // on resize set proper page height
        setPageHeight()



        // on resize have to check number of element on page because it could be changed
        if(document.querySelector(".category-container")) {
            const categoryContainer = document.querySelector(".category-container")
            numberOfPages(categoryContainer, '', "resize")
        }

        reiszeSlideHandler()

        resizePhotoAndTrushSize()
    })

    // if last slider page have to change that afert resize on this page will be append any elements

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

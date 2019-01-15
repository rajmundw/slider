const reiszeSlideHandler = () =>{

    // show or hide arrow to slide and set opened menu transport value form smaller and bigger layout
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
}
export default reiszeSlideHandler
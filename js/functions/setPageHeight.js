const setPageHeight = () =>{
    if (window.innerWidth <= 300 ) {
        if(window.innerHeight > 901) {
            document.querySelector('.page-container').style.height = `${window.innerHeight}px`
        }else{
            document.querySelector('.page-container').style.height = "901px"
        }
    }else if(window.innerWidth>300 && window.innerWidth<=570){
        if(window.innerHeight>706) {
            document.querySelector('.page-container').style.height = `${window.innerHeight}px`
        }else{
            document.querySelector('.page-container').style.height = "706px"
        }
    } else if (window.innerWidth <= 1020 && window.innerWidth > 570) {
        if( window.innerHeight > 1050) {
            document.querySelector('.page-container').style.height = `${window.innerHeight}px`
        }else{
            document.querySelector('.page-container').style.height = "1050px"
        }
    }else{
        document.querySelector('.page-container').style.height = "100%"
    }
}
export default setPageHeight
import numberOfPages from '../hushMapLayout/numberOfpages'
const resizeFunction = (type) =>{

    window.addEventListener('resize',()=>{

        if(document.querySelector('#hush-map').classList.contains('initial')){
            if (window.innerWidth <= 300 && window.innerHeight > 901) {
                document.querySelector('.page-container').style.height = `${window.innerHeight}px`

            } else if (window.innerWidth > 300 && window.innerWidth <= 570 && window.innerHeight > 706) {
                document.querySelector('.page-container').style.height = `${window.innerHeight}px`

            } else if (window.innerWidth <= 768 && window.innerWidth > 570 && window.innerHeight > 1050) {
                document.querySelector('.page-container').style.height = `${window.innerHeight}px`
            }
        }


        if(document.querySelector(".category-container")) {
            const categoryContainer = document.querySelector(".category-container")
            numberOfPages(categoryContainer, '', "resize")
        }

        document.querySelector('.hush-map-header').style.marginTop="130px"
        if(window.innerWidth>300 && window.innerWidth<=570){
            if(!document.querySelector('#hush-map').classList.contains('initial')){
                document.querySelector('.page-container').style.height=``
                document.querySelector('.slide').style.display="block"
            }
        }else if(window.innerWidth<=300){
            if(!document.querySelector('#hush-map').classList.contains('initial')){
                document.querySelector('.page-container').style.height=``
                document.querySelector('.slide').style.display="block"
            }

            document.querySelector('.hush-map-header').style.marginTop="130px"
        }else if(window.innerWidth<=768 && window.innerWidth>570) {
            if(!document.querySelector('#hush-map').classList.contains('initial')){
                document.querySelector('.page-container').style.height=``
                const headerHeight=  document.querySelector('.hush-map-header').getBoundingClientRect().bottom
            }
            document.querySelector('.slide').style.display="none"
            document.querySelector('.hush-map-header').style.marginTop="170px"

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
        else if(window.innerWidth>570 && window.innerWidth<=768){

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
        }else if(window.innerWidth<=768 && window.innerWidth>570) {

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
        }

    }
}
export default resizeFunction

const resizeFunction = () =>{


    window.addEventListener('resize',()=>{
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

            if(!document.getElementById('hush-map').classList.contains('initial')){
                document.querySelector('.page-container').style.minHeight="901px"
            }
        }else if(window.innerWidth>300 && window.innerWidth<570){
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
            if(!document.getElementById('hush-map').classList.contains('initial')){
                document.querySelector('.page-container').style.minHeight="706px"
            }
        }
    })
}
export default resizeFunction

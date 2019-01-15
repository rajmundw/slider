const resizePhotoAndTrushSize = () =>{
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
}
export default resizePhotoAndTrushSize
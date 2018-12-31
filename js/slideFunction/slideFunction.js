const slideFunction = () =>{
    const slideBarLeft=document.querySelector('.left-slide-bar')
    const slideBarRight=document.querySelector('.right-slide-bar')


    slideBarLeft.addEventListener("touchstart",()=>{
        const categoryContainer =  document.querySelector('.category-container')
        const currentTranslation=categoryContainer.style.transform
        // add animation class
        categoryContainer.classList.add("slide-animation")

        const photos=document.querySelectorAll('#photo')
        photos.forEach(photo=>{
            if(window.innerWidth<=300){
                photo.style.left="11%"

            }else if(window.innerWidth>300 && window.innerWidth<=570){
                photo.style.left="6%"

            }
            photo.style.width="33.33%"

        })
        const trushes=document.querySelectorAll('#delete')
        trushes.forEach(trush=>{
            if(window.innerWidth<=300){
                trush.style.left="20%"

            }else if(window.innerWidth>300 && window.innerWidth<=570){
                trush.style.left="24%"

            }
            trush.style.width="33.33%"
        })


        //slide steps
        if(!currentTranslation || currentTranslation==="translateX(0%)") {
            categoryContainer.style.transform="translateX(-33.33%)"
            photos.forEach(photo=>{
                photo.style.transform=`translateX(100%)`
            })
            trushes.forEach(trush=>{
                trush.style.transform=`translateX(100%)`
            })

            // nav to slide handler
            setTimeout(()=>{
                slideBarRight.style.display='block'
            },1500)
        }else if(currentTranslation==="translateX(-33.33%)"){
            categoryContainer.style.transform="translateX(-66.66%)"
            photos.forEach(photo=>{
                photo.style.transform=`translateX(200%)`
            })
            trushes.forEach(trush=>{
                trush.style.transform=`translateX(200%)`
            })
            setTimeout(()=>{
                slideBarLeft.style.display='none'
            },1500)
        }
    })

    slideBarRight.addEventListener("touchstart",()=>{

        const photos=document.querySelectorAll('#photo')
        photos.forEach(photo=>{
            if(window.innerWidth<=300){
                photo.style.left="11%"

            }else if(window.innerWidth>300 && window.innerWidth<=570){
                photo.style.left="6%"

            }
            photo.style.width="33.33%"

        })
        const trushes=document.querySelectorAll('#delete')
        trushes.forEach(trush=>{
            if(window.innerWidth<=300){
                trush.style.left="20%"

            }else if(window.innerWidth>300 && window.innerWidth<=570){
                trush.style.left="24%"

            }
            trush.style.width="33.33%"
        })


        const categoryContainer =  document.querySelector('.category-container')
        const currentTranslation=categoryContainer.style.transform

        //slide steps
        if(currentTranslation==="translateX(-66.66%)") {
            categoryContainer.style.transform="translateX(-33.33%)"
            photos.forEach(photo=>{
                photo.style.transform=`translateX(100%)`
            })
            trushes.forEach(trush=>{
                trush.style.transform=`translateX(100%)`
            })
            // nav to slide handler
            setTimeout(()=>{
                slideBarLeft.style.display='block'
            },1500)
        }else if(currentTranslation==="translateX(-33.33%)"){
            categoryContainer.style.transform="translateX(0%)"
            photos.forEach(photo=>{
                photo.style.transform=`translateX(0%)`
            })
            trushes.forEach(trush=>{
                trush.style.transform=`translateX(0%)`
            })
            // nav to slide handler
            setTimeout(()=>{
                slideBarRight.style.display='none'
            },1500)
        }
    })
}
export default slideFunction
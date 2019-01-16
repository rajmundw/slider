const createPhotoSlider = (event) =>{

    let imgParent=''
    let src=''
    let clickPhotoSrc=''
    if(typeof event!=="undefined"){
        imgParent=event.target.parentElement.parentElement
        const ulId=imgParent.parentElement.id
        document.querySelector(".img-parent").id=ulId
        console.log(imgParent)
        clickPhotoSrc=event.target.src

    }else{
        const ulId=document.querySelector(".img-parent").id
        const ulArray=document.querySelectorAll("ul")
        ulArray.forEach(ul=>{
            if(ul.id===ulId){
                ul.childNodes.forEach(li=>{
                    if(li.id==="photo"){
                        console.log(li)
                        imgParent=li
                    }
                })
            }
        })
        clickPhotoSrc=imgParent.children[0].children[0].src
    }

    if(window.innerWidth>=768){
        src=imgParent.getAttribute("regularurl")
    }else{
        src=clickPhotoSrc
    }
    document.querySelector('.photo-slider').classList.add('opened-photo')
    const img=document.querySelector('.img-parent').children[0]
    img.src=`${src}`
    if(imgParent.getAttribute("width")>imgParent.getAttribute("height")){

        const windowWidth=window.innerWidth*0.8
        const windowHeight=window.innerHeight*0.9
        let photoWidth=windowWidth
        let photoHeight=(photoWidth/imgParent.getAttribute("width"))*imgParent.getAttribute("height")

        if(photoHeight>windowHeight){
            img.style.height = "100%"
            img.style.width = "auto"
        }else{
            img.style.width = "100%"
            img.style.height = "auto"
        }

    }else{

        const windowWidth=window.innerWidth*0.8
        const windowHeight=window.innerHeight*0.9
        let photoHeight=windowHeight
        let photoWidth=(photoHeight/imgParent.getAttribute("height"))*imgParent.getAttribute("width")

        if(photoWidth>windowWidth){

            img.style.width = "100%"
            img.style.height = "auto"
        }else{
            img.style.height = "100%"
            img.style.width = "auto"
        }

    }
}
export default createPhotoSlider
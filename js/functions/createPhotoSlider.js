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
        const currentImgWidth=Math.ceil(document.querySelector(".img-parent").children[0].getBoundingClientRect().width)
        const currentImgHeight=Math.ceil(document.querySelector(".img-parent").children[0].getBoundingClientRect().height)

        if(currentImgWidth>=Math.ceil(window.innerWidth*0.8) && currentImgHeight==Math.ceil(window.innerHeight*0.9)) {
            img.style.width = "100%"
            img.style.height = "auto"
        }else if(currentImgWidth===Math.ceil(window.innerWidth*0.8) && currentImgHeight>=Math.ceil(window.innerHeight*0.9)){
            img.style.height = "100%"
            img.style.width = "auto"

        }else if(currentImgWidth>=Math.ceil(window.innerWidth*0.8)){
            img.style.width = "100%"
            img.style.height = "auto"
        }else{
            img.style.height = "100%"
            img.style.width = "auto"
        }
    }else{
        const currentImgWidth=Math.ceil(document.querySelector(".img-parent").children[0].getBoundingClientRect().width)
        const currentImgHeight=Math.ceil(document.querySelector(".img-parent").children[0].getBoundingClientRect().height)


        if(currentImgWidth>=Math.ceil(window.innerWidth*0.8) && currentImgHeight==Math.ceil(window.innerHeight*0.9)) {
            img.style.width = "100%"
            img.style.height = "auto"
        }else if(currentImgWidth===Math.ceil(window.innerWidth*0.8) && currentImgHeight>=Math.ceil(window.innerHeight*0.9)){
            img.style.height = "100%"
            img.style.width = "auto"

        }else if(currentImgWidth>=Math.ceil(window.innerWidth*0.8)){
            img.style.width = "100%"
            img.style.height = "auto"
        }else{
            img.style.height = "100%"
            img.style.width = "auto"
        }

    }
}
export default createPhotoSlider
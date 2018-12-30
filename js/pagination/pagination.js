const pagination = (categoryContainer,hushMapContainer,activePage) =>{
    let tableHead=''
    let ul=''

    if(document.querySelector('.table-head')){
        console.log('t-head')
        ul=document.querySelector('.table-head')
        document.querySelector('.table-head').remove()

    }else{
        ul=document.createElement('ul')
        ul.classList.add('table-head')

        const created_atText = 'Create date'
        const created_at=document.createElement('li')
        created_at.id='created'

        created_at.innerHTML=created_atText
        ul.appendChild(created_at)

        const elementWidthText = 'Width'
        const elementWidth=document.createElement('li')
        elementWidth.id='width'

        elementWidth.innerHTML=elementWidthText
        ul.appendChild(elementWidth)

        const elementHeightText= "Height"
        const elementHeight=document.createElement('li')
        elementHeight.id='height'

        elementHeight.innerHTML=elementHeightText
        ul.appendChild(elementHeight)

        const elementLikesText= "Likes"
        const elementLikes=document.createElement('li')
        elementLikes.id='likes'

        ul.setAttribute('likes',elementLikesText)
        elementLikes.innerHTML=elementLikesText
        ul.appendChild(elementLikes)

        const deleteElement=document.createElement('li')
        ul.appendChild(deleteElement)

    }

    categoryContainer.childNodes.forEach((ul)=>{
        if(ul.style.display==='none'){
            ul.style.display='flex'
        }
    })

    categoryContainer.childNodes.forEach((ul,index)=>{
        if(index>=activePage*5-5 && index<activePage*5){

        }else{
            ul.style.display='none'
        }
    })
    console.log(categoryContainer.childNodes.length)
    if(categoryContainer.childNodes.length>0){
        if(document.querySelector('.parent-page-numbers-parent')){

            const pageNumbers=document.querySelector('.parent-page-numbers-parent')
            pageNumbers.parentNode.insertBefore(categoryContainer, pageNumbers)

        }else{
            hushMapContainer.appendChild(categoryContainer)

        }

    }
    if(document.querySelector('.category-container')){
        categoryContainer.childNodes[0].parentNode.insertBefore(ul, categoryContainer.childNodes[0])
    }




    if(document.querySelector('.slide')) {
        const slideBarLeft = document.querySelector('.left-slide-bar')
        const slideBarRight = document.querySelector('.right-slide-bar')
        const currentTranslation = categoryContainer.style.transform

        if (document.querySelector('.slide').classList.contains('initial')) {
            slideBarRight.style.display = 'none'
            document.querySelector('.slide').style.display = 'block'
            document.querySelector('.slide').classList.remove('initial')
        }

        if (!currentTranslation || currentTranslation === "translateX(0%)") {

            slideBarLeft.style.display = 'block'
            slideBarRight.style.display = 'none'
        } else if (currentTranslation === "translateX(-33.33%)") {
            slideBarRight.style.display = 'block'
            slideBarLeft.style.display = 'block'
        } else if (currentTranslation === "translateX(-66.66%)") {
            slideBarRight.style.display = 'block'
            slideBarRight.style.display = 'none'
        }
    }

    setTimeout(()=>{
        const category=document.querySelector('.category-container').id.toUpperCase()
        document.querySelector('.hush-map-header').innerText=category
    },50)

}
export default pagination
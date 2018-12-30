import deleteCategoryElement from '../deleteFunction/deleteCategoryElement'

const createPhotoDetailsList = (categoryContainer,newCategoryElementsArray,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton,hushMapContainer) =>{
    let idCounterUlElement=1
    newCategoryElementsArray.forEach(categoryElement=>{
        const ul=document.createElement('ul')
        ul.setAttribute('id',idCounterUlElement)


        const created_atText = categoryElement.created_at.slice(0,10)
        const created_at=document.createElement('li')

        created_at.id='created'


        created_at.innerHTML=created_atText
        ul.appendChild(created_at)

        const elementWidthText = categoryElement.width
        const elementWidth=document.createElement('li')
        elementWidth.id='width'

        elementWidth.innerHTML=elementWidthText
        ul.appendChild(elementWidth)

        const elementHeightText= categoryElement.height
        const elementHeight=document.createElement('li')
        elementHeight.id='height'

        elementHeight.innerHTML=elementHeightText
        ul.appendChild(elementHeight)

        const elementLikesText= categoryElement.likes
        const elementLikes=document.createElement('li')
        elementLikes.id='likes'

        ul.setAttribute('likes',elementLikesText)
        elementLikes.innerHTML=elementLikesText
        ul.appendChild(elementLikes)

        const deleteElement=document.createElement('li')
        const deleteSymbol=document.createElement('div')
        deleteElement.id='delete'
        deleteSymbol.id='delete-element'

        deleteElement.appendChild(deleteSymbol)
        ul.appendChild(deleteElement)

        deleteSymbol.addEventListener('click',(event)=>{
            deleteCategoryElement(event,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)
        })


        const photoElement=document.createElement('li')
        photoElement.id='photo'
        photoElement.setAttribute('regularUrl',categoryElement.urls.regular)

        const photoDiv=document.createElement('div')
        const photoImg=document.createElement('img')

        photoImg.addEventListener("touchstart",()=>{
            const src=event.target.src
            document.querySelector('.photo-slider').classList.add('opened-photo')
            const img=document.querySelector('.img-parent').children[0]
            img.src=`${src}`
            }
        )
        const closeIcon=document.querySelector('.close-slider')
        closeIcon.addEventListener('touchstart',()=>{
            document.querySelector('.photo-slider').classList.remove('opened-photo')
        })

        photoImg.src=`${categoryElement.urls.small}`
        photoDiv.appendChild(photoImg)
        photoElement.appendChild(photoDiv)

/*
        photoDiv.style.backgroundImage=`url('${categoryElement.urls.small}')`
*/

        ul.appendChild(photoElement)

        categoryContainer.appendChild(ul)

        idCounterUlElement++
    })
    return categoryContainer

}

export default createPhotoDetailsList

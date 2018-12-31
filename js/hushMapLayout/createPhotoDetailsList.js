import deleteCategoryElement from '../deleteFunction/deleteCategoryElement'

const createPhotoDetailsList = (categoryContainer,newCategoryElementsArray,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton,hushMapContainer) =>{
    // counter which set number to container element
    let idCounterUlElement=1
    console.log(newCategoryElementsArray,'new')
    //read info from object

    if(newCategoryElementsArray.length>0){
        newCategoryElementsArray.forEach(categoryElement=>{

            //create ul and set id as category name
            const ul=document.createElement('ul')
            ul.setAttribute('id',idCounterUlElement)

            //create "create_at" info and append to ul
            const created_atText = categoryElement.created_at.slice(0,10)
            const created_at=document.createElement('li')
            created_at.id='created'
            created_at.innerHTML=created_atText
            ul.appendChild(created_at)

            //create "width" info and append to ul
            const elementWidthText = categoryElement.width
            const elementWidth=document.createElement('li')
            elementWidth.id='width'
            elementWidth.innerHTML=elementWidthText
            ul.appendChild(elementWidth)

            //create "height" info and append to ul
            const elementHeightText= categoryElement.height
            const elementHeight=document.createElement('li')
            elementHeight.id='height'
            elementHeight.innerHTML=elementHeightText
            ul.appendChild(elementHeight)

            //create "likes" info and append to ul
            const elementLikesText= categoryElement.likes
            const elementLikes=document.createElement('li')
            elementLikes.id='likes'
            ul.setAttribute('likes',elementLikesText)
            elementLikes.innerHTML=elementLikesText
            ul.appendChild(elementLikes)

            //create element to delete category elements and append to ul
            const deleteElement=document.createElement('li')
            const deleteSymbol=document.createElement('div')
            deleteElement.id='delete'
            deleteSymbol.id='delete-element'
            deleteElement.appendChild(deleteSymbol)
            ul.appendChild(deleteElement)

            // add event on click
            deleteSymbol.addEventListener('click',(event)=>{
                deleteCategoryElement(event,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)
            })

            //create img element
            const photoElement=document.createElement('li')
            photoElement.id='photo'
            photoElement.setAttribute('regularUrl',categoryElement.urls.regular)
            const photoDiv=document.createElement('div')
            const photoImg=document.createElement('img')


            //add lisner to img element to show biggest photo
            photoImg.addEventListener("touchstart",()=>{
                    const src=event.target.src
                    document.querySelector('.photo-slider').classList.add('opened-photo')
                    const img=document.querySelector('.img-parent').children[0]
                    img.src=`${src}`
                }
            )

            // add event to close biggest photo
            const closeIcon=document.querySelector('.close-slider')
            closeIcon.addEventListener('touchstart',()=>{
                document.querySelector('.photo-slider').classList.remove('opened-photo')
            })

            photoImg.src=`${categoryElement.urls.small}`
            photoDiv.appendChild(photoImg)
            photoElement.appendChild(photoDiv)
            ul.appendChild(photoElement)


            //append ul to container
            categoryContainer.appendChild(ul)

            //increment counter
            idCounterUlElement++
        })
    }else{
        //create ul and set id as category name
        const ul=document.createElement('ul')

        //create "create_at" info and append to ul
        const emptyCategoryInfoText = "No photo for this category"
        const emptyCategoryInfo=document.createElement('li')
        emptyCategoryInfo.id='emptyCategory'
        emptyCategoryInfo.innerHTML=emptyCategoryInfoText
        ul.appendChild(emptyCategoryInfo)
        //append ul to container
        categoryContainer.appendChild(ul)
        categoryContainer.classList.add("empty")
    }
    return categoryContainer

}

export default createPhotoDetailsList

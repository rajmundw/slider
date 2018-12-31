const createListHeader = () =>{
    let ul=''
    if(document.querySelector('.table-head')){
        //copy table header
        ul=document.querySelector('.table-head')
        //delete table-header
        document.querySelector('.table-head').remove()

    }else{
        //create table header if does not exist
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

    //use in pagination
    return ul
}
export default createListHeader
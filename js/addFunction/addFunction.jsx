import Calendar from '../calendar/calendar.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import {categoryArray, categoryNodeList} from '../newCategory/createNewCategory'
import deleteCategoryElement from '../deleteFunction/deleteCategoryElement'
import sortFunction from '../sortFunction/sortFunction'
import numberOfPages from '../hushMapLayout/numberOfpages'

const addFunction=(event,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)=>{


    const categoryName=selectCategory.value
    const typeOfSotring=selectTypeOfSorting.value
    const openedMenuDiv=document.querySelector('.opened-menu')

    if(event.target.innerText!=="Submit") {
        event.target.innerText="Submit"

        // if add input does not exist
        if(!document.getElementById('containerAddInputs')) {

            const hushMapContainer = document.querySelector('#hush-map')

            let labelText=document.createTextNode('Created data')

            // create inputs and labels
            const dataLabel=document.createElement('label')
            dataLabel.appendChild(labelText)

            const calendarDiv=document.createElement('div')
            calendarDiv.setAttribute('id','calendar')

            const dataInput = document.createElement('input')
            dataInput.id = 'dataInput'

            // add  event on click
            dataInput.addEventListener('click',()=>{

                const dataInputLabel=document.querySelector('#dataInput').parentNode
                dataInputLabel.parentNode.insertBefore(calendarDiv, dataInputLabel.nextSibling)

                // if calendar element does not exist render it
                if(!document.getElementById('calendar1')){
                    ReactDOM.render(<Calendar/>, document.getElementById('calendar'));
                }

                dataInput.disabled="disabled"
                const openedMenuDiv=document.querySelector('.opened-menu')
                //hidden all menu ul elements
                openedMenuDiv.children[0].childNodes.forEach(element=>{
                    element.style.display='none'
                })


                const containerAddInput=document.getElementById('containerAddInputs')
                //make a visible
                containerAddInput.style.display="block"
                //hidden all containerAddInput elements
                containerAddInput.childNodes.forEach(element=>{
                    element.style.display="none"
                })
                //make visible
                document.getElementById('calendar').style.display="block"

            })



            dataLabel.appendChild(dataInput)

            const widthLabel=document.createElement('label')
            labelText=document.createTextNode('Element width')

            widthLabel.appendChild(labelText)

            const widthInput = document.createElement('input')
            widthInput.id = 'widthInput'
            widthLabel.appendChild(widthInput)



            const heightLabel=document.createElement('label')
            labelText=document.createTextNode('Element height')

            heightLabel.appendChild(labelText)

            const heightInput = document.createElement('input')
            heightInput.id = 'heightInput'

            heightLabel.appendChild(heightInput)



            const likesLabel=document.createElement('label')
            labelText=document.createTextNode('Likes')

            likesLabel.appendChild(labelText)

            const likesInput = document.createElement('input')

            likesInput.id = 'likesInput'
            likesLabel.appendChild(likesInput)



            const containerAddInputs = document.createElement('div')

            containerAddInputs.id = 'containerAddInputs'

            containerAddInputs.appendChild(dataLabel)
            containerAddInputs.appendChild(widthLabel)
            containerAddInputs.appendChild(heightLabel)
            containerAddInputs.appendChild(likesLabel)

            const addButton=document.querySelector('.add-category')
            addButton.parentNode.insertBefore(containerAddInputs, addButton.nextSibling)
        }

        openedMenuDiv.childNodes[1].childNodes.forEach(element=>{
            if(element.nodeName==="LI"){
                element.style.display='none'
            }
        })
        document.getElementById('containerAddInputs').style.display='block'
        document.getElementById('containerAddInputs').nextSibling.style.display='block'

    }else{

        const likesValue=document.getElementById('likesInput').value
        const widthValue=document.getElementById('widthInput').value
        const heightValue=document.getElementById('heightInput').value
        const dataValue=document.getElementById('dataInput').value

        console.log(likesValue,widthValue,heightValue,dataValue)

        document.getElementById('likesInput').value=''
        document.getElementById('widthInput').value=''
        document.getElementById('heightInput').value=''
        document.getElementById('dataInput').value=''


        //list with elements id
        let idArray=[]
        categoryNodeList.forEach(category=>{
            if(category.id===categoryName){
                idArray=[...category.childNodes].map(ul=>{
                    return ul.id
                })
            }
        })
        //sort
        idArray.sort((a,b)=>{
            return a-b
        })

        //create new id it is equal to last id number +1
        const idCounterUlElement=Number(idArray[idArray.length-1])+1


        //create new element
        const ul=document.createElement('ul')
        ul.setAttribute('id',idCounterUlElement)

        const created_at=document.createElement('li')
        created_at.id='created'
        created_at.innerHTML=dataValue
        ul.appendChild(created_at)

        const elementWidth=document.createElement('li')
        elementWidth.id='width'

        elementWidth.innerHTML=widthValue
        ul.appendChild(elementWidth)

        const elementHeight=document.createElement('li')
        elementHeight.id='height'
        elementHeight.innerHTML=heightValue
        ul.appendChild(elementHeight)

        const elementLikes=document.createElement('li')
        elementLikes.id='likes'
        elementLikes.innerHTML=likesValue
        ul.appendChild(elementLikes)

        const deleteElement=document.createElement('li')
        const deleteSymbol=document.createElement('div')
        deleteElement.id='delete'
        deleteSymbol.id='delete-element'

        //add event to delete symbol
        deleteSymbol.addEventListener('click',(event)=>{
            deleteCategoryElement(event,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)
        })

        deleteElement.appendChild(deleteSymbol)
        ul.appendChild(deleteElement)

        // add element to cateogryNodeList
        categoryNodeList.forEach(category=>{
            if(category.id===categoryName){

                if(category.classList.contains('empty')){
                    category.classList.remove('empty')
                    document.querySelector('#emptyCategory').parentElement.remove()
                }
                category.appendChild(ul)
                numberOfPages(category,event,'addNewElement')
            }
        })
        // set inner text for button
        event.target.innerText="Add new Element"
        document.getElementById('containerAddInputs').style.display="none"

        // make ul elements visivle
        openedMenuDiv.childNodes[1].childNodes.forEach(element=>{
            element.style.display='none'
            if(element.nodeName==="LI"){
                element.style.display='block'
            }
        })

    }

    //run sort function to have proper element list on current typeo of sorting
    sortFunction(event,selectCategory,typeOfSotring)

}
export default addFunction
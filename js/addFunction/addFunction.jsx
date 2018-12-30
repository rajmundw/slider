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
        if(!document.getElementById('containerAddInputs')) {
            const hushMapContainer = document.querySelector('#hush-map')

            let labelText=document.createTextNode('Created data')

            const dataLabel=document.createElement('label')
            dataLabel.appendChild(labelText)

            const calendarDiv=document.createElement('div')
            calendarDiv.setAttribute('id','calendar')

            const dataInput = document.createElement('input')
            dataInput.id = 'dataInput'
            dataInput.addEventListener('click',()=>{
                const dataInputLabel=document.querySelector('#dataInput').parentNode

                dataInputLabel.parentNode.insertBefore(calendarDiv, dataInputLabel.nextSibling)

                if(!document.getElementById('calendar1')){
                    ReactDOM.render(<Calendar/>, document.getElementById('calendar'));
                }
                dataInput.disabled="disabled"
                const openedMenuDiv=document.querySelector('.opened-menu')
                openedMenuDiv.children[0].childNodes.forEach(element=>{
                    element.style.display='none'
                })


                const containerAddInput=document.getElementById('containerAddInputs')
                containerAddInput.style.display="block"
                containerAddInput.childNodes.forEach(element=>{
                    element.style.display="none"
                })
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

        let idArray=[]
        categoryNodeList.forEach(category=>{
            if(category.id===categoryName){
                idArray=[...category.childNodes].map(ul=>{
                    return ul.id
                })
            }
        })

        idArray.sort((a,b)=>{
            return a-b
        })
        console.log(idArray)

        const idCounterUlElement=Number(idArray[idArray.length-1])+1

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


        deleteSymbol.addEventListener('click',(event)=>{
            deleteCategoryElement(event,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)
        })

        deleteElement.appendChild(deleteSymbol)
        ul.appendChild(deleteElement)

        categoryNodeList.forEach(category=>{
            if(category.id===categoryName){
                category.appendChild(ul)
                numberOfPages(category,event,'addNewElement')
            }
        })
        event.target.innerText="Add new Element"
        document.getElementById('containerAddInputs').style.display="none"

        openedMenuDiv.childNodes[1].childNodes.forEach(element=>{

            element.style.display='none'
            if(element.nodeName==="LI"){
                element.style.display='block'
            }
        })

    }

    sortFunction(event,selectCategory,typeOfSotring)

}
export default addFunction
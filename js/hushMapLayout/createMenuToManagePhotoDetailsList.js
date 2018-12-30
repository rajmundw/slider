import deleteCategoryElement from '../deleteFunction/deleteCategoryElement'
import deleteAllCategory from '../deleteFunction/deleteAllCategory'
import sortFunction from '../sortFunction/sortFunction'
import addFunction from '../addFunction/addFunction.jsx'
import {initialInputsContainer} from '../newCategory/createNewCategory'
import updateHushMapLayout from './updateHushMapLayout'

const createMenuToManagePhotoDetailsList = (selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton,newCategory) =>{
    let arrayToReturn=[]

    selectCategory=document.createElement('select')
    selectTypeOfSorting=document.createElement('select')
    deleteCategoryButton=document.createElement('button')
    addNewElementToCategoryButton=document.createElement('button')

    selectCategory.classList.add('category-select')
    selectTypeOfSorting.classList.add('sorting-select')
    deleteCategoryButton.classList.add('delete-category')
    addNewElementToCategoryButton.classList.add('add-category')

    selectCategory.addEventListener('change',(event)=>{
        updateHushMapLayout(event,selectTypeOfSorting)
    })

    selectTypeOfSorting.addEventListener('change',(event)=>{
        sortFunction(event,selectCategory)
    })

    deleteCategoryButton.addEventListener('click',(event)=>{
        deleteAllCategory(event,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)
    })

    addNewElementToCategoryButton.addEventListener('click',(event)=>{
        addFunction(event,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)

    })

    const innerButtonToDeleteText=document.createTextNode('Delete category')

    deleteCategoryButton.appendChild(innerButtonToDeleteText)

    const innerButtonToAddText=document.createTextNode('Add new element')

    addNewElementToCategoryButton.appendChild(innerButtonToAddText)

    const randomSortOption = document.createElement('option')

    const optionTypeOfSortLikes = document.createElement('option')

    const optionTypeOfSortCreated = document.createElement('option')

    const optionTypeOfSortSize = document.createElement('option')

    // add inner text (category name) to option
    let optionSortingText=document.createTextNode('')
    randomSortOption.appendChild(optionSortingText)

    optionSortingText=document.createTextNode('likes')
    optionTypeOfSortLikes.appendChild(optionSortingText)

    optionSortingText=document.createTextNode('created')
    optionTypeOfSortCreated.appendChild(optionSortingText)

    optionSortingText=document.createTextNode('size')
    optionTypeOfSortSize.appendChild(optionSortingText)


    // create new option
    const optionCategory = document.createElement('option')

    // add inner text (category name) to option
    const optionCategoryText=document.createTextNode(`${newCategory}`)

    // append text to option
    optionCategory.appendChild(optionCategoryText)

    //append opotion to select
    selectCategory.appendChild(optionCategory)


    //append opotion to select
    selectTypeOfSorting.appendChild(randomSortOption)
    selectTypeOfSorting.appendChild(optionTypeOfSortLikes)
    selectTypeOfSorting.appendChild(optionTypeOfSortCreated)
    selectTypeOfSorting.appendChild(optionTypeOfSortSize)


    const backToMenuElement=document.createElement('div')
    backToMenuElement.innerText='back'
    backToMenuElement.style.display='none'
    backToMenuElement.classList.add('back-to-menu-from-add-category')

    const backToMenuElement2=document.createElement('div')
    backToMenuElement2.innerText='back'
    backToMenuElement2.style.display='none'
    backToMenuElement2.classList.add('back-to-menu-from-add-element')


    backToMenuElement.addEventListener('touchstart',()=>{
        const openedMenuDiv=document.querySelector('.opened-menu')
        openedMenuDiv.children[0].childNodes.forEach(element=>{
            element.style.display='none'
            if(element.nodeName==="LI"){
                element.style.display="block"
            }
        })
    })


    backToMenuElement2.addEventListener('touchstart',()=>{
        const openedMenuDiv=document.querySelector('.opened-menu')
        openedMenuDiv.children[0].childNodes.forEach(element=>{
            element.style.display='none'
            if(element.nodeName==="LI"){
                element.style.display="block"
            }
        })
        document.querySelector('.add-category').innerText="Add new Element"
    })

    initialInputsContainer[0].style.display='none'
    const addCategoryOpenedMenu=document.querySelector("#menu-list-new-category")
    addCategoryOpenedMenu.parentNode.insertBefore(backToMenuElement, addCategoryOpenedMenu.nextSibling)
    addCategoryOpenedMenu.parentNode.insertBefore(initialInputsContainer[0], addCategoryOpenedMenu.nextSibling)

    selectCategory.style.display='none'
    const categoryListOpenedMenu=document.querySelector("#menu-list-categories")
    categoryListOpenedMenu.parentNode.insertBefore(selectCategory, categoryListOpenedMenu.nextSibling)

    selectTypeOfSorting.style.display='none'
    const sortOpenedMenu=document.querySelector("#menu-list-sort")
    sortOpenedMenu.parentNode.insertBefore(selectTypeOfSorting, sortOpenedMenu.nextSibling)

    addNewElementToCategoryButton.style.display='none'
    const addOpenedMenu=document.querySelector("#menu-list-add")
    addOpenedMenu.parentNode.insertBefore(backToMenuElement2, addOpenedMenu.nextSibling)
    addOpenedMenu.parentNode.insertBefore(addNewElementToCategoryButton, addOpenedMenu.nextSibling)

    deleteCategoryButton.style.display='none'
    const deleteOpenedMenu=document.querySelector("#menu-list-delete")
    deleteOpenedMenu.parentNode.insertBefore(deleteCategoryButton, deleteOpenedMenu.nextSibling)


    arrayToReturn.push(selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)

    return arrayToReturn
}

export default createMenuToManagePhotoDetailsList
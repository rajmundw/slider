import {newCategory} from '../newCategory/createNewCategory'

// function takes text from input and call function create new category
const getFunction =()=>{

    // search button
    const serchButton=document.querySelector('.search-button')

    // event on click on seatch button
    serchButton.addEventListener('click',()=>{
        // inner text from catagory input
        let inputCategory=document.querySelector('.input-category-name')
        let inputCategoryValue=inputCategory.value
        // inner text from number of elements input
        let inputNumberOfElements=document.querySelector('.input-number-of-elements')
        let numberOfElements=inputNumberOfElements.value

        // call function and get two parameters from input
        newCategory(inputCategoryValue,numberOfElements)
        inputCategory.value=''
        inputNumberOfElements.value=''

    })
}

export default getFunction
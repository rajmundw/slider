import createPhotoDetailsList from './createPhotoDetailsList'
import createMenuToManagePhotoDetailsList from './createMenuToManagePhotoDetailsList'
import numberOfPages from './numberOfpages'
import numberOfElementOnPage from '../pagination/numberOfElementOnPage'
const createHushMapLayout=(newCategory,categoryArray,categoryNodeList,initialInputsContainer)=>{

    console.log(categoryArray)
    const hushMapContainer=document.querySelector('#hush-map')

    const pageContainer=document.querySelector('.page-container')

    //category container which exist to replace by new category container
    let containerToReplace=''

    //select dom element with all categories
    let selectCategory=''

    // select dom element with type of sorting
    let selectTypeOfSorting=''

    // button to delete current category
    let deleteCategoryButton=''

    // button add new element to current category
    let addNewElementToCategoryButton=''

    //buttons and input to handler categories and elements in category
    let buttonsAndInputsToHandlerCateoriesAndElements=[]

    //inputs to add new category
    let initialInputs=''


    //create first hush map layout
    if(hushMapContainer.classList.contains('initial')){
        //remove initial inputs
        initialInputs=document.querySelector('.initial-inputs-container')
        document.querySelector('.initial-inputs-container').remove()
        document.querySelector('.intrance-info').remove()


        //create opened menu and set value of inputsAndButtonsArray on returned element from function
        //they are inputs and button to handler categories sort and delte elements
        const inputsAndButtonsArray=createMenuToManagePhotoDetailsList(selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton,newCategory)

        selectCategory=inputsAndButtonsArray[0]
        selectTypeOfSorting=inputsAndButtonsArray[1]
        deleteCategoryButton=inputsAndButtonsArray[2]
        addNewElementToCategoryButton=inputsAndButtonsArray[3]
    }else{

        // create new option
        const optionCategory = document.createElement('option')

        // add inner text (category name) to option
        const optionCategoryText=document.createTextNode(`${newCategory}`)

        // append text to option
        optionCategory.appendChild(optionCategoryText)

        selectCategory=document.querySelector('.category-select')

        //append opotion to select
        selectCategory.appendChild(optionCategory)

        selectTypeOfSorting=document.querySelector('.sorting-select')

        // choose new option in select
        selectCategory.selectedIndex=`${categoryArray.length-1}`

        //resert sorting value in new category
        selectTypeOfSorting.value=''
    }


    //new category object import from createNewCategory
    const newCategoryElementsArray=categoryArray[categoryArray.length-1].elements

    //cteate category container
    let categoryContainer=document.createElement('div')

    // category container to append return from function
    categoryContainer=createPhotoDetailsList(categoryContainer,newCategoryElementsArray,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)

    // set attritube on value as category id
    categoryContainer.setAttribute('id',categoryArray[categoryArray.length-1].name)

    categoryContainer.classList.add('category-container')

    if(!categoryContainer.classList.contains('empty')){
        // run function to create number of pages
        numberOfPages(categoryContainer,event)
    }else{
        if(document.querySelector('.slide-container')){
            document.querySelector('.left-slide-bar').style.display="none"
            document.querySelector('.right-slide-bar').style.display="none"
        }
        if(document.querySelector('.parent-page-numbers-parent')){
            document.querySelector('.parent-page-numbers-parent').remove()
        }
        document.querySelector('.hush-map-header').innerText=categoryContainer.id
        hushMapContainer.appendChild(categoryContainer)
    }

    //not initial layout
    if(document.querySelector('.category-container') && !hushMapContainer.classList.contains('initial')) {
        //previous category container to replace
        containerToReplace = document.querySelector('.category-container')
        // replace category container to new category
        hushMapContainer.replaceChild(categoryContainer, containerToReplace)
        //push previous category to have it in memory
        categoryNodeList.push(categoryContainer)
    }

    //initial layout
    if(hushMapContainer.classList.contains('initial')) {
        //remove animation from inputs to add new category
        document.querySelector('.initial-inputs-container').classList.remove('initial-inputs-animation')
        //remove initial offset
        document.querySelector('.initial-inputs-container').style.transform="translateY(0)"
        // remove initial class
        hushMapContainer.classList.remove('initial')
        //push previous category to have it in memory
        categoryNodeList.push(categoryContainer)

        //set min height for page container because is biggest then height in initial layout
        if(window.innerWidth<=300){
            document.querySelector('.page-container').style.minHeight="901px"
        }else if(window.innerWidth>300 && window.innerWidth<=570){
            if(window.innerHeight>706){
                document.querySelector('.page-container').style.height=`${window.innerHeight}px`
            }
        }
    }


    buttonsAndInputsToHandlerCateoriesAndElements.push(selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)
    // it is use in createNewCategory
    return  buttonsAndInputsToHandlerCateoriesAndElements
}
export default createHushMapLayout


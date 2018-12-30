import updateHushMapLayout from './updateHushMapLayout'
import deleteCategoryElement from '../deleteFunction/deleteCategoryElement'
import deleteAllCategory from '../deleteFunction/deleteAllCategory'
import sortFunction from '../sortFunction/sortFunction'
import addFunction from '../addFunction/addFunction.jsx'
import createPhotoDetailsList from './createPhotoDetailsList'
import createMenuToManagePhotoDetailsList from './createMenuToManagePhotoDetailsList'
import pagination from '../pagination/pagination'
import numberOfPages from './numberOfpages'
import menuHandler from './menu'

const createHushMapLayout=(newCategory,categoryArray,categoryNodeList,initialInputsContainer)=>{


    const hushMapContainer=document.querySelector('#hush-map')

    const pageContainer=document.querySelector('.page-container')

    let listToReplace=''

    let selectCategory=''

    let selectTypeOfSorting=''

    let deleteCategoryButton=''

    let addNewElementToCategoryButton=''

    let arrayToRetrun=[]

    let initialInputs=''


    if(hushMapContainer.classList.contains('initial')){
        initialInputs=document.querySelector('.initial-inputs-container')
        document.querySelector('.initial-inputs-container').remove()
        document.querySelector('.intrance-info').remove()

        const returnedArray=createMenuToManagePhotoDetailsList(selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton,newCategory)
        selectCategory=returnedArray[0]
        selectTypeOfSorting=returnedArray[1]
        deleteCategoryButton=returnedArray[2]
        addNewElementToCategoryButton=returnedArray[3]
    }else{

        // create new option
        const optionCategory = document.createElement('option')

        // add inner text (category name) to option
        const optionCategoryText=document.createTextNode(`${newCategory}`)

        // append text to option
        optionCategory.appendChild(optionCategoryText)

        selectCategory=document.querySelector('.category-select')
        console.log(selectCategory,'select category')

        //append opotion to select
        selectCategory.appendChild(optionCategory)

        selectTypeOfSorting=document.querySelector('.sorting-select')

        // choose new option in select
        selectCategory.selectedIndex=`${categoryArray.length-1}`

        selectTypeOfSorting.value=''
    }



    let categoryContainer=document.createElement('div')
    categoryContainer.setAttribute('id',categoryArray[categoryArray.length-1].name)
    categoryContainer.classList.add('category-container')
    const newCategoryElementsArray=categoryArray[categoryArray.length-1].elements
    categoryContainer=createPhotoDetailsList(categoryContainer,newCategoryElementsArray,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)


    numberOfPages(categoryContainer,event)

    if(document.querySelector('.category-container')) {
        listToReplace = document.querySelector('.category-container')
        hushMapContainer.replaceChild(categoryContainer, listToReplace)
        categoryNodeList.push(categoryContainer)
    }

    if(hushMapContainer.classList.contains('initial')) {
        document.querySelector('.initial-inputs-container').classList.remove('initial-inputs-animation')
        document.querySelector('.initial-inputs-container').style.transform="translateY(0)"
        hushMapContainer.classList.remove('initial')
        if(window.innerWidth<=300){
            document.querySelector('.page-container').style.minHeight="901px"
        }
      /*  const hushMapHeight = hushMapContainer.clientHeight
        document.querySelector('#hush-map').style.minHeight = `${hushMapHeight}px`
        const categoryContainer=document.querySelector('.category-container')
        const categoryConatainerHeight=categoryContainer.clientHeight
        categoryContainer.style.minHeight=`${categoryConatainerHeight}px`*/
    }

   /* const slideContainer = document.createElement('div')
    slideContainer.classList.add('container')
    slideContainer.classList.add('slide-container')

    const slideRow = document.createElement('div')
    slideRow.classList.add('row')
    slideRow.classList.add('slide')
    slideRow.classList.add('initial')

    const leftBar = document.createElement('div')
    leftBar.classList.add("col-mobile-3")
    const spanLeftBar=document.createElement('span')
    spanLeftBar.classList.add('left-slide-bar')
    spanLeftBar.innerText="<"
    leftBar.appendChild(spanLeftBar)

    slideRow.appendChild(leftBar)


    const rightBar = document.createElement('div')
    rightBar.classList.add("col-mobile-3")
    rightBar.classList.add("offset-col-mobile-6")
    const spanRightBar=document.createElement('span')
    spanRightBar.classList.add('left-slide-bar')
    spanRightBar.innerText=">"

    rightBar.appendChild(spanRightBar)
    slideRow.appendChild(rightBar)
    slideContainer.appendChild(slideRow)
    categoryContainer.appendChild(slideContainer)
*/


    arrayToRetrun.push(selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)
     return  arrayToRetrun
}
export default createHushMapLayout


import updateHushMapLayout from '../hushMapLayout/updateHushMapLayout'
import {categoriesArray, categoryNodeList} from '../newCategory/createNewCategory'
import numberOfPages from '../hushMapLayout/numberOfpages'

const deleteAllCategory=(event,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)=>{

    const categoryName=document.querySelector('.category-container').id

    // set cateories on first category
    selectCategory.selectedIndex=0

    if(categoryNodeList.length===1){
        //remove category
        categoryNodeList[0].remove()
    }

    //find index to delete category
    const categoryToDeleteIndex=categoryNodeList.findIndex(category=> {

        return category.id===categoryName
    })

    categoryNodeList.splice(categoryToDeleteIndex,1)

    categoriesArray.splice(categoryToDeleteIndex,1)

    //remove category from category select dom element
    selectCategory.childNodes.forEach(option=> {

        if (option.text == categoryName) {

            option.remove()
        }
    })

    //if categoryNode list containes elements update hush map layout
    if(categoryNodeList.length>0){
        updateHushMapLayout(event)
    }else{
        //remove pages numbers
        document.querySelector('.parent-page-numbers-parent').remove()

    }
}

export default deleteAllCategory
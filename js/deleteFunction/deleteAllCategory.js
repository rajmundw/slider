import updateHushMapLayout from '../hushMapLayout/updateHushMapLayout'
import {categoryArray, categoryNodeList} from '../newCategory/createNewCategory'
import numberOfPages from '../hushMapLayout/numberOfpages'

const deleteAllCategory=(event,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)=>{

    const categoryName=document.querySelector('.category-container').id

    selectCategory.selectedIndex=0

    if(categoryNodeList.length===1){

        categoryNodeList[0].remove()
    }


    const categoryToDeleteIndex=categoryNodeList.findIndex(category=> {

        return category.id===categoryName
    })

    categoryNodeList.splice(categoryToDeleteIndex,1)

    categoryArray.splice(categoryToDeleteIndex,1)

    console.log(categoryNodeList)

    selectCategory.childNodes.forEach(option=> {

        if (option.text == categoryName) {

            option.remove()
        }
    })

    if(categoryNodeList.length>0){
        updateHushMapLayout(event)
    }else{
        document.querySelector('.parent-page-numbers-parent').remove()
    }
}

export default deleteAllCategory
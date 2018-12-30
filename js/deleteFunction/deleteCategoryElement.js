import updateHushMapLayout from '../hushMapLayout/updateHushMapLayout'
import {categoryArray, categoryNodeList} from '../newCategory/createNewCategory'
import numberOfPages from '../hushMapLayout/numberOfpages'


const deleteCategoryElement=(event,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)=>{

    console.log('deleteElement')
    const categoryUlIdToDelete = event.target.parentElement.parentElement.id
    const categoryName=event.target.parentElement.parentElement.parentElement.id

    categoryNodeList.forEach(category=>{

        if(category.id===categoryName){

            category.childNodes.forEach(ul=>{


                if(ul.id===categoryUlIdToDelete){
                    console.log(category.childNodes)

                    if(category.childNodes.length===2){
                        selectCategory.selectedIndex=0

                        if(categoryNodeList.length===1){
                            categoryNodeList[0].remove()
                            document.querySelector('.parent-page-numbers-parent').remove()
                        }

                        const categoryToDeleteIndex=categoryNodeList.findIndex(category=> {
                            return category.id===categoryName
                        })

                        categoryNodeList.splice(categoryToDeleteIndex,1)

                        categoryArray.splice(categoryToDeleteIndex,1)

                        selectCategory.childNodes.forEach(option=>{
                            if(option.text==categoryName){
                                option.remove()
                            }
                        })

                        selectTypeOfSorting.value=''

                        if(categoryNodeList.length>0){
                            updateHushMapLayout(event)
                        }

                        ul.remove()

                    }else{
                        console.log('other')
                        ul.remove()
                    }

                }
            })
            if(categoryNodeList.length){
                numberOfPages(category,event,'deleteCategoryElement')
            }


        }
    })

}

export default deleteCategoryElement
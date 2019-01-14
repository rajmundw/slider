import updateHushMapLayout from '../hushMapLayout/updateHushMapLayout'
import {categoriesArray, categoryNodeList} from '../newCategory/createNewCategory'
import numberOfPages from '../hushMapLayout/numberOfpages'


const deleteCategoryElement=(event,selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton)=>{

    //clicked element id
    const categoryUlIdToDelete = event.target.parentElement.parentElement.id
    // category name
    const categoryName=event.target.parentElement.parentElement.parentElement.id

    //delete element from nodeList
    categoryNodeList.forEach(category=>{

        // find category by id
        if(category.id===categoryName){

            category.childNodes.forEach(ul=>{
                //find element by id
                if(ul.id===categoryUlIdToDelete){
                    //if category array has last element before remove it (equal 2 because first element is header)
                    if(category.childNodes.length===2){
                        //set select category on empty value
                        selectCategory.selectedIndex=0


                        //find index category from categorNodeList
                        const categoryToDeleteIndex=categoryNodeList.findIndex(category=> {
                            return category.id===categoryName
                        })

                        //delete this element
                        categoryNodeList.splice(categoryToDeleteIndex,1)

                        //delete category from categoryArray
                        categoriesArray.splice(categoryToDeleteIndex,1)

                        //remove category option from select category element
                        selectCategory.childNodes.forEach(option=>{
                            if(option.text==categoryName){
                                option.remove()
                            }
                        })

                        //resert type of sorting value
                        selectTypeOfSorting.value=''

                        //remove element
                        ul.remove()
                        document.querySelector('.table-head').remove()
                        // if categoryNodeList containes element update hush map
                        if(categoryNodeList.length>0){
                            console.log('1 this')
                            updateHushMapLayout(event)
                        }else{
                            //remove pages numbers
                            document.querySelector('.parent-page-numbers-parent').remove()
                            document.querySelector(".hush-map-header").innerHTML="No categories"

                            if(document.querySelector('.slide-container')){
                                document.querySelector('.left-slide-bar').style.display="none"
                                document.querySelector('.right-slide-bar').style.display="none"
                            }
                        }


                    }else{
                        //remove element
                        ul.remove()
                        numberOfPages(category,event,'deleteCategoryElement')
                    }

                }
            })
            //if category node list containes elements run function
        }
    })

}

export default deleteCategoryElement
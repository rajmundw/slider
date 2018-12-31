import {categoryArray, categoryNodeList} from '../newCategory/createNewCategory'
import numberOfpages from './numberOfpages'

const updateHushMapLayout=(event,selectTypeOfSorting)=>{

    const hushMapContainer=document.querySelector('#hush-map')
    let categoryName=''


    //run function because category wos deleted
    if(event.toString()==='[object MouseEvent]'){

        categoryName=categoryNodeList[0].id
    }
    //run function becuse someone changed cateogry
    else{
       categoryName=event.target.value
    }

    categoryNodeList.forEach(category=>{
        //find proper elementy by id
        if(category.id===categoryName){
            if(selectTypeOfSorting){
                //reset typ of sorting value
                selectTypeOfSorting.value=''
            }
            //catch current category
            const listToReplace=document.querySelector('.category-container')
            //update by replace
            console.log(category,listToReplace)
            hushMapContainer.replaceChild(category,listToReplace)


            //run number of pages
            numberOfpages(category)
        }
    })
}

export default updateHushMapLayout


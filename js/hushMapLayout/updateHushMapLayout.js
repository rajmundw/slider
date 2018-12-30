import {categoryArray, categoryNodeList} from '../newCategory/createNewCategory'
import numberOfpages from './numberOfpages'

const updateHushMapLayout=(event,selectTypeOfSorting)=>{

    const hushMapContainer=document.querySelector('#hush-map')
    let categoryName=''

    if(event.toString()==='[object MouseEvent]'){

        categoryName=categoryNodeList[0].id
    }else{
       categoryName=event.target.value
    }
    categoryNodeList.forEach(category=>{
        if(category.id===categoryName){
            if(selectTypeOfSorting){
                selectTypeOfSorting.value=''
            }
            const listToReplace=document.querySelector('.category-container')
            console.log(listToReplace,'update')
            hushMapContainer.replaceChild(category,listToReplace)
            numberOfpages(category)
        }
    })
}

export default updateHushMapLayout


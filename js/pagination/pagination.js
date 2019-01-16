import slideHandler from '../slideHandler/slideHandler'
import createListHeader from "../createListHeader/createListHeader"
import numberOfElemetnsOnPage from './numberOfElementOnPage'

const pagination = (categoryContainer,hushMapContainer,activePage) =>{
    let tableHead=''
    let ul=createListHeader()
    const numberOfElementsAndMargintTop = numberOfElemetnsOnPage()
    const numberOfElementsOnPage=numberOfElementsAndMargintTop[0]
    const numberOfElement=categoryContainer.childNodes.length

    console.log(categoryContainer.childNodes)
    console.log(numberOfElement,numberOfElementsOnPage)
    // checking case when was changed page size and on current active slider page is not any elemnt
    if(activePage*numberOfElementsOnPage>numberOfElement){
        activePage=Math.ceil(numberOfElement/numberOfElementsOnPage)
        document.querySelector(".active-page").innerHTML=activePage
    }


    // set everyone category container ul as flex
    categoryContainer.childNodes.forEach((ul)=>{
        if(ul.style.display==='none'){
            ul.style.display='flex'
        }
    })


    //display none element which should be show by pagination
    categoryContainer.childNodes.forEach((ul,index)=>{
        if(index>=activePage*numberOfElementsOnPage-numberOfElementsOnPage && index<activePage*numberOfElementsOnPage){

        }else{
            ul.style.display='none'
        }
    })

    //if any cateogry exists
    if(categoryContainer.childNodes.length>0){
        if(document.querySelector('.parent-page-numbers-parent')){
        //if page number exist push category container before number div
            const pageNumbers=document.querySelector('.parent-page-numbers-parent')
            pageNumbers.parentNode.insertBefore(categoryContainer, pageNumbers)

        }else{
            //else push as last child
            hushMapContainer.appendChild(categoryContainer)
        }
    }
    if(document.querySelector('.category-container')){
        // push as first child category header
        categoryContainer.insertBefore(ul, categoryContainer.childNodes[0])
    }

    // function for small layout to changing slider element details
    slideHandler(categoryContainer)

    setTimeout(()=>{
        //set head name to current category id
        const category=document.querySelector('.category-container').id.toUpperCase()
        document.querySelector('.hush-map-header').innerText=category
    },50)

}
export default pagination
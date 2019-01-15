import slideHandler from '../slideHandler/slideHandler'
import createListHeader from "../createListHeader/createListHeader"
import numberOfElemetnsOnPage from './numberOfElementOnPage'

const pagination = (categoryContainer,hushMapContainer,activePage) =>{
    let tableHead=''
    let ul=''
    const numberOfElementsAndMargintTop = numberOfElemetnsOnPage()
    const numberOfElementsOnPage=numberOfElementsAndMargintTop[0]
    const numberOfElement=categoryContainer.childNodes.length-1
    ul=createListHeader()

    console.log(activePage,numberOfElement,numberOfElementsOnPage)
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
        if(window.innerWidth<=300){
            document.querySelector('.category-container').style.height=`${470+(numberOfElementsOnPage-5)*90}px`
        }else if(window.innerWidth>300 && window.innerWidth<=570){
            document.querySelector('.category-container').style.height=`${310+(numberOfElementsOnPage-5)*55}px`
        }else if(window.innerWidth>570 && window.innerWidth<=1020){
            document.querySelector('.category-container').style.height=`${700+(numberOfElementsOnPage-4)*155}px`
        }else if(window.innerWidth>1020 && window.innerWidth<=1800){
            document.querySelector('.category-container').style.height=`${600+(numberOfElementsOnPage-4)*150}px`
        }
    }

    slideHandler(categoryContainer)

    setTimeout(()=>{
        //set head name to current category id
        const category=document.querySelector('.category-container').id.toUpperCase()
        document.querySelector('.hush-map-header').innerText=category
    },50)

}
export default pagination
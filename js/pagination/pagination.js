import slideHandler from '../slideHandler/slideHandler'
import createListHeader from "../createListHeader/createListHeader"
import numberOfElemetnsOnPage from './numberOfElementOnPage'

const pagination = (categoryContainer,hushMapContainer,activePage) =>{
    let tableHead=''
    let ul=''
    const numberOfElementsAndMargintTop = numberOfElemetnsOnPage()
    const numberOfElementsOnPage=numberOfElementsAndMargintTop[0]
    const marginTop=numberOfElementsAndMargintTop[1]

    ul=createListHeader()

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

        document.querySelector('.category-container').style.height=`${310+(numberOfElementsOnPage-5)*55}px`
        document.querySelector('.parent-page-numbers-parent').style.marginTop=`${90+marginTop}px`
    }

    slideHandler(categoryContainer)

    setTimeout(()=>{
        //set head name to current category id
        const category=document.querySelector('.category-container').id.toUpperCase()
        document.querySelector('.hush-map-header').innerText=category
    },50)

}
export default pagination
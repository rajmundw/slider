import {selectCategory,selectTypeOfSorting,deleteCategoryButton,addNewElementToCategoryButton} from './createHushMapLayout'
import {categoriesArray,arrayFromCreateHushMapLayout,initialInputsContainer} from '../newCategory/createNewCategory'
import hideMenuOptions from '../hideMenuOptions/hideMenuOptions'
import menuEvent from './menuEvent'

const menuHandler = () =>{

    const openedMenuDiv=document.querySelector('.opened-menu')
    const menu=document.querySelector('.menu')
    console.log(menu.childNodes)
    openedMenuDiv.classList.add('opening-menu')
    menu.childNodes[1].classList.add('opening-menu')
    menu.childNodes[3].classList.add('opening-menu')
    menu.childNodes[5].classList.add('opening-menu')


    menu.addEventListener('touchstart',menuEvent)


    //remove other element than li dom element
    openedMenuDiv.childNodes[1].childNodes.forEach(element=>{
        if(element.nodeName!=="LI"){
            element.remove()
        }
    })


    openedMenuDiv.childNodes[1].childNodes.forEach(li=>{
        switch (li.id){
            case "menu-list-new-category":{
                li.addEventListener('click',()=>{
                    // it work if layout is not initial
                   if(!document.querySelector('#hush-map').classList.contains('initial')) {
                       //if this element visible, to hide
                       if (document.querySelector('.initial-inputs-container').style.display==='block') {
                           document.querySelector('.initial-inputs-container').style.display='none'
                       } else {
                           //hide other elements
                           hideMenuOptions(openedMenuDiv)
                           openedMenuDiv.children[0].childNodes.forEach(element=>{
                               element.style.display='none'
                           })

                           //make next siblings visible
                           //this element visible
                           const inputsContainer=li.nextSibling
                           inputsContainer.style.display='block'
                           inputsContainer.nextSibling.style.display='block'
                       }
                   }
                })
                break;
            }
            case "menu-list-categories":{
                li.addEventListener('click',()=>{
                    console.log(li.nextSibling)

                    //it work if exists cateogries work like above
                    if(categoriesArray.length>0){
                        if(document.querySelector('.category-select').style.display==='block'){
                            document.querySelector('.category-select').style.display='none'
                        }else{
                            hideMenuOptions(openedMenuDiv)
                            li.nextSibling.style.display='block'

                        }
                     }
                 })
                break;
            }
            case "menu-list-sort":{
                li.addEventListener('click',()=>{
                    //it work if exists categories  work like first case
                    if(categoriesArray.length>0){
                        if(document.querySelector('.sorting-select').style.display==='block'){
                            document.querySelector('.sorting-select').style.display='none'
                        }else{
                            hideMenuOptions(openedMenuDiv)
                            li.nextSibling.style.display='block'

                        }
                    }
                })
                break;
            }
            case "menu-list-add":{
                li.addEventListener('click',()=>{
                    //it work if exists categories
                    if(categoriesArray.length>0){
                        if(document.querySelector('.add-category').style.display==='block'){
                            //hide everyone chlidren add-cotegory element and this element
                            if(document.querySelector('#containerAddInputs')){
                                document.querySelector('#containerAddInputs').style.display='none'
                            }
                            if(document.querySelector('.add-category').innerText==="Submit"){
                                    document.querySelector('.add-category').innerText="Add new element"
                            }
                            if(document.querySelector('#calendar')){
                                if(document.querySelector('#calendar').style.display==='block'){
                                    document.querySelector('#calendar').style.display='none'
                                }
                            }

                            document.querySelector('.add-category').style.display='none'
                        }else{
                            //hide other ul elements
                            openedMenuDiv.childNodes[1].childNodes.forEach(element=>{
                                if(element.nodeName!=="LI"){
                                    element.style.display='none'
                                }
                            })
                            //show this element and next sibling
                            const inputsContainer=li.nextSibling
                            inputsContainer.style.display='block'

                        }
                    }
                })
                break;
            }
            case "menu-list-delete":{
                //it work if exists categories  work like first case
                li.addEventListener('click',()=>{
                    if(categoriesArray.length>0){
                        if(document.querySelector('.delete-category').style.display==='block'){
                            document.querySelector('.delete-category').style.display='none'
                        }else{
                            hideMenuOptions(openedMenuDiv)
                            li.nextSibling.style.display='block'
                        }
                    }
                })
                break;
            }
        }
    })
}

export default menuHandler
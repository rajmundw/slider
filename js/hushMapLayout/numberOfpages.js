import pagination from '../pagination/pagination'
import menuEvent from '../hushMapLayout/menuEvent'
import numberOfElemetnsOnPage from '../pagination/numberOfElementOnPage'


const numberOfPages= (categoryContainer,event,type)=>{


    let activePages=''

    let activePagesValue=''

    let currentPage=''

    let currentRotation=''

    const numberOfElementsAndMargintBottom = numberOfElemetnsOnPage()
    const numberOfElementsOnPage=numberOfElementsAndMargintBottom[0]


    const hushMapContainer = document.querySelector('#hush-map')

    //container to rotate
    const pageContainer=document.querySelector('.page-container')

    //-1 because header
    const numberOfElements=categoryContainer.childNodes.length-1

    //number of pages div container
    const parentNumberOfPagesParentElement=document.createElement('div')

    parentNumberOfPagesParentElement.classList.add('parent-page-numbers-parent')

    //number of page value countainer
    const numberOfPagesParentElement=document.createElement('div')

    numberOfPagesParentElement.classList.add('page-numbers-parent')

    //set number od pages to render
    let numberOfPages=Math.ceil(numberOfElements/numberOfElementsOnPage)



    //DELETE ELEMENT ROTATION HANDLER

    // no intiaial layout
    if(document.querySelector('.parent-page-numbers-parent')) {
        //rotation in deleteCategoryElement case
        if(type ==='deleteCategoryElement'){

            //if active page is last page
            if(numberOfPages===numberOfElements/numberOfElementsOnPage){
                //if inner text is other than 1 (first page is not active)
                if(document.querySelector('.active-page').innerText-1>0){
                    //add animation class
                    pageContainer.classList.add('rotate-page')
                    let rotation=0
                    //set activ page value
                    activePagesValue=document.querySelector('.active-page').innerText

                    //if number of pages is equal to active page value
                    if(numberOfPages+1==activePagesValue){
                        currentRotation=document.querySelectorAll('.page-container')[0].style.transform
                        currentRotation=parseInt(currentRotation.substr(8))

                        //rotate by 90 deg
                        rotation=currentRotation-90

                        pageContainer.style.transform=`rotateY(${rotation}deg)`
                        //time out to do not see when layout is changing
                        setTimeout(()=>{

                            //change active page value
                            activePagesValue=document.querySelector('.active-page').innerText-1
                            document.querySelector('.active-page').innerText=activePagesValue

                            if(document.querySelectorAll('.page-container')[0].style.transform){
                                currentRotation=document.querySelectorAll('.page-container')[0].style.transform
                                currentRotation=parseInt(currentRotation.substr(8))
                            }
                            //next rotation step
                            rotation=currentRotation-90
                            pagination(categoryContainer,hushMapContainer,activePagesValue,numberOfPages)
                            hushMapContainer.style.transform=`rotateY(${rotation}deg)`
                            setTimeout(()=>{
                                //rotate page elements by 180 deg to see it on proper way
                                pageContainer.style.transform=`rotateY(${rotation}deg)`

                            },100)
                        },1000)

                    }
                }else{
                    // if we are not on last page evrything stay without changes
                    activePagesValue=document.querySelector('.active-page').innerText
                }
            }else{
                //if number of pages is not equal to number of elements also without changing
                activePagesValue=document.querySelector('.active-page').innerText
            }
        }else if(type==='addNewElement'){
            //on add new element event active page stay this same
            activePagesValue=document.querySelector('.active-page').innerText
        } else{
            // in other events as change category delete all category and sort page is 1
            activePagesValue='1'
        }
        document.querySelector('.parent-page-numbers-parent').remove()
    }else{
        // when we blick search button in initial layout
        activePagesValue='1'
    }



    // make a active page div layout

    activePages=document.createElement('div')

    activePages=document.createElement('div')

    activePages.innerText=activePagesValue

    activePages.classList.add('active-page')

    const activePagePrevSibling=document.createElement('div')

    activePagePrevSibling.classList.add('active-page-sibling')

    const activePageNextSibling=document.createElement('div')

    activePageNextSibling.classList.add('active-page-sibling')

    const allPagesDiv=document.createElement('div')

    allPagesDiv.classList.add('page-numbers')


    // make a span with number of pages to pagination
    for (let i = 1; i <=numberOfPages ; i++) {
        const span=document.createElement('span')
        span.innerText=i
        allPagesDiv.appendChild(span)
    }


    activePages.addEventListener("click",()=>{
        const menu=document.querySelector('.menu')
        // remove event from menu when we are choosing next active page
        menu.removeEventListener('touchstart',menuEvent)
        // set current page value
        currentPage=document.querySelector('.active-page').innerText
        //remove div with active page layout
        activePagePrevSibling.remove()
        activePageNextSibling.remove()
        activePages.remove()

        //append div with number of pages to choosing
        numberOfPagesParentElement.appendChild(allPagesDiv)

        //only number of pages above changing-page becuse we have to have choose page
        document.querySelector('.page-numbers-parent').style.zIndex='10'
        // transparent div to "remove" all event from layout element before active page will be choose
        document.querySelector('.changing-page').style.zIndex='8'
    })




    allPagesDiv.addEventListener("click",(event)=>{

        const menu=document.querySelector('.menu')
        // add event to menu when we chose active page
        menu.addEventListener('touchstart',menuEvent)

        // set z-index to changing-page be under other divs to be albe to use layout element events
        document.querySelector('.page-numbers-parent').style.zIndex='0'
        document.querySelector('.changing-page').style.zIndex='-2'
        let rotation=180
        // next activ page
        const nextPage=event.target.innerText
        // remove div with numbers of pages
        allPagesDiv.remove()

        //create element with next active pages
        numberOfPagesParentElement.appendChild(activePageNextSibling)
        numberOfPagesParentElement.appendChild(activePages)
        numberOfPagesParentElement.appendChild(activePagePrevSibling)
        pageContainer.classList.add('rotate-page')

        //
        if(document.querySelectorAll('.page-container')[0].style.transform){
            //current rotation
            currentRotation=document.querySelectorAll('.page-container')[0].style.transform
            currentRotation=parseInt(currentRotation.substr(8))
        }else{
            currentRotation=0
        }

        // rotate on right or left it dipends on next active page value
        if(nextPage>currentPage){
            rotation=currentRotation+90

        }else if(nextPage<currentPage){
            rotation=currentRotation-90

        }else{
            rotation=currentRotation
        }
        pageContainer.style.transform=`rotateY(${rotation}deg)`
        setTimeout(()=>{
            // set next active page value
            activePages.innerText=nextPage
            if(document.querySelectorAll('.page-container')[0].style.transform){
                currentRotation=document.querySelectorAll('.page-container')[0].style.transform
                currentRotation=parseInt(currentRotation.substr(8))
            }
            // ending rotation
            if(nextPage>currentPage){
                rotation=currentRotation+90

            }else if(nextPage<currentPage){
                rotation=currentRotation-90

            }else{
                rotation=currentRotation
            }

            pagination(categoryContainer,hushMapContainer,activePages.innerText,numberOfPages)

            //rotate layout by 180 to see without reserved by 180 deg
            hushMapContainer.style.transform=`rotateY(${rotation}deg)`

            setTimeout(()=>{
                //roate page
                pageContainer.style.transform=`rotateY(${rotation}deg)`

            },100)
        },1000)
    })



    //append number of pages to hush map leyout
    parentNumberOfPagesParentElement.appendChild(numberOfPagesParentElement)
    numberOfPagesParentElement.appendChild(activePageNextSibling)
    numberOfPagesParentElement.appendChild(activePages)
    numberOfPagesParentElement.appendChild(activePagePrevSibling)
    hushMapContainer.appendChild(parentNumberOfPagesParentElement)

    //make pagiantion every time to se layout with max element list on current page
    pagination(categoryContainer, hushMapContainer, activePagesValue,numberOfPages)


}
export default numberOfPages
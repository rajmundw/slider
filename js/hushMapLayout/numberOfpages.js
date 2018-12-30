import pagination from '../pagination/pagination'
import menuEvent from '../hushMapLayout/menuEvent'


const numberOfPages= (categoryContainer,event,type)=>{


    let activePages=''

    let activePagesValue=''

    let currentPage=''

    let currentRotation=''

    const hushMapContainer = document.querySelector('#hush-map')

    const pageContainer=document.querySelector('.page-container')

    const numberOfElements=categoryContainer.childNodes.length-1

    const parentNumberOfPagesParentElement=document.createElement('div')

    parentNumberOfPagesParentElement.classList.add('parent-page-numbers-parent')

    const numberOfPagesParentElement=document.createElement('div')

    numberOfPagesParentElement.classList.add('page-numbers-parent')

    let numberOfPages=Math.ceil(numberOfElements/5)


    if(document.querySelector('.parent-page-numbers-parent')) {
        if(type ==='deleteCategoryElement'){
            if(numberOfPages===numberOfElements/5){
                console.log('soort')

                if(document.querySelector('.active-page').innerText-1>0){
                    console.log('soort2')

                    pageContainer.classList.add('rotate-page')
                    let rotation=0
                    activePagesValue=document.querySelector('.active-page').innerText

                    if(numberOfPages+1==activePagesValue){
                        currentRotation=document.querySelectorAll('.page-container')[0].style.transform
                        currentRotation=parseInt(currentRotation.substr(8))

                        rotation=currentRotation-90

                        pageContainer.style.transform=`rotateY(${rotation}deg)`
                        setTimeout(()=>{
                            console.log(document.querySelector('.active-page').innerText)
                            activePagesValue=document.querySelector('.active-page').innerText-1
                            document.querySelector('.active-page').innerText=activePagesValue


                            if(document.querySelectorAll('.page-container')[0].style.transform){
                                currentRotation=document.querySelectorAll('.page-container')[0].style.transform
                                currentRotation=parseInt(currentRotation.substr(8))
                            }

                            rotation=currentRotation-90
                            pagination(categoryContainer,hushMapContainer,activePagesValue,numberOfPages)
                            hushMapContainer.style.transform=`rotateY(${rotation}deg)`
                            setTimeout(()=>{
                                pageContainer.style.transform=`rotateY(${rotation}deg)`

                            },100)
                        },1000)

                    }
                }else{
                    activePagesValue=document.querySelector('.active-page').innerText
                }
            }else{
                activePagesValue=document.querySelector('.active-page').innerText
            }
        }else if(type==='addNewElement'){
            activePagesValue=document.querySelector('.active-page').innerText
        } else{
            activePagesValue='1'
        }
        document.querySelector('.parent-page-numbers-parent').remove()
    }else{
        activePagesValue='1'
    }


    activePages=document.createElement('div')


    activePages=document.createElement('div')

    activePages.innerText=activePagesValue

    activePages.classList.add('active-page')

    if(typeof event!=='undefined'){
        if(numberOfPages===numberOfElements/5 && numberOfPages===activePagesValue ){

        }else{
            pagination(categoryContainer, hushMapContainer, activePagesValue,numberOfPages)

        }
    }else {
        pagination(categoryContainer, hushMapContainer, activePagesValue,numberOfPages)
    }
    const activePagePrevSibling=document.createElement('div')

    activePagePrevSibling.classList.add('active-page-sibling')

    const activePageNextSibling=document.createElement('div')

    activePageNextSibling.classList.add('active-page-sibling')

    const allPagesDiv=document.createElement('div')

    allPagesDiv.classList.add('page-numbers')

    for (let i = 1; i <=numberOfPages ; i++) {
        const span=document.createElement('span')
        span.innerText=i
        allPagesDiv.appendChild(span)
    }

    activePages.addEventListener("click",()=>{
        const menu=document.querySelector('.menu')

        menu.removeEventListener('touchstart',menuEvent)

        currentPage=document.querySelector('.active-page').innerText
        activePagePrevSibling.remove()
        activePageNextSibling.remove()
        activePages.remove()
        numberOfPagesParentElement.appendChild(allPagesDiv)
        document.querySelector('.page-numbers-parent').style.zIndex='10'
        document.querySelector('.changing-page').style.zIndex='8'
    })

    allPagesDiv.addEventListener("click",(event)=>{
        const menu=document.querySelector('.menu')

        menu.addEventListener('touchstart',menuEvent)


        document.querySelector('.page-numbers-parent').style.zIndex='0'
        document.querySelector('.changing-page').style.zIndex='-2'
        let rotation=180
        const nextPage=event.target.innerText
        allPagesDiv.remove()
        numberOfPagesParentElement.appendChild(activePageNextSibling)
        numberOfPagesParentElement.appendChild(activePages)
        numberOfPagesParentElement.appendChild(activePagePrevSibling)
        pageContainer.classList.add('rotate-page')
        if(document.querySelectorAll('.page-container')[0].style.transform){
            currentRotation=document.querySelectorAll('.page-container')[0].style.transform
            currentRotation=parseInt(currentRotation.substr(8))
        }else{
            currentRotation=0
        }

        if(nextPage>currentPage){
            rotation=currentRotation+90

        }else if(nextPage<currentPage){
            rotation=currentRotation-90

        }else{
            rotation=currentRotation
        }
        pageContainer.style.transform=`rotateY(${rotation}deg)`
        setTimeout(()=>{
            activePages.innerText=nextPage
            if(document.querySelectorAll('.page-container')[0].style.transform){
                currentRotation=document.querySelectorAll('.page-container')[0].style.transform
                currentRotation=parseInt(currentRotation.substr(8))
            }
            if(nextPage>currentPage){
                rotation=currentRotation+90

            }else if(nextPage<currentPage){
                rotation=currentRotation-90

            }else{
                rotation=currentRotation
            }
            pagination(categoryContainer,hushMapContainer,activePages.innerText,numberOfPages)
            hushMapContainer.style.transform=`rotateY(${rotation}deg)`
            setTimeout(()=>{
                pageContainer.style.transform=`rotateY(${rotation}deg)`

            },100)
        },1000)
    })


    parentNumberOfPagesParentElement.appendChild(numberOfPagesParentElement)
    numberOfPagesParentElement.appendChild(activePageNextSibling)
    numberOfPagesParentElement.appendChild(activePages)
    numberOfPagesParentElement.appendChild(activePagePrevSibling)

    console.log(document.querySelector('.category-container'))
    hushMapContainer.appendChild(parentNumberOfPagesParentElement)



}
export default numberOfPages
const hideMenuOptions=(openedMenuDiv)=>{
    if(document.querySelector('#containerAddInputs')){
        document.querySelector('#containerAddInputs').style.display='none'
    }
    if(document.querySelector('.add-category')){
        if(document.querySelector('.add-category').innerText==="Submit"){
            document.querySelector('.add-category').innerText="Add new element"
        }
    }
    if(document.querySelector('#containerAddInputs')){
        document.querySelector('#containerAddInputs').style.display='none'
    }
    if(document.querySelector('#calendar') && document.querySelector('#calendar').style.display==='block'){
        document.querySelector('#calendar').style.display='none'
    }
    openedMenuDiv.childNodes[1].childNodes.forEach(element=>{
        if(element.nodeName!=="LI"){
            element.style.display='none'
        }else{
            element.style.display='block'
        }
    })
    if(document.querySelector('.add-category')){
        document.querySelector('.add-category').innerText="Add new Element"

    }

    if(document.getElementById('dataInput')){
        const containerAddInput=document.getElementById('containerAddInputs')
        containerAddInput.childNodes.forEach(element=>{
            element.style.display="flex"
        })
        if(document.getElementById('calendar')){
            document.getElementById('calendar').style.display='none'
        }
        document.getElementById('dataInput').disabled=""
    }
}

export default hideMenuOptions
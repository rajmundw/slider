const hideMenuOptions=(openedMenuDiv)=>{
    //make hidden inputs to add new element
    if(document.querySelector('#containerAddInputs')){
        document.querySelector('#containerAddInputs').style.display='none'
    }
    //make hidden calendar
    if(document.querySelector('#calendar') && document.querySelector('#calendar').style.display==='block'){
        document.querySelector('#calendar').style.display='none'
    }
    //ul li elements visible
    openedMenuDiv.childNodes[1].childNodes.forEach(element=>{
        if(element.nodeName!=="LI"){
            element.style.display='none'
        }else{
            element.style.display='block'
        }
    })
    //set inner text of this button on initial
    if(document.querySelector('.add-category')){
        document.querySelector('.add-category').innerText="Add new Element"

    }

    // data input make visible and set disable to initial value
    if(document.getElementById('dataInput')){
        const containerAddInput=document.getElementById('containerAddInputs')
        containerAddInput.childNodes.forEach(element=>{
           //data input element flex
            element.style.display="flex"
        })
        if(document.getElementById('calendar')){
            //calenda display none
            document.getElementById('calendar').style.display='none'
        }
        document.getElementById('dataInput').disabled=""
    }
}

export default hideMenuOptions
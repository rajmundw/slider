const initialLayout=()=>{
    const inputsContainer=document.querySelectorAll('.initial-inputs-container')
    const inputsContainerTopOffset=inputsContainer[0].getBoundingClientRect().top
    const inputsContainerHeight=inputsContainer[0].getBoundingClientRect().height
    const allDistanceToTransalte=inputsContainerTopOffset+inputsContainerHeight
    inputsContainer[0].style.transform=`translateY(${-allDistanceToTransalte}px)`
    let textToAnimation=document.querySelectorAll('.intrance-info span')
    console.log(textToAnimation)
    textToAnimation.forEach(span=>{
        span.style.color="transparent"
    })
    const innerTextSpanToAnimation=[...textToAnimation].map(span=>{
        return span.innerText
        }
    )
    let counter=0
    const cursorInterval=setInterval(()=>{
        console.log("interval")
        if(textToAnimation[counter].style.color==="black"){
            textToAnimation[counter].style.color="transparent"
        }else{
            textToAnimation[counter].style.color="black"
        }
    },500)
    setTimeout(()=>{
        clearInterval(cursorInterval)
        if(textToAnimation[0].style.color==="black"){
            textToAnimation[0].style.color==="transparent"

        }
        const writtingText=setInterval(()=>{
            counter++
            const currentTextInner=textToAnimation[`${counter}`].innerText
            if(counter===textToAnimation.length-1){
                document.querySelector('.initial-inputs-container').classList.add('initial-inputs-animation')
                setTimeout(()=>{
                    document.querySelector('.search-button').style.visibility="visible"
                },2000)
                const cursorInterval=setInterval(()=>{
                    if(textToAnimation[counter].style.color==="black"){
                        textToAnimation[counter].style.color="transparent"
                    }else{
                        textToAnimation[counter].style.color="black"
                    }
                },500)
                clearInterval(writtingText)
            }
            textToAnimation[`${counter-1}`].innerText=innerTextSpanToAnimation[`${counter-1}`]
            if(counter!==textToAnimation.length-1){
                textToAnimation[`${counter}`].innerText=`${currentTextInner}|`
            }
                textToAnimation[`${counter}`].style.color="black"
        },250)
    },2000)
}

export default initialLayout
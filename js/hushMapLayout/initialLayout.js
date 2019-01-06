const initialLayout=()=>{
    const inputsContainer=document.querySelectorAll('.initial-inputs-container')
    const inputsContainerTopOffset=inputsContainer[0].getBoundingClientRect().top
    const inputsContainerHeight=inputsContainer[0].getBoundingClientRect().height
    const allDistanceToTransalte=inputsContainerTopOffset+inputsContainerHeight



    if(window.innerWidth<=300 && window.innerHeight>901){
        document.querySelector('.page-container').style.height=`${window.innerHeight}px`

    }else if(window.innerWidth>300 && window.innerWidth<=570 && window.innerHeight>706){
        document.querySelector('.page-container').style.height=`${window.innerHeight}px`

    }else if(window.innerWidth<=768 && window.innerWidth>570 && window.innerHeight>1050){
        document.querySelector('.page-container').style.height=`${window.innerHeight}px`
    }

 /*   //translate initial inputs to bacome hidden to animation
    inputsContainer[0].style.transform=`translateY(${-allDistanceToTransalte}px)`

    let textToAnimation=document.querySelectorAll('.intrance-info span')
    //text to animation evetyone hidden
    textToAnimation.forEach(span=>{
        span.style.color="transparent"
    })
    //copy array text to animation
    const innerTextSpanToAnimation=[...textToAnimation].map(span=>{
        return span.innerText
        }
    )
    let counter=0
    //initial interval to cursor effect
    const cursorInterval=setInterval(()=>{
        if(textToAnimation[counter].style.color==="black"){
            textToAnimation[counter].style.color="transparent"
        }else{
            textToAnimation[counter].style.color="black"
        }
    },500)

    //above interval last 2s
    setTimeout(()=>{
        clearInterval(cursorInterval)
        if(textToAnimation[0].style.color==="black"){
            textToAnimation[0].style.color==="transparent"

        }
        //interval to writting text effect
        const writtingText=setInterval(()=>{
            // increment counter
            counter++
            //current text
            const currentTextInner=textToAnimation[`${counter}`].innerText
            //last element to write
            if(counter===textToAnimation.length-1){
                //start animation
                document.querySelector('.initial-inputs-container').classList.add('initial-inputs-animation')
                //show seatch button
                setTimeout(()=>{
                    document.querySelector('.search-button').style.visibility="visible"
                },2000)

                // set interval to cursor effect for last element to write
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
                //current text set as current text+|
                textToAnimation[`${counter}`].innerText=`${currentTextInner}|`
            }
            textToAnimation[`${counter}`].style.color="black"
        },250)
    },2000)*/
}

export default initialLayout
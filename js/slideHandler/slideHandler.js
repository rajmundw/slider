const slideHandler = (categoryContainer) =>{
    if(document.querySelector('.slide')) {
        const slideBarLeft = document.querySelector('.left-slide-bar')
        const slideBarRight = document.querySelector('.right-slide-bar')
        const currentTranslation = categoryContainer.style.transform



        if (document.querySelector('.slide').classList.contains('initial')) {
            // initial slide handler layout
            slideBarRight.style.display = 'none'
            document.querySelector('.slide').style.display = 'block'
            document.querySelector('.slide').classList.remove('initial')
        }

        // slide handler steps and layout
        if (!currentTranslation || currentTranslation === "translateX(0%)") {
            slideBarLeft.style.display = 'block'
            slideBarRight.style.display = 'none'
        } else if (currentTranslation === "translateX(-33.33%)") {
            slideBarRight.style.display = 'block'
            slideBarLeft.style.display = 'block'
        } else if (currentTranslation === "translateX(-66.66%)") {
            slideBarRight.style.display = 'block'
            slideBarLeft.style.display = 'none'
        }
    }
}

export default slideHandler
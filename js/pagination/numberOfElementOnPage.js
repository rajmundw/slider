const numberOfElementOnPage = () =>{
    let numberOfElements=''
    let lastLayoutElementBottomPostion=''
    const defaultNumberOfElements=5
    const windowHeight=window.innerHeight
    let emptySpace=""
    let margitnBottomCategoryContainer=''
    let elementToReturn=[]



    if(window.innerWidth>300 && window.innerWidth<=570){
        const hedaerHeight=document.querySelector(".hush-map-header").getBoundingClientRect().bottom
        const numberOfPageHeight=206
        const defaultContainerHegiht=310
        const defaultPageHeight=defaultContainerHegiht+numberOfPageHeight+hedaerHeight
        const ulHeight=55
        if(defaultPageHeight<windowHeight){
            const additionalElements=Math.floor((windowHeight-defaultPageHeight)/ulHeight)
            numberOfElements=additionalElements+defaultNumberOfElements
            margitnBottomCategoryContainer=windowHeight-defaultPageHeight-55*additionalElements
        }else{
            //if emptyspace < 0  defaul list visible element
            numberOfElements=defaultNumberOfElements
            margitnBottomCategoryContainer=0
        }
    }else if(window.innerWidth<=300) {

        const hedaerHeight=document.querySelector(".hush-map-header").getBoundingClientRect().bottom
        const numberOfPageHeight=206
        const defaultContainerHegiht=470
        const defaultPageHeight=defaultContainerHegiht+numberOfPageHeight+hedaerHeight
        const ulHeight=90
        if(defaultPageHeight<windowHeight){
            const additionalElements=Math.floor((windowHeight-defaultPageHeight)/ulHeight)
            numberOfElements=additionalElements+defaultNumberOfElements
            margitnBottomCategoryContainer=windowHeight-defaultPageHeight-90*additionalElements
        }else{
            //if emptyspace < 0  defaul list visible element
            numberOfElements=defaultNumberOfElements
            margitnBottomCategoryContainer=0
        }
    }else if(window.innerWidth<=950 && window.innerWidth>570){
        const hedaerHeight=document.querySelector(".hush-map-header").getBoundingClientRect().bottom+30
        const numberOfPageHeight=206
        const defaultContainerHegiht=701
        const defaultPageHeight=defaultContainerHegiht+numberOfPageHeight+hedaerHeight
        const ulHeight=155
        console.log(defaultPageHeight,windowHeight,hedaerHeight)
        if(defaultPageHeight<windowHeight){
            const additionalElements=Math.floor((windowHeight-defaultPageHeight)/ulHeight)
            numberOfElements=additionalElements+defaultNumberOfElements-1
            margitnBottomCategoryContainer=windowHeight-defaultPageHeight-155*additionalElements
        }else{
            //if emptyspace < 0  defaul list visible element
            numberOfElements=4
            margitnBottomCategoryContainer=0
        }
    }else if(window.innerWidth<=1800 && window.innerWidth>950){
        const hedaerHeight=document.querySelectorAll(".hush-map-header")[0].offsetTop+document.querySelectorAll(".hush-map-header")[0].clientHeight+50
        const numberOfPageHeight=161
        const defaultContainerHegiht=600
        const defaultPageHeight=defaultContainerHegiht+numberOfPageHeight+hedaerHeight
        console.log(document.querySelectorAll(".hush-map-header"))
        const ulHeight=150
        console.log(document.querySelectorAll(".hush-map-header")[0].offsetTop)
        console.log(defaultPageHeight,windowHeight,hedaerHeight)
        if(defaultPageHeight<windowHeight){
            const additionalElements=Math.floor((windowHeight-defaultPageHeight)/ulHeight)
            numberOfElements=additionalElements+defaultNumberOfElements-1
            margitnBottomCategoryContainer=windowHeight-defaultPageHeight-150*additionalElements
        }else{
            //if emptyspace < 0  defaul list visible element
            numberOfElements=4
            margitnBottomCategoryContainer=0
        }

    }else {
        numberOfElements=4
    }

    elementToReturn.push(numberOfElements,margitnBottomCategoryContainer)

    return elementToReturn

}
export default numberOfElementOnPage
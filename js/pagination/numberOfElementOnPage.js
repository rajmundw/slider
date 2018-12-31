const numberOfElementOnPage = () =>{
    let numberOfElements=''
    let lastLayoutElementBottomPostion=''
    const defaultNumberOfElements=5
    const windowHeight=window.innerHeight
    let emptySpace=""
    let margitnBottomCategoryContainer=''
    let elementToReturn=[]



    if(window.innerWidth>300 && window.innerWidth<=570){
        lastLayoutElementBottomPostion=706
        emptySpace=windowHeight-lastLayoutElementBottomPostion
        const ulHeight=55

        if(emptySpace>0){
            const additionalElements=Math.floor(emptySpace/ulHeight)
            // check how many element we can add to layout visible list
            margitnBottomCategoryContainer=emptySpace-additionalElements*55
            numberOfElements=defaultNumberOfElements+additionalElements
        }else{
            //if emptyspace < 0  defaul list visible element
            numberOfElements=defaultNumberOfElements
            margitnBottomCategoryContainer=0
        }
    }else if(window.innerWidth<=300){
        // for small mobile only one option when visivile list ementy is equal 5
        numberOfElements=defaultNumberOfElements
        margitnBottomCategoryContainer=0
    }

    elementToReturn.push(numberOfElements,margitnBottomCategoryContainer)

    return elementToReturn

}
export default numberOfElementOnPage
const numberOfElementOnPage = () =>{
    let numberOfElements=''
    let lastLayoutElementBottomPostion=''
    const defaultNumberOfElements=5
    const windowHeight=window.innerHeight
    let emptySpace=""
    let elementToReturn=[]


    if(window.innerWidth>300 && window.innerWidth<=570){
        const hedaerHeight=210
        const pageNumberHeight=150
        const defaultContainerHegiht=310
        const defaultPageHeight=defaultContainerHegiht+hedaerHeight+pageNumberHeight
        const ulHeight=55
        console.log(defaultPageHeight,windowHeight,document.querySelector(".hush-map-header").parentElement.offsetHeight)
        if(defaultPageHeight<=windowHeight){
            const additionalElements=Math.floor((windowHeight-defaultPageHeight)/ulHeight)
            numberOfElements=additionalElements+defaultNumberOfElements
        }else{
            //if emptyspace < 0  defaul list visible element
            numberOfElements=defaultNumberOfElements
        }
    }else if(window.innerWidth<=300) {

        const hedaerHeight=210
        const pageNumberHeight=150
        const defaultContainerHegiht=470
        const defaultPageHeight=defaultContainerHegiht+hedaerHeight+pageNumberHeight
        const ulHeight=90
        if(defaultPageHeight<=windowHeight){

            const additionalElements=Math.floor((windowHeight-defaultPageHeight)/ulHeight)
            numberOfElements=additionalElements+defaultNumberOfElements
        }else{
            //if emptyspace < 0  defaul list visible element
            numberOfElements=defaultNumberOfElements
        }
    }else if(window.innerWidth<=950 && window.innerWidth>570){
        const hedaerHeight=document.querySelector(".hush-map-header").getBoundingClientRect().bottom+30
        const pageNumberHeight=150
        const defaultContainerHegiht=701
        const defaultPageHeight=defaultContainerHegiht+pageNumberHeight+hedaerHeight
        const ulHeight=155
        console.log(defaultPageHeight,windowHeight,hedaerHeight)
        if(defaultPageHeight<windowHeight){
            const additionalElements=Math.floor((windowHeight-defaultPageHeight)/ulHeight)
            numberOfElements=additionalElements+defaultNumberOfElements-1
        }else{
            //if emptyspace < 0  defaul list visible element
            numberOfElements=4
        }
    }else if(window.innerWidth<=1800 && window.innerWidth>950){
        const hedaerHeight=document.querySelectorAll(".hush-map-header")[0].offsetTop+document.querySelectorAll(".hush-map-header")[0].clientHeight+50
        const defaultContainerHegiht=600
        const numberOfPageHeight =200
        const defaultPageHeight=defaultContainerHegiht+numberOfPageHeight+hedaerHeight
        console.log(document.querySelectorAll(".hush-map-header"))
        const ulHeight=150
        console.log(document.querySelectorAll(".hush-map-header")[0].offsetTop)
        console.log(defaultPageHeight,windowHeight,hedaerHeight)
        if(defaultPageHeight<windowHeight){
            const additionalElements=Math.floor((windowHeight-defaultPageHeight)/ulHeight)
            numberOfElements=additionalElements+defaultNumberOfElements-1
        }else{
            //if emptyspace < 0  defaul list visible element
            numberOfElements=4
        }

    }else {
        numberOfElements=4
    }

    elementToReturn.push(numberOfElements)

    return elementToReturn

}
export default numberOfElementOnPage
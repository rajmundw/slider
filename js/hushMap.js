import getFunction from './getFunction/getFunction'
import initialLayout from './hushMapLayout/initialLayout'
import menuHandler from './hushMapLayout/menu'
import slideFunction from './slideFunction/slideFunction'
import resizeFunction from './resizeFunction/resize'
import router from "./router/router"


// initial url and initial page position
window.scrollTo(0, 0)
window.location.hash=""


// search button
const serchButton=document.querySelector('.search-button')
// event on click to get data from api
serchButton.onClick=getFunction()

router()

menuHandler()
resizeFunction()
initialLayout()
slideFunction()

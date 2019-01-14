import getFunction from './getFunction/getFunction'
import initialLayout from './hushMapLayout/initialLayout'
import menuHandler from './hushMapLayout/menu'
import slideFunction from './slideFunction/slideFunction'
import resizeFunction from './resizeFunction/resize'




// search button
const serchButton=document.querySelector('.search-button')
// event on click to get data from api
serchButton.onClick=getFunction()



menuHandler()
resizeFunction()
initialLayout()
slideFunction()

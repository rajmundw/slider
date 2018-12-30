import getFunction from './getFunction/getFunction'
import initialLayout from './hushMapLayout/initialLayout'
import menuHandler from './hushMapLayout/menu'
import slideFunction from './slideFunction/slideFunction'
import resizeFunction from './resizeFunction/resize'
const menuDiv=document.querySelector('.opened-menu')
menuDiv.style.minHeight=`${window.innerHeight}px`

menuHandler()
resizeFunction()
initialLayout()
// search button
const serchButton=document.querySelector('.search-button')
// event on click to get data from api
serchButton.onClick=getFunction()
slideFunction()

let array = [13, 7, 6, 45, 21, 9, 101, 102,1,2,45,67,89,34,2, 3, 5, 7, 11, 13, 17, 19, 23]

for (let i = 0; i < array.length ; i++) {
    for (let j = i; j <array.length ; j++) {
        let condition=true
            if(array[i]<array[j]){
                let helpVariable = array[i]
                array[i]=array[j]
                array[j]=helpVariable

        }
    }
}
console.log(array)


import newFetch from '../fetch/newFetch'
import createHushMapLayout from '../hushMapLayout/createHushMapLayout'
import updateHushMapLayout from '../hushMapLayout/updateHushMapLayout'

// answer from api
let answer=''
//array witch categories
let categoriesArray=[]
// array with node category container which are in memory
let categoryNodeList=[]
// inputs and button which will be append to menuDiv
let inputsAndButtonsToMenu=[]


// "add new category" inputs in initial layout slice to append on menu div
const initialInputsContainer=[...document.querySelectorAll('.initial-inputs-container')].slice()

const inputsContainer=document.querySelectorAll('.initial-inputs-container')
// set offset to initial inputs to make animation
const inputsContainerTopOffset=inputsContainer[0].getBoundingClientRect().top

// constructor
class Category {
    constructor(inputValue,apiAnswer) {
        this.name = inputValue
        this.elements =apiAnswer
    }
}

// asynchronic functiion
async function apiAnswer(inputValue,numberOfElements){
    // api answer is waiting for asynchronic fetch json answer
    answer= await newFetch(inputValue,numberOfElements)
}

//create new category
const newCategory=(inputValue,numberOfElements)=>{
    // div with potential errors
    const errorDiv = document.getElementById('error-massage')
    // errors hanlder
    console.log(parseInt(numberOfElements).toString())
    if( inputValue.length>0 && parseInt(numberOfElements).toString()!=="NaN"){
        // number of elements error handler
        if(Number(numberOfElements)>30 || Number(numberOfElements)<1){
            errorDiv.innerText="Error, range of numbers 1-30"
        }else{
            //error div empty
            errorDiv.innerText=""

            // call asynchronic function
            apiAnswer(inputValue,numberOfElements)
                .then(
                    ()=>{
                        // after fetch create new category
                        let newCategory=new Category (inputValue,answer)


                        // push new category to category array
                        categoriesArray.push(newCategory)
                    })
                .then(()=> {
                    //run createHushMapLayout function and set value to inputsAndButtonsToMenu on returned array from  createHushMapLayout
                    inputsAndButtonsToMenu=createHushMapLayout(inputValue,categoriesArray,categoryNodeList,initialInputsContainer)

                })
        }
    }else{
        //number of elements and vategory value input errors hanlder
        if(inputValue.length<1 && parseInt(numberOfElements).toString()!=="NaN"){
            errorDiv.innerText="Fill the gaps"
        }else if(parseInt(numberOfElements).toString()==="NaN" && inputValue.length>0){
            errorDiv.innerText="Error, range of numbers 1-30"
        }else{
            errorDiv.innerText="Error, wrong value type"
        }
    }
}



export {newCategory, categoriesArray,categoryNodeList, initialInputsContainer ,inputsAndButtonsToMenu}
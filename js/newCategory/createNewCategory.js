import newFetch from '../fetch/newFetch'
import createHushMapLayout from '../hushMapLayout/createHushMapLayout'
import updateHushMapLayout from '../hushMapLayout/updateHushMapLayout'

// answer from api
let answer=''
//
let categoryArray=[]

let categoryNodeList=[]

let arrayFromCreateHushMapLayout=[]

const initialInputsContainer=[...document.querySelectorAll('.initial-inputs-container')].slice()
const inputsContainer=document.querySelectorAll('.initial-inputs-container')
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


const newCategory=(inputValue,numberOfElements)=>{
    // call asynchronic function
    const errorDiv = document.getElementById('error-massage')
    if(typeof inputValue ==='string' && Number(numberOfElements)!=='NaN'
       && Number(numberOfElements)>0 && inputValue.length>1 ){
        if(Number(numberOfElements)>30){
            errorDiv.innerText="Error, limit of elements under 30"
        }else{
            errorDiv.innerText=""
            apiAnswer(inputValue,numberOfElements)
                .then(
                    ()=>{
                        // after fetch create new category
                        let newCategory=new Category (inputValue,answer)

                        // push new category to category array
                        categoryArray.push(newCategory)
                    })
                .then(()=> {
                    arrayFromCreateHushMapLayout=createHushMapLayout(inputValue,categoryArray,categoryNodeList,initialInputsContainer)
                    console.log(categoryNodeList)

                })
        }
    }else{
        errorDiv.innerText="Input type error"
    }
    console.log(errorDiv)
}



export {newCategory, categoryArray,categoryNodeList, initialInputsContainer ,arrayFromCreateHushMapLayout}
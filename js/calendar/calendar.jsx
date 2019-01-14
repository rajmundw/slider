import React from 'react'
import ReactDOM from 'react-dom';

const data=new Date()
//this month
let currentMonth=data.getMonth()
//this year
let currentYear=data.getFullYear()
//first day of month
let fictionData=new Date(currentYear,currentMonth,1)
//days array
const daysNameArray=['Mon','Tue','Wen','Thu','Fri',"Sat",'Sun']
//month array
const monthsNameArray=["Jan","Feb",'Mar',"Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
//array with days which are as react element they are ready to render
let daysNameArrayReact=[]

// function to get to know how many days has current month
const daysInMonth=(month, year)=> {
    return new Date(year, month, 0).getDate();
}
//array with all month's days
let daysArray=[]
//array with weeks It exists because thanks to this is created rows in calendar
let weeksArray=[]

//react component
class App extends React.Component{
    constructor(props){
        super(props)
        // state of application
        this.state={
            //to know which month should be show in table
            Month:currentMonth,
            //to know which year should be show in table
            Year:currentYear
        }
        console.log('constructor')
    }

    //function to show previous month it works on click
    previousMonth(){
        console.log(this)
        //decrement month number
        currentMonth=currentMonth-1
        //to still hold proper number of months
        if(currentMonth<0){
            currentMonth=11
            currentYear=currentYear-1
        }
        //set state to render new month in calendar
        this.setState({
            Month:currentMonth,
            Year:currentYear
        })
        //set new fiction data to know which day of month is first
        fictionData=new Date(currentYear,currentMonth,1)
        //reset all arrays to still have one month in calendar
        daysArray=[]
        weeksArray=[]
        daysNameArrayReact=[]
    }

    //similar like above but increment number of months
    follwingMonth(){
        currentMonth=currentMonth+1
        if(currentMonth>11){
            currentMonth=0
            currentYear=currentYear+1
        }
        this.setState({
            Month:currentMonth,
            Year:currentYear
        })
        fictionData=new Date(currentYear,currentMonth,1)
        daysArray=[]
        weeksArray=[]
        daysNameArrayReact=[]
    }

    //on click on month day to set input value
    choiceData(event){
        //similar like above reset arrays
        daysArray=[]
        weeksArray=[]
        daysNameArrayReact=[]
        //clicked day
        let day=event.target.innerText
        //number of current year
        const year=document.querySelector('.month-year').innerText.substr(4,4)
        //number of current month
        let monthName=document.querySelector('.month-year').innerText.substr(0,3)
        //month number because data which is proper to api request is a number of month

        let monthNumber=0
        monthsNameArray.forEach((element,index)=>{
            //choice proper month from monthNameArray and its index
            if(element===monthName){
                monthNumber=index+1
            }
        })
        //make a proper data because months and days have to have two number
        if (day.length === 1) {
            day=`0${day}`
        }
        if (monthNumber.toString().length === 1) {
            monthNumber=`0${monthNumber}`
        }
        if (day.length === 1 && monthNumber.toString().length === 1) {
            day=`0${day}`
            monthNumber=`0${monthNumber}`
        }

        const inputData=document.getElementById('dataInput')
            inputData.value=    (`${year}-${monthNumber}-${day}`)
        dataInput.disabled=""
        const containerAddInput=document.getElementById('containerAddInputs')
        containerAddInput.childNodes.forEach(element=>{
            element.style.display="flex"
        })
        document.getElementById('calendar').style.display='none'
        document.querySelector('.add-category').style.display="block"
        document.querySelector('.back-to-menu-from-add-element').style.display="block"
        if(window.innerWidth>1020){
            document.querySelector('.back-to-menu-from-add-element').style.display="none"
        }
    }

    calendar(){
        //similar like above reset table
        daysArray=[]
        weeksArray=[]
        daysNameArrayReact=[]
        //create a react element for days name
        daysNameArray.forEach((element)=>{
            daysNameArrayReact.push(<td>{element}</td>)
        })
        //get to know which day of week is first day of month
        let numberOfDays=daysInMonth(currentMonth+1,currentYear)
        //make a empty element i row because not everyone month stats from monday
        switch (fictionData.getDay()){
            //Monday
            case 1:{
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }

                break
            }
            //Tuesday
            case 2:{
                daysArray.push(<td> </td>)
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }

                break

            }
            //Wednesday
            case 3:{
                daysArray.push(<td> </td>,<td> </td>)
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }

                break

            }
            //Thursday
            case 4:{
                daysArray.push(<td> </td>,<td> </td>,<td> </td>)
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }

                break

            }
            //Firsday
            case 5:{
                daysArray.push(<td> </td>,<td> </td>,<td> </td>,<td> </td>)
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }

                break

            }
            //Saturday
            case 6:{
                daysArray.push(<td> </td>,<td> </td>,<td> </td>,<td> </td>,<td> </td>)
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }

                break

            }
            //Sunday
            default:{
                daysArray.push(<td> </td>,<td> </td>,<td> </td>,<td> </td>,<td> </td>,<td> </td>)
                for (let i = 1; i <=numberOfDays ; i++) {
                    daysArray.push(<td onClick={this.choiceData}>{i}</td>)
                    if(daysArray.length===7){
                        weeksArray.push(<tr>{daysArray}</tr>)
                        daysArray=[]
                    }
                    if(i===numberOfDays){
                        weeksArray.push(<tr>{daysArray}</tr>)
                    }
                }
                break;
            }
        }
        return(
            <table>
                <caption>
                    <div className="month-year-parent">
                        <div className="before" onClick={()=>this.previousMonth()}> > </div>
                        <div className="month-year">{monthsNameArray[currentMonth]} {currentYear}</div>
                        <div className="after" onClick={()=>this.follwingMonth()}> > </div>
                    </div>
                </caption>
                <thead>
                {daysNameArrayReact}
                </thead>
                <tbody>
                {weeksArray}
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        )

    }
    render(){
        return(
            <div id="calendar1" className='calendar-container'>
                {this.calendar()}
            </div>
        )
    }
}

export default App
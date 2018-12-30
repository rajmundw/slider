import {categoryArray, categoryNodeList} from '../newCategory/createNewCategory'
import pagination from '../pagination/pagination'


const sortFunction=(event,selectCategory,typeOfSotring)=>{
    const hushMapLayout = document.querySelector('#hush-map')
    let typeOfsorting=''
    let categoryName=''
    if(event.toString()==='[object MouseEvent]') {
        typeOfsorting = typeOfSotring
        categoryName = selectCategory.value

    }else {
        typeOfsorting = event.target.value
        categoryName = selectCategory.value
    }

    switch (typeOfsorting){
        case "likes":{
            categoryNodeList.forEach(category=>{
                if(category.id===categoryName) {
                    for (let i = 0; i < category.childNodes.length ; i++) {

                        for (let j = i; j <category.childNodes.length ; j++) {

                            let ul1 = category.childNodes[i]

                            let ul2 = category.childNodes[j]

                            let li1 = [...ul1.children].filter(li=>{
                                return li.id==="likes"
                            })

                            let li2 = [...ul2.children].filter(li=>{
                                return li.id==="likes"
                            })

                            if(Number(li1[0].innerText)<Number(li2[0].innerText)){
                                ul1.parentNode.insertBefore(ul2, ul1)
                            }
                        }
                    }
                    pagination(category,hushMapLayout,1)
                    document.querySelector('.active-page').innerText='1'
                    category.setAttribute('sortedBy','likes')

                }

            })
            break;
        }
        case "created":{
            categoryNodeList.forEach(category=>{
                if(category.id===categoryName) {
                    for (let i = 0; i < category.childNodes.length ; i++) {

                        for (let j = i; j <category.childNodes.length ; j++) {

                            let ul1 = category.childNodes[i]

                            let ul2 = category.childNodes[j]

                            let li1=[...ul1.children].filter(li=>{
                                return li.id==="created"
                            })

                            let li2=[...ul2.children].filter(li=>{
                                return li.id==="created"
                            })

                            let data1=Number(((li1[0].innerText.replace('-','')).replace('-','')).slice(0,8))
                            let data2=Number(((li2[0].innerText.replace('-','')).replace('-','')).slice(0,8))

                            if(data1<data2){
                                ul1.parentNode.insertBefore(ul2, ul1)
                            }
                        }
                    }
                    pagination(category,hushMapLayout,1)
                    document.querySelector('.active-page').innerText='1'
                    category.setAttribute('sortedBy','created')

                }
            })
            break;
        }
        case "size":{

            categoryNodeList.forEach(category=>{
                if(category.id===categoryName) {
                    for (let i = 0; i < category.childNodes.length ; i++) {

                        for (let j = i; j <category.childNodes.length ; j++) {

                            let ul1 = category.childNodes[i]

                            let ul2 = category.childNodes[j]

                            let li1=[...ul1.children].filter(li=>{
                                return li.id==="width"
                            })

                            let li2=[...ul2.children].filter(li=>{
                                return li.id==="width"
                            })

                            let li3=[...ul1.children].filter(li=>{
                                return li.id==="height"
                            })

                            let li4=[...ul2.children].filter(li=>{
                                return li.id==="height"
                            })

                            let width1=Number(li1[0].innerText)
                            let height1=Number(li3[0].innerText)
                            let width2=Number(li2[0].innerText)
                            let height2=Number(li4[0].innerText)


                            if (width1*height1< width2*height2) {
                                ul1.parentNode.insertBefore(ul2, ul1)
                            }
                        }
                    }
                    pagination(category,hushMapLayout,1)
                    document.querySelector('.active-page').innerText='1'

                    category.setAttribute('sortedBy','size')
                }
            })
            break;
        }default:{
        break
    }
    }

}

export default sortFunction
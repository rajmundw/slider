const newFetch = (categoryName,numberOfElements) => {
    const APP_ACCESS_KEY = 'cc4cb6824310e2d3a57aa7b814eeb94fe042ded52d96713010c3c0052a3d2dc2';
    const answer = fetch(`https://api.unsplash.com/search/photos?query=${categoryName}&per_page=${numberOfElements}&client_id=${APP_ACCESS_KEY}`)
        .then(resp => resp.json())
        .then(resp => {
            // array which has usefull object elements from api answer
            let usefullApiAnswer=[]

            // filter for each answer array element
            resp.results.forEach(object=>{

                // usefull object key name
                const usefullKeyNames = ['created_at','likes','height','width','urls'];

                // single usefull object
                let usefullObj={}
                Object.keys(object).filter((key)=>{
                    usefullKeyNames.forEach(element=>{
                        if(element===key){
                            usefullObj[key]=object[key]
                        }
                    })
                })

                // push single usefull object to objects array
                usefullApiAnswer.push(usefullObj)
            })
            return usefullApiAnswer
        })
        .catch(err => console.log(err))
    return answer
}

export default newFetch
document.addEventListener("DOMContentLoaded", function() {
    const rootButton = $('.root')
    const ul = $('#data')

    rootButton.click(() => { 
        // runtime 14ms
        requestRoot(); 
    }) 

    // rootButton.click(() => { 
    //     let rootRequest = axios.get('http://intro-ajax-api.herokuapp.com/')

    //     rootRequest.then(response => { 
    //         console.log(response)
            
    //         const data = JSON.stringify(response) 
    //         ul.append(`<li> ${data}</li>`)
    //         // rootRequest.then(response => { 
    //         //     for(let i =0; i <data.length; i++){
    //         //         ul.append(`<li> ${data}</li> `)
    //         //     }
                
    //         return data
        
    //         })
    //     });
         
        // rootRequest.then(response => { 
        // console.log(response)
        // rootRequest = JSON.stringify(response)
        // ul.append(rootRequest)
        // })
        // .done(responseData => { 
        //     for (let i = 0; i < response.data.length; i++){ 
        //         ul.append(i)
            
        //     }
    // }) 


     
    async function requestRoot() {
        // runtime 14ms 
        try { 
            let rootRequest = await axios.get('http://intro-ajax-api.herokuapp.com/')
            // const rootRequest = await axios.get('https://bb-election-api.herokuapp.com/')
            console.log(rootRequest)            
            rootRequest = JSON.stringify(rootRequest)
            rootButton.append(rootRequest)

        } catch (error){ 
            console.log(error)
        }
    }

});
 
// rootButton.click(() => { 
    // runtime 18ms 
    // const rootRequest = axios.get('http://intro-ajax-api.herokuapp.com/')
    // rootRequest.then(response => { 
    //     console.log(response)
    //     rootRequest = JSON.stringify(rootRequest)
    //     rootButton.append(rootRequest)
    //     }) 
    // }) 

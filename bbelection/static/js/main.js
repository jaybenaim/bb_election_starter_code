document.addEventListener("DOMContentLoaded", function() {
    const rootButton = document.querySelector('.root')
    const form = document.querySelector('#form') 

    const submitButton = document.querySelector('#data')

    console.log(submitButton)

    rootButton.addEventListener('click', () => { 
        requestRoot(); 
        console.log(form)

    }) 
    submitButton.addEventListener('click', event => { 
        event.preventDefault(); 
        console.log('ss')
        alert('hello')
    })

});



async function requestRoot() {
    const ul = document.querySelector('#data')
    const li = document.createElement('li')
    const form = document.createElement('form')
    const hiddenInput = document.createElement('input')
    const submitButton = document.createElement('input')
    
    try { 
        let rootRequest = await axios.get('https://bb-election-api.herokuapp.com/')
        console.log(rootRequest.data)            
        rootRequest = rootRequest.data.candidates
        rootRequest.forEach(candidate => { 
            name = candidate.name
            votes = candidate.votes
            ul.append(li)
            ul.append(form)
            form.append(hiddenInput)
            form.append(submitButton)
            li.innerHTML = `Name: ${name} | Votes: ${votes} `

            form.setAttribute("class", "form")
            form.setAttribute("action", "https://bb-election-api.herokuapp.com/vote")
            form.setAttribute("method", "POST")

            hiddenInput.setAttribute("type", "hidden") 
            hiddenInput.setAttribute("name", "id") 
            hiddenInput.setAttribute("value", candidate.id) 

            submitButton.setAttribute( "id", "submit-button") 
            submitButton.setAttribute( "type", "submit") 

        })
    } catch (error){ 
        console.log(error)
    }
}



// async function requestRoot() {
//     const ul = $('#data')
//     try { 
//         let rootRequest = await axios.get('https://bb-election-api.herokuapp.com/')
//         console.log(rootRequest.data)            
//         rootRequest = rootRequest.data.candidates
//         rootRequest.forEach(candidate => { 
//             name = candidate.name
//             votes = candidate.votes

//             ul.append("<li> Name: " + name + " | Votes: " + votes + "<form id='form' action='https://bb-election-api.herokuapp.com/vote' method='POST'><input type='hidden' name='id' value='"+candidate.id+"'><button id='submit-button' type='submit' > Vote </button> <form></li>")
//         })
//     } catch (error){ 
//         console.log(error)
//     }
// }

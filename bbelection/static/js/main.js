document.addEventListener("DOMContentLoaded", function() {
    const rootButton = document.querySelector('.root')
    const form = document.querySelector('#form') 

    const submitButton = document.querySelector('#data')

    console.log(submitButton)

    rootButton.addEventListener('click', () => { 
        requestRoot(); 
    }) 
    // submitButton.addEventListener('click', event => { 
    //     event.preventDefault(); 
    //     console.log(name)
    //     console.log('ss')
    //     alert('hello')
    // })

});

async function requestRoot() {
    const ul = document.querySelector('#data')
  
    const findLi = document.querySelectorAll('li')

    
    try { 
        let rootRequest = await axios.get('https://bb-election-api.herokuapp.com/')
        // console.log(rootRequest.data)            
        rootRequest = rootRequest.data.candidates
       
            console.log()
            const names = [] 
        for (let i = 0; i < rootRequest.length; i++){     
            const li = document.createElement('li')
            const form = document.createElement('form')
            const hiddenInput = document.createElement('input')
            const submitButton = document.createElement('input')    
            ul.append(li)
            ul.append(form)
            form.append(hiddenInput)
            form.append(submitButton)
            
            li.textContent = `Name: ${rootRequest[i].name} | Votes: ${rootRequest[i].votes} `
           
            form.setAttribute("class", "form")
            form.setAttribute("action", "https://bb-election-api.herokuapp.com/vote")
            form.setAttribute("method", "POST")

            hiddenInput.setAttribute("type", "hidden") 
            hiddenInput.setAttribute("name", "name") 
            hiddenInput.setAttribute("value", rootRequest[i].name) 
            submitButton.setAttribute( "id", "submit-button") 
            submitButton.setAttribute( "type", "submit") 
        }
        
        handleSubmit();
         
    } catch (error){ 
        console.log(error)
    }
}

const handleSubmit = () => {
 
    let form = document.querySelector('form')

    form.addEventListener('submit', event => { 
        event.preventDefault(); 
        name = event.target.querySelector('input[type=hidden]').value
            axios.post(form.action, { 
            name: name
        }, { headers: { 'X-Requested-With': 'XMLHttpRequest'}})
        .then(response => { 
            console.log(response.data)
        })
        .catch(error => { 
            console.log(error)
        })
    })

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
//         handleSubmit();
//     } catch (error){ 
//         console.log(error)
//     }
// }


// const requestRoot = () =>  {
//     const forms = document.querySelectorAll('form')

//     forms.forEach(form => { 
//         form.addEventListener('click', event => { 
//             e.preventDefault(); 
//             axios.get(link.href, { headers: { 'X-Requested-With':'XMLHttpRequest'}})
//             .then(response => { 
//                 let data = response.data 
//                 console.log(data)
//             })
//             handleSubmit();
             
//         })
//     })
  
// }


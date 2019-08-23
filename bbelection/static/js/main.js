document.addEventListener("DOMContentLoaded", function() {
    const rootButton = $('.root')

    rootButton.click(() => { 
        requestRoot(); 
    }) 

});


async function requestRoot() {
    const ul = $('#data')
    try { 
        let rootRequest = await axios.get('https://bb-election-api.herokuapp.com/')
        console.log(rootRequest.data)            
        rootRequest = rootRequest.data.candidates
        rootRequest.forEach(candidate => { 
            name = candidate.name
            votes = candidate.votes
            ul.append("<li> Name: " + name + " | Votes: " + votes + "</li>")
        })
    } catch (error){ 
        console.log(error)
    }
}


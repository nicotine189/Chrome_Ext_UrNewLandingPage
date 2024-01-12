let pElement = document.querySelector('#quote')
let pElement2 = document.querySelector('#author')

fetch('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote', {
   method: 'GET',
   headers: {
       'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com',
       'x-rapidapi-key': '206f104fffmshc6de8a557ccfe51p19404fjsn8b94a624014c'
   }
})
.then(response => response.json())
.then(data => {console.log(data)
   
    pElement.innerHTML = data.text
    pElement2.innerHTML = data.author


})





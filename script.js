let kartochki = document.querySelector('.kartochki')
kartochki.innerHTML = ''
let infoFetch = fetch('https://jsonplaceholder.typicode.com/users') 
    .then(Response => Response.json())
    .then(data => {

        data.forEach(element => {
            let divCard = document.createElement('div')
            divCard.classList.add('card')
            divCard.innerHTML = `
            

            <h2>${element.name}</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s" alt="">
                <p>${element.email}</p>
                <p>${element.address}</p>
            `
            kartochki.appendChild(divCard)
        });
    })


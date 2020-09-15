const apiUrl = 'https://reqres.in/api/users'
const userDisplayNode = document.getElementById('users')


const fetchUsers = async () => {
let data = await(await fetch(apiUrl)).json() //json tar in externa objeckt och gör om de till javascript object

return data 
}

document.addEventListener('DOMContentLoaded', () => {
    fetchUsers().then(response => {
        response.data.forEach(user => {
        let userDiv = document.createElement('div')
        let htm = `<h2> ${user.first_name} </h2>`
        userDiv.innerHTML = htm
        userDisplayNode.appendChild(userDiv)
    })
    })
}) // DOMContentLoaded är ett ecent som triggas igång när hela sidan är färdigladda i browsern
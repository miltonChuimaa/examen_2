const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    
    document.getElementById("uno").innerHTML ="BIENVENIDO " + username.value;
    const data = {
        username: username.value,

        password: password.value
    }

    console.log(data)
})
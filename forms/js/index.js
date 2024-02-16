console.log('Formularios')

const registerFormElement = document.querySelector('#register-form')

registerFormElement.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    console.log('Data del formulario', data)
})
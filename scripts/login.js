async function login() {
    const email = document.querySelector("#email").value
    const password = document.querySelector("#senha").value

    if(email === "" || password === "") {
        alert("Preencha todos os campos!")
        return
    }

    const user = {
        email,
        password
    }

    // const response = await fetch("https://projeto-genesync-backend.vercel.app/login", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ user })
    // }).then(response => response.json())

    const response = await fetch("https://projeto-genesync-backend.vercel.app/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    if(response.ok) {
        console.log(response)
        localStorage.setItem("token", response.token)
        localStorage.setItem("id", response.id)
        window.location.href = "../index.html"
        return
    }

    alert(response.message)
    window.location.reload()
}

const button = document.querySelector("#login-selector")
button.addEventListener("click", (event) => {
    event.preventDefault()
    login()
})
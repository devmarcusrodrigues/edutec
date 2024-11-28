 async function register(){
    const name = document.querySelector("#nome").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#senha").value
    const passwordConfirmation = document.querySelector("#senhaconfirmar").value

    if (name === "" || email === "" || password === "" || passwordConfirmation === ""){
        alert("Preencha todas as informações!")
        return
    }

    if (password !== passwordConfirmation){
        alert("As senhas não conferem, digite as senhas novamente!")
        document.querySelector("#senha").value = ""
        document.querySelector("#senhaconfirmar").value = ""
        return
    }

    const user = {
        name,
        email,
        password
    }

    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user
        })
    }).then(response => response.json());

    alert(response.message)

    if (response.userExists){
        window.location.reload()
        return
    }

    window.location.href("../pages/login.html")
}

const button = document.querySelector(".login-button")
button.addEventListener("click", (event) => {
    event.preventDefault();
    register();
    
})
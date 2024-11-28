export async function getName() {
    const token = localStorage.getItem("token")

    if(!token) {
        return
    }

    // const response = await fetch("https://projeto-genesync-backend.vercel.app/getname", {
    //     headers: {
    //         "Authorization": token
    //     }
    // }).then(response => response.json())

    // const nameP = document.querySelector(".username")
    // nameP.innerText = `${response.name}`
    // console.log(response)

    const response = await fetch("https://projeto-genesync-backend.vercel.app/getname", {
        headers: {
            "Authorization": token
        }
    }).then(response => response.json())

    const nameP = document.querySelector(".username")
    nameP.innerText = `${response.name}`
    console.log(response)
}
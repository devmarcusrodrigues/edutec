import { verifyToken } from "./verify.js";
import { getName } from "./get-name.js";
import { logout } from "./logout.js";


const url = "./login.html"
verifyToken(url)

getName()
document.addEventListener("DOMContentLoaded", async () => {
    try{
        const catchrank =  await fetch("https://projeto-genesync-backend.vercel.app/rank").then(response => response.json())
        console.log(catchrank.data)
    
        const table = document.querySelector("tbody")
        table.innerHTML = ''
        // catchrank.forEach((item, i) => {
        //     let counter = i+1
        //     const lines = `
        //         <tr>
        //             <td>${counter}</td>
        //             <td>${item.name}</td>
        //             <td>${item.fast}</td>
        //         </tr>
        //     `
        //     table.innerHTML += lines;
        // });

        for (let j = 0; j < catchrank.data.length; j++) {
            const lines = `
                <tr>
                    <td>${j + 1}</td>
                    <td>${catchrank.data[j].name}</td>
                    <td>${catchrank.data[j].fast}</td>
                </tr>
            `
            table.innerHTML += lines;
            
        }
    } catch(error){
        console.error("Erro desconhecido.", error)
    }
})
    

logout()

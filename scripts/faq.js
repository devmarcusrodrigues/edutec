import { verifyToken } from "./verify.js";
import { getName } from "./get-name.js";
import { logout } from "./logout.js";


const url = "./login.html"
verifyToken(url)

getName()
logout()
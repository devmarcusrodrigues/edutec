import { verifyToken } from "./scripts/verify.js";
import { getName } from "./scripts/get-name.js";
import { logout } from "./scripts/logout.js";


const url = "./pages/login.html"

verifyToken(url)

getName()
logout()
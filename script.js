import { verifyToken } from "./scripts/verify.js";
import { getName } from "./scripts/get-name.js";



const url = "./pages/login.html"

verifyToken(url)

getName()
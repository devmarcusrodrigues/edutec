function verifyToken() {
    const token = localStorage.getItem("token");

    if (!token){
        window.location.href = "../login.html"
    };

    // verificar se o token é válido
}

verifyToken()
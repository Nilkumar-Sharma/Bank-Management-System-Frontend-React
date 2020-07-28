class Authentication{
    logIn(paylaod) {
        if (paylaod.UserName == "admin" && paylaod.Password == "admin") {
            alert("Logged In");
        } else {
            alert("Invalid Crednetials")
        }

        
    }
}
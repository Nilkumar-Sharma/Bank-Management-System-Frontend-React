// class Authentication{
    const logIn=(paylaod)=>{
        if (paylaod.UserName == "admin" && paylaod.Password == "admin") {
            alert("Logged In");
        } else {
            alert("Invalid Crednetials")
        }

        
    }
// }

export { logIn };
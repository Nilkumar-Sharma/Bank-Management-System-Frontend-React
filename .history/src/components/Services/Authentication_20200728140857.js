// class Authentication{
    const logIn=(paylaod)=>{
        if (paylaod.UserName == "customer" && paylaod.Password == "customer") {
            alert("Logged In");
            localStorage.setItem("BMS", paylaod);
        } else {
            alert("Invalid Crednetials")
        }

        
    }
// }

export { logIn };
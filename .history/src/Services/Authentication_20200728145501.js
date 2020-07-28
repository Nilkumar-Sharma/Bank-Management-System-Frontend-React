    const logIn=(paylaod)=>{
        if (paylaod.UserName == "customer" && paylaod.Password == "customer") {
            alert("Logged In");
            localStorage.setItem("BMS", paylaod);
            return true;
        } else {
            alert("Invalid Crednetials")
            return false;
        }
}
const isLoggedInBefore = () => {
    return localStorage.getItem("BMS") !== null;
}
const register = () => {
    // TODO registraiton api call
    return true;
    }

export { logIn,isLoggedInBefore };
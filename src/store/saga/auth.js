import {yeild} from 'redux-saga'
function* authenticateUser(action) {
    // yield 
    try {
        if (action.UserName == "customer" && action.Password == "customer") {
            alert("Logged In from redux saga");
           // localStorage.setItem("BMS", action);
            yeild({ type: AUTH_SUCESS })
        } else {
            alert("Invalid Crednetials")
            // return false;
            yeild({ type: AUTH_FAILD })
        }
         
    } catch (error) {
        
     }
    
}
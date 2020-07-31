
// const 
export const required = (value) => (value.trim().length !== 0 ? true : "Required");
export const MinLength5 = (value) => (value.trim().length > 5 ? true : "Minimum Length is 5");
 
export const HOCrequired = (message) => {
    
    return (value) => (value.trim().length !== 0 ? true : message);
}

export const HOCisNumber = (message = "Valid Number is required") => {
    return (value) => 
        (!isNaN(value)?true: message)
}



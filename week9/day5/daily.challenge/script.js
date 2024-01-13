function allTruthy(...params) {
   
    return params.every(param => Boolean(param));
}

console.log(allTruthy(true, true, true));       
console.log(allTruthy(true, false, true));     
console.log(allTruthy(5, 4, 3, 2, 2, 0)); 
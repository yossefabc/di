// Exercise 1 : Comparison

// function compareToTen(num){
//    return new Promise((resolve, reject) => {
//         if(num<=10){
//             resolve(true)
//         }else{
//             reject(false)
//         }
//    })}
    
//        console.log( compareToTen(18));
     

    //    Exercise 2 : Promises


    // function delayedSuccess() {
    //     return new Promise((resolve) => {
    //       setTimeout(() => {
    //         resolve("success");
    //       }, 4000); 
    //     });
    //   }

    // delayedSuccess().then((result) => {
    //     console.log(result); 
    //   });



    //   Exercise 3 : Resolve & Reject
    const myPromise = Promise.resolve(3);
    const myreject = Promise.reject("booo");
    myPromise.then(result =>{
        console.log(result)
    })

   myreject.catch(error=>{
    console.log(error)
   }) 

   
   
    



// Exercise 1 : Giphy API

// function getdata(){
//     fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
//     .then((res) =>{
//         console.log(res);
//         if(res.ok){
//             return res.json();
//         }else{
//             console.log("an error has occured");
//         }
//     })
//     .then((data) =>{
//         console.log(data);
       
//     })
//     .catch((e) => console.log(e));
// }


// getdata()



// Exercise 2 : Giphy API


// function getgif(){
//     fetch("https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2")
//     .then((res)=>{
//         console.log(res)
//         if(res.ok){
//             return res.json();
//         }else{
//             console.log("an error occured")
//         }
        
//     })
//     .then((data)=>{
//         console.log(data);
//       console.log(data.data);
//     })
//     .catch((e) => console.log(e))
    
   
// }

// getgif()


// Exercise 3 : Async Function

// async function swapiasync(){
//    try{
//     const res = await fetch("https://www.swapi.tech/api/starships/9/");
//     if (res.ok) {
//             const data = await res.json();
//             console.log(data.result.properties)
            
//           } else {
//             console.log("error");
            
//           }
//         } catch(e){
//             console.log(e);
//         }    
// }
// swapiasync()


// Exercise 4: Analyze
//answer= calling and two second leter resolved,becouse the first function is in await method,
//so its wait untile other function done.
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
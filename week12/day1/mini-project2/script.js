const text = document.getElementById("text");

const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };


const getData= async () => {

    try{
        const randomNumGenerated = randomNumber(20);
      const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumGenerated}`)
      console.log(res)
      if(res.ok){
        const data= await res.json()
        console.log(data)
            
      }else{
        throw new Error("Failed to fetch data")
      }
    }catch(e){
      console.log(e)
    }
}
getData();


const showData = (obj) => {
    const { name, height, weight,type } = obj;
  
    const domName = document.createElement("h2");
    domName.innerText = `${name}`;
  
    const domHeight = document.createElement("p");
    domHeight.innerText = `Height: ${height}`;
  
    const domWeight = document.createElement("p");
    domWeight.innerText = `Weight: ${weight}`;
  
    const domType = document.createElement("p");
    domType.innerText = `Type: ${type}`;
  
  
  
    text.append(domName, domHeight, domWeight, domType);
  };

  showData(obj);
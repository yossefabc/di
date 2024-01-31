// Daily Challenge: Currency Converter


const from = document.getElementById("from")
console.log(from)
const to = document.getElementById("to")
const amount = document.getElementById("amount")
const sum = document.getElementById("sum")
const button= document.getElementById("convert")
button.addEventListener("click",handleclick)
function handleclick(){
    
    
}

handleclick()


const changecurrency= async()=>{
    try{
        const res= await fetch("  https://v6.exchangerate-api.com/v6/bbeece1c18ec160923458499/latest/USD")
        if(res.ok){
            const data= await res.json()
            console.log(data.conversion_rates
                );
            
        }
    }catch(e){
        console.log(e)
    }
}

changecurrency()
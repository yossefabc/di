const fromselect=document.getElementById("from");
const toselect=document.getElementById("to");




function fetchcurrency(){
    const url="https://v6.exchangerate-api.com/v6/bbeece1c18ec160923458499/latest/USD";
    fetch(url)
    .then((res)=>res.json())
    .then((res)=> dropdowen(res.conversion_rates))
    .catch((error)=> console.error(error));
}
fetchcurrency()
function dropdowen(rates){
console.log("rates",rates);
const entries=Object.entries(rates);

for(const entry of entries){

const[currency,rate]=entry;
const option=document.createElement("option");
option.innerHTML=currency;
option.value=rate;
document.getElementById("from").appendChild(option);

const option2=document.createElement("option");
option2.innerHTML=currency;
option2.value=1/rate;
document.getElementById("to").appendChild(option2);
}
}

document.getElementById("convert").addEventListener("click",handleclick);

async function handleclick(){
    const curr1=fromselect.value
    const curr2= toselect.value
    const url=`https://v6.exchangerate-api.com/v6/bbeece1c18ec160923458499/pair/${curr1}/${curr2}`
    try{
    const res = await fetch(url)
    const resJson = await res.json()
    console.log(resJson)
    }catch(e){
        console.log(e)
    }
}
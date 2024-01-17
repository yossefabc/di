document.querySelector("form").addEventListener("submit",handlesubmit);

function handlesubmit(e){
    e.preventDefault();
    const formData = new formData(document.querySelector("form"));
   
    console.log(e.target);
       const entries = formData.entries();
       const data=Object.fromEntries(entries);

       const datastring = JSON.stringify(data);
       const p = document.createElement("p");
       p.innerText= datastring;
       document.body.appendChild(p);

}


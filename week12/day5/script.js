const greeting= required("./greeting.js")


module.exports= greeting;


 


  function checkyear(year){
    return(year>2000 ? "You are in the 21st century":"You live in the Middle Age");
  }

  console.log(checkyear(2980));
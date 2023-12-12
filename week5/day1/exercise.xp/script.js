// Exercise 1 : Users

//1.
//2.
   //1. 
   const containerid=document.getElementById("container");
   console.log(containerid);
   //.2
   document.getElementsByClassName("list").textContent = "users";
//    document.getElementsByTagName("li")[1].innerHTML = "Richard"


//3.
    
const x = document.getElementById("sarah");
x.remove();
///4.
const y = document.querySelectorAll("ul>li");
for(let x of y){
    document.getElementsByTagName("li")[0].innerHTML = "yossef";
    document.getElementsByTagName("li")[2].innerHTML = "yossef";
}


// Exercise 2 : Users And Style
  // 2.
    //  1.
const div = document.getElementById("user");
div.style.backgroundColor= "lightblue";
div.style.padding= "10px";
     //2.
     const li = document.querySelector("li");
     li.remove()
     //3.
     const red = document.querySelector("li");
     red.style.border = "1px solid red";
     //4.
     const body = document.querySelector("body");
     body.style.fontSize = "50px";


    //  Exercise 3 : Change The Navbar

    //2.
    const div = document.querySelector("div");
    div.setAttribute("navbar","socialNetworkNavigation");
    //.3
       //1.2.3.4
       const list = document.createElement("li");
       list.innerText= "logout";
       document.body.appendChild(list);
    //4.

        let text = document.getElementsByName("profile").textContent;
        document.getElementById("navbar").innerHTML = text;


        // Exercise 4 : My Book List


        //2.1.3.
        const books = [
          {
            title: "Harry Potter 1",
            author: "JK ROWLING",
            image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
            alreadyRead: true,
          },
          {
            title: "Harry Potter 2",
            author: "JK ROWLING",
            image: "https://prodimage.images-bn.com/pimages/9780545139700_p0_v5_s1200x630.jpg",
            alreadyRead: false,
          },
        ];
        //4.
        const container = document.querySelector("#listBooks");
        const table = document.createElement("table");
        const headerRow = document.createElement("tr");
        const thTitle = document.createElement("th");
        const thAuthor = document.createElement("th");
        const thimage = document.createElement("th");
        thTitle.textContent = "Title";
        thAuthor.textContent = "Author";
        thimage.textContent = "Img";
        table.style.border = "1px solid";
        container.append(table);
        table.append(headerRow);
        headerRow.append(thTitle, thAuthor, thimage);
        
        for (let i = 0; i < books.length; i++) {
          console.log(books[i]);
          const tr = document.createElement("tr");
          const tdTitle = document.createElement("td");
          const tdAuthor = document.createElement("td");
          const tdImage = document.createElement("td");
          if (books[i].alreadyRead) {
            tdAuthor.style.color = "red";
            tdTitle.style.color = "red";
          }
          tdTitle.textContent = books[i].title;
          tdAuthor.textContent = books[i].author;
          tdImage.innerHTML = `<img src='${books[i].image}' width="100px"/>`;
          table.append(tr);
          tr.append(tdTitle, tdAuthor, tdImage);
        }
        
        let obj = {
          title: "harry potter",
        };
        
        console.log(obj.title);
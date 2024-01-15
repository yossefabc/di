//1.

class video{
constructor(title,uploader,time){
           this.title=title;
           this.uploader=uploader;
           this.time=time;
}

watch() {
   return `"${this.uploader} watched all ${this.time} of ${this.title}!"`
   
}

}

//3.4.

let video1= new video("luke cage","yossef","100 seconds");

let video2 = new video("spiderman","tom","300 seconds");

console.log(video1.watch())
console.log(video2.watch())

//5.

const arrvedios=[
    {
        uploader:"dani",
        time:"1 hour",
        title:"the 300"
    },
    {
        uploader:"avi",
        time:"2hour",
        title:"magic mike"
    },
    {
        uploader:"mike",
        time:"1.5 hour",
        title:"training day"
    },
    {
        uploader:"mola",
        time:"3 hour",
        title:"spartans"
    },
    {
        uploader:"lior",
        time:"5 hour",
        title:"spiderman"
    }
]

const videos=arrvedios.map(
    (arrvedios) => new video(arrvedios.title,arrvedios.uploader,arrvedios.time)
)
console.log(videos)

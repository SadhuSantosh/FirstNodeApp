const fs=require("fs");
const [,,name]=process.argv;
fs.readFile("./message.txt","utf-8",(error,data)=>{
    if(error){
        console.error(error);
    }
  console.log(data+name);
});
const data=`Hello ${name} !!`
fs.writeFile("./name.txt", data,(error)=>{
    console.log("New file created succesfully!!")
});
fs.appendFile("./append.txt",name+"\n",(error)=>{
    console.log("finished appending!!");
});


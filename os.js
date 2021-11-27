const os= require("os"); //inbuilt package
console.log("The free memory",os.freemem());
console.log("The total memory",os.totalmem());
console.log("The version",os.version());
console.log(os.uptime(),os.userInfo(),os.release(),os.cpus());
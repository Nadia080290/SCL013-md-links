
const chalk = require("chalk");
const mdLinks = require("./md4.js");

export const start = (process_argv) => {
//variable global
let path = process_argv[2];
let options = {
  stats: false,
  validate: false,
}
 process_argv.forEach(val =>{  //option
 if( val == "--stats" || val == "-s"){
   options.stats = true
 }
if(val == "--validate" || val == "-v"){
  options.validate = true
}
})


mdLinks.mdLinks(path,options).then(res=>{
  if(options.validate){
    if(res.length === 0){
      return console.log(chalk.red("No se encontraron links"))
    }
    let validateLinks = res.map(x=>x.file+"  "+ chalk.yellow(x.text.substr(0,40))+ " " + chalk.blue(x.href) +"  "+ chalk.bgGreen(x.status) + " "+ chalk.bgMagenta(x.statusCode))
    return console.log(validateLinks.join("\n "))
  }
  if(options.stats){
    return console.log(chalk.bgBlue("Total Links: "+ res.total)+"\n"+chalk.bgGreen("Unique Links: "+res.unique))
  }else{
    if(res.length === 0){
      return console.log(chalk.red("No se encontraron links"))
    }
  }
  }).catch(err=>{
    console.log(chalk.red(err.message))
  });
};

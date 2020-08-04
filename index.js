const chalk = require("chalk");
const mdLinks = require("./md-4.js");
//variable global
let path = process.argv[2];
let options = {
  stats: false,
  validate: false,
}
 process.argv.forEach(val =>{  //option
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
    }else{
      let validateLinks = res.map(x=>x.file+"  "+ chalk.yellow(x.text.substr(0,40))+ " " + chalk.blue(x.href) +"  "+ chalk.bgGreen(x.status) + " "+ chalk.bgMagenta(x.statusCode))
      return console.log(validateLinks.join("\n "))
    }
  }else if(options.stats){
    return console.log(chalk.bgBlue("Total Links: "+ res.total)+"\n"+chalk.bgGreen("Unique Links: "+res.unique))
  }else{
    if(options.validate && options.stats){
      return console.log(chalk.bgBlue("Total Links: " + res.total) + "\n" + chalk.bgGreen("Ok Links: " + res.ok) + "\n" + chalk.bgRed("Broken Links: " + res.broken))
    }else{
      if(res.length === 0){
        return console.log(chalk.red("No se encontraron links"))
      }else{
        const resLinks = res.map(element => element.file + "  " + chalk.yellowBright(element.href) + "  " + chalk.cyanBright(element.text.substr(0,50)))
        return console.log(resLinks.join("\n "))
      }
  }
  }
  }).catch(err=>{
    console.log(chalk.red(err.message))
  });
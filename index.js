#!/usr/bin/env node
const chalk = require("chalk");
const mdLinks = require("./md-links.js");
const pathN = require('path')
//variable global
let path = process.argv[2]
 // path.resolve para convertir en absoluta
path = pathN.resolve(path);
 // path.normalize para normalizar el path en caso se que hayan errores de semántica
path = pathN.normalize(path);

let options = {
  stats: false,
  validate: false,
}

process.argv.forEach(element =>{
 if( element == "--stats" || element == "--s" ){
   options.stats = true
 }
if(element == "--validate" || element == "--v"){
  options.validate = true
}
})



mdLinks.mdLinks(path,options).then(res => {
  if(options.validate && options.stats){
    return console.log(
      `

    ${chalk.bgBlue("Total Links: " + res.total)}
    ${ "\n" + chalk.bgGreen("Ok Links: " + res.ok)}
    ${ "\n" + chalk.bgRed("Broken Links: " + res.broken)}`)
  }
  if(options.validate){
    if(res.length === 0){
      return console.log(chalk.red("No se encontraron links"))
    }
    let validateLinks = res.map(element => (

      `
      ${chalk.rgb(154, 190, 190, 1).bold("File: " + element.file)}
      ${chalk.rgb(168, 187, 77, 1).bold("Href: " + element.href)}
      ${chalk.rgb(255, 182, 193, 1).bold("Text: " + element.text.substr(0,50))}
      ${chalk.rgb(248, 110, 135, 1).bold("Status: " + element.status)}
      ${chalk.rgb(245, 37, 59, 1).bold("Status Code: " + element.statusCode)}`))

    return console.log(validateLinks.join("\n "))
  }
  if(options.stats){
    return console.log(
      `
    ${chalk.rgb(248, 110, 135, 1).bold("Total Links: "+ res.total) }
    ${chalk.rgb(245, 37, 59, 1).bold("Unique Links: "+res.unique)}`)

  }else{
    if(res.length === 0){
      return console.log(chalk.red("No se encontraron links"))
    }
    const resLinks = res.map(element => (

      `
       ${chalk.rgb(154, 190, 190, 1).bold("File: " + element.file)}
       ${chalk.rgb(168, 187, 77, 1).bold("Href: " + element.href)}
       ${chalk.rgb(255, 182, 193, 1).bold("Text: "+ element.text.substr(0,50))}`))
    return console.log(resLinks.join("\n "))
  }
}).catch(err => {
  console.log(chalk.red(err.message))
});

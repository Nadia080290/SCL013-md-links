#!/usr/bin/env node

const fs = require('fs');
let path= require('path')
const mdLinks = require ('./prueba3')
const chalk = require('chalk')

//RUTA DEL ARCHIVO MD
let pathUser= process.argv[2];


let pathFile = path.resolve(pathUser)

function fileOrDirectory(command) {
fs.lstat(command, (err, stats) => {
      if(err){
        console.log(chalk.inverse.red('Ingresa archivo o directorio valido'));
      } else if (stats.isDirectory()){
      mdLinks.readUserDirectory(pathFile)
} else if (path.extname(pathUser) !== ".md") {
 console.log(chalk.inverse.red('No es un archivo extension md.'))
      }else{
     mdLinks.readUserFile(pathFile)
       .then(res=> {
         console.log(res)
       }).catch(err=> {
       console.log(err)
       })
     }
      })
    }




function mdLinkss(path){
  Promise.resolve(fileOrDirectory(path))
}
mdLinkss(pathFile)

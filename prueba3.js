"use strict"

const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
const fetch= require('node-fetch');
const chalk = require('chalk')


function readUserFile(pathUser){
return new Promise((resolve,reject)=> {
  fs.readFile(pathUser , 'utf8' , (error,data)=> {
    if (error){
      reject(error)
    }else {
      let links = []
      const renderer = new marked.Renderer();
      renderer.link = function (href, title, text){
      links.push({
      href:href,
     text:text,
     file:pathUser


  })
}
marked(data,{renderer:renderer});
resolve(links);
readStats(links);
validateUrl(links)
    }
  })
})
};

 function readUserDirectory(path){
  FileHound.create()
  .discard("node_modules")
  .paths(path)
  .ext('md')
  .find()
 .then(files =>{
files.forEach(file =>
  readUserFile(file)
    .then(res => {
      console.log(res)
    }).catch (error =>{
      console.log(error.message)
    })
  )
})
};

function validateUrl(url){
  if (process.argv[3]==='--validate'||process.argv[3]==='--v')
  url.forEach(function (element) {
              fetch(element.href).then((res)=>{
                  console.log(chalk.green(res.url) , chalk.cyan(res.statusText),chalk.yellow(res.status));
              })
              .catch (error =>{
                  console.log(error.message)
              })
           })
          }

  function readStats(url){
    return new Promise ((resolve,reject)=> {
    if (process.argv[3]==='--s'||process.argv[3]==='--stats'||process.argv[4]==='--stats'||process.argv[4]==='--s'){
        let totalLinks =0
        let unique=0
        let linksLength = url.map(element=> element.href);
        totalLinks= linksLength.length;
         unique = [...new Set(linksLength)].length;
         console.log(`Links Unicos: ${chalk.gray(unique)} ||  Links Totales ${chalk.gray(totalLinks)}`)
           }
          })
        }


          module.exports.readStats=readStats
           module.exports.validateUrl=validateUrl
           module.exports.readUserFile=readUserFile
           module.exports.readUserDirectory=readUserDirectory

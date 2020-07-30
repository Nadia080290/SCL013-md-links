const fs = require ('fs');
const Marked = require ('marked');
//const fetch = require('fetch');
const pathN = require('path')
const process = require('process');
const chalk = require('chalk');


let path = process.argv[2]
path = pathN.resolve(path);
console.log("mi ruta es: " + path)


//lee archivo md
const reaArcMd = (path => {
  return new Promise(( resolve,reject) =>{
    fs.readFile(path,'utf8', (err,data)=>{
      if (err){
        reject(console.log("!Ouch¡ nose a encontrado este archivo: " + path))
      }
      resolve(data)
      //console.log(data);
    })

  })

});
const filtLinks = (links) => {
  return links.filter((link) => {
      const prefix = link.href.substring(0, 4);
      if (prefix == 'http') {
          return true;
      } else {
          return false;
      }
  })
}
//obtiene links del archivo md
const getLinks = (path) => {
    return new Promise ((resolve,reject)=>{
      reaArcMd(path).then(res =>{
      let links = [];

      const renderer = new Marked.Renderer();
      renderer.link = function(href, title, text){
          links.push({
            //
            href:href,
            //
            text:text,
            //
            path: path})
        }

        Marked(res,{renderer:renderer})
        resolve(links)
        links = filtLinks(links);
        links.map(element =>{console.log(`
${chalk.green("href: "+element.href)}
${chalk.yellow("text :"+element.text)}
${chalk.magenta("path :"+element.path)}
        `)});

          })
          .catch(err =>{
            reject(err)

          })
        })
    }
    getLinks(path)

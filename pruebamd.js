#!/usr/bin/env
"use strict" // buscar tambien
//fetch package
const fetch = require("node-fetch");
const FileHound = require('filehound');

const fs = require("fs");
var markdownLinkExtractor = require('markdown-link-extractor');
const pathn = require('path'); // pasra que me reconozca la ruta absoluta

const path= process.argv[2]
//filehound busca en la carpeta
const files = FileHound.create()
.discard("node_modules")
  .paths(path)
  .ext('md')
  .find();

// recorre los .md
files.then(res=>{
  res.forEach(function (fileAll) {

//markdown imprime toooooodoo los .md
fs.readFile(fileAll, (err, data) => {
  if (err) throw err;
  processMarkdown(data.toString());

});

function processMarkdown(filecontent) {
  //links lee los links dentro de los archivos
  let links = markdownLinkExtractor(filecontent);
  // let validLinks = 0;
  // let invalidLinks = 0;

if (links.length){

  links.forEach(function (link) {
    fetch(link)
    .then(res => {

      if (res.ok) {
        console.log("This link is Working" +"  " +res.url );
        // validLinks += 1;
      }
    })
    .catch(error => {
      console.log("Error catched FIX ME! "+ error.message );
      // validLinks -= 1;
      // invalidLinks += 1;
    });
});

}else{
  console.log("There are no links");
  }
  // lee cada link de readme


  console.log("From total links " + links.length )//+ , valid are ' + validLinks + ' and invalid ' + invalidLinks
}

});
});

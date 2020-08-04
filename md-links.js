#!/usr/bin/env node
const fs = require ('fs');
const Marked = require ('marked');
const fetch = require('node-fetch');


const mdLinks = ( path, choose) => {
  return new Promise((resolve, reject) => {
    if (choose.stats) {
      getLinks(path)
        .then(link => {
          resolve(stats(link))

        })
    } if (choose.validate) {
      getLinks(path)

        .then(link => {
          validate(link)
            .then(validateLinks => {
              resolve(validateLinks)
            })
        })
    } else {
      getLinks(path)
        .then(getLinks => {
          resolve(getLinks)
        })
    }
  })
}


//lee archivo md
const reaArcMd = (files => {
  return new Promise(( resolve,reject) =>{
    fs.readFile(files,'utf8', (err,data)=>{
      if (err){
        reject(console.log("!Ouch¡ nose a encontrado este archivo: " + files))
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
      reaArcMd(path).then(data =>{
      let links = [];

      const renderer = new Marked.Renderer();
      renderer.link = function(href, title, text){
          links.push({
            //
            href:href,
            //
            text:text,
            //
            file: path})
        }

        Marked(data,{renderer:renderer})

        resolve(filtLinks(links))


          })
          .catch(err =>{
            reject(err)

          })
        })
    }
    //getLinks(path)

    const validate = (link) =>{
      return new Promise((resolve, reject) => {
          let fetchLinks = link.map(v=>{
            return fetch(v.href).then(res =>{
                v.status=res.statusText;
                v.statusCode = res.status;

              }).catch((err)=>{
                v.status = err
              })
          })
          Promise.all(fetchLinks).then(res=>{
            resolve(link)
          })
        })
    }

    const stats = (link) => {
      let href = link.map(s => s.href);
      const uniqueLinks = new Set(href);
      return {
        total: link.length,
        unique: uniqueLinks.size
      };
    };

    module.exports = { mdLinks,getLinks,  validate, stats}

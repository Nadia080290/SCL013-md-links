const fileHound = require('filehound');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

const files = (path) => {
      return new Promise((resolve,reject) => {
      fileHound.create()
      .paths(path)
      .ext('md')
      .find()
      .then(filesMd => {
        console.log("Archivos MD encontrados: ", filesMd);
        if(filesMd.length != 0){
        resolve(filesMd)}
        else {(console.log("No se encontraron archivos .md dentro de " + path))}
      })
      .catch(err => {
      reject(new Error("Ruta no es válida"))
      })
    })
};
const mdLinks = ( path, choose) => {
  return new Promise((resolve, reject) => {
    if (choose.stats) {
      extraxtionLinks(path)
        .then(link => {
          resolve(statsLinks(link))
        })
    } if (choose.validate) {
      extraxtionLinks(path)
        .then(link => {
          validateLinks(link)
            .then(validateLinks => {
              resolve(validateLinks)
            })
        })
    } else {
      extraxtionLinks(path)
        .then(extraxtionLinks => {
          resolve(extraxtionLinks)
        })
    }
  })
}
const extraxtionLinks = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      }
      let links = [];
      const renderer = new marked.Renderer();
      renderer.link = function (href, title, text) {
        links.push({
          href: href,

          text: text,
          file: path
        })
      }
      marked(data, { renderer: renderer
      })
      resolve(links)
    });
  })
};
const validateLinks = (link) =>{
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

const statsLinks = (link) => {
  let href = link.map(s => s.href);
  const uniqueLinks = new Set(href);
  return {
    total: link.length,
    unique: uniqueLinks.size
  };
};

module.exports = {  files,mdLinks,extraxtionLinks,  validateLinks, statsLinks}

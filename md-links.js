#!/usr/bin/env node
const fs = require("fs");
const Marked = require("marked");
const fetch = require("node-fetch");

const mdLinks = (path, options) => {
  return new Promise((resolve) => {
    if (options.stats === true && options.validate === false) {
      getLinks(path).then((link) => {
        resolve(stats(link));
      });
    } else if (options.validate === true && options.stats === false) {
      getLinks(path).then((link) => {
        validate(link).then((validate) => {
          resolve(validate);
        });
      });
    } else if (options.stats === true && options.validate === true) {
      getLinks(path).then((link) => {
        statsAndValidate(link).then((statsAndValidate) => {
          resolve(statsAndValidate);
        });
      });
    } else {
      getLinks(path).then((getLinks) => {
        resolve(getLinks);
      });
    }
  });
};

//lee archivo md
const reaArcMd = (files) => {
  return new Promise((resolve, reject) => {
    fs.readFile(files, "utf8", (err, data) => {
      if (err) {
        reject(console.log("Archivo no encontrado" + files));
      }
      resolve(data);
      //console.log(data);
    });
  });
};

const filtLinks = (links) => {
  return links.filter((link) => {
    const prefix = link.href.substring(0, 4);
    if (prefix == "http") {
      return true;
    } else {
      return false;
    }
  });
};
//obtiene links del archivo md
const getLinks = (path) => {
  return new Promise((resolve, reject) => {
    reaArcMd(path)
      .then((data) => {
        let links = [];

        const renderer = new Marked.Renderer();
        renderer.link = function (href, title, text) {
          links.push({
            //
            href: href,
            //
            text: text,
            //
            file: path,
          });
        };

        Marked(data, { renderer: renderer });

        resolve(filtLinks(links));
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//getLinks(path)

const validate = (link) => {
  return new Promise((resolve) => {
    let fetchLinks = link.map((v) => {
      return fetch(v.href)
        .then((res) => {
          if (res.status > 299) {
            v.status = "Fail";
            v.statusCode = res.status;
          } else {
            v.status = "Ok";
            v.statusCode = res.status;
          }
        })
        .catch((err) => {
          v.status = err;
        });
    });
    Promise.all(fetchLinks).then(() => {
      resolve(link);
    });
  });
};

const stats = (link) => {
  let href = link.map((s) => s.href);
  const uniqueLinks = new Set(href);
  return {
    total: link.length,
    unique: uniqueLinks.size,
  };
};

const statsAndValidate = (links) => {
  return new Promise((resolve, reject) => {
    validate(links)
      .then((links) => {
        const statusLinks = links.map((element) => element.status);
        const totalLinks = links.length;

        let okLinks = statusLinks.toString().match(/Ok/g);
        if (okLinks !== null) {
          okLinks = okLinks.length;
        } else {
          okLinks = 0;
        }
        let brokenLinks = statusLinks.toString().match(/Fail/g);
        if (brokenLinks !== null) {
          brokenLinks = brokenLinks.length;
        } else {
          brokenLinks = 0;
        }
        resolve({
          total: totalLinks,
          ok: okLinks,
          broken: brokenLinks,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  mdLinks,
  getLinks,
  validate,
  stats,
};

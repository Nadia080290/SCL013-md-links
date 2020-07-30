// FUNCION VALIDACION
/*const validateLinks=(links)=>{
  return Promise.all( links.map(validationLinks=>{
      return new Promise((resolve)=>{
            fetch(validationLinks.href)
             .then(res=>{
               validationLinks.status=res.status
               validationLinks.statusText=res.statusText
               resolve(validationLinks)
             })
             .catch((err)=> {
              validationLinks.status=0;
               validationLinks.textStatus=err.code;
               resolve(validationLinks);
           })
      })
   }))
 }
 //FUNCION STATS
 const stats = (links)=>{
   let href = [];
   let response = {};
   href = links.map(res=>{
       return res.href;
   });
   response.linksTotal=href.length;
   let hrefSet= new Set(href);
   response.linksUnique=hrefSet.size;
 return response
 }
 module.exports={

  validateLinks,
  stats
}*/

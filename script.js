import structure from './structure.json' assert { type: 'json' };

console.log(structure)

let data = [...structure.sliders, ...structure.sliders]
console.log('this is data',data)

for(let i = 0; i < data.length; i++){
    document.getElementById("slide-track").innerHTML += `<div class="slide slide-${i}"><img src="${data[i]}" alt=""></div>`
}

let data2 = data.sort()

for(let i = 0; i < data2.length; i++){
    document.getElementById("slide-track-2").innerHTML += `<div class="slide slide-${i}"><img src="${data2[i]}" alt=""></div>`
}

let logo = document.querySelector('.content-top')
let references = document.querySelector('.references')
let pages = document.querySelector('.pages')
let socialMedia = document.querySelector('.social-media')
let copyRight = document.querySelector('.copyright-content')

if(logo) {
  console.log('logo', logo)
  logo.innerHTML += `<img src="${structure.logo}" class="logo" alt="LOGO">`
}

if(references) {
  console.log('references', references)
  for(let i = 0; i < structure.references.length; i++){
    references.innerHTML += `<div class="reference"><a href="${structure.references[i].url}" target="_blank" class="reference-media"><img src="${structure.references[i].media}" alt="" class="reference-img"></div></div>`
  }
}
if(pages) {
  console.log('pages', pages)
  for(let i = 0; i < structure.pages.length; i++){
    pages.innerHTML += `<div class="page-wrap m-auto"><div class="pages-title"><h3 class="font-weight-bold">${structure.pages[i].title}</h3></div><div class="pages-content "><h5 class="font-weight-light">${structure.pages[i].content}</h5></div></div>`
  }
}
if(socialMedia) {
  console.log('socialMedia', socialMedia)
  for(let i = 0; i < structure.socialMedia.length; i++){
    socialMedia.innerHTML += `<a class="social-media-anchor" href="${structure.socialMedia[i].address}" target="_blank"><img class="icon" src="./assets/icons/${structure.socialMedia[i].type}.png" ></img></a>`
  }
}
if(copyRight) {
  console.log('socialMedia', copyRight)
  copyRight.innerHTML += `<div class="copyright-text">${structure.copyright}</div>`
}


// pages.innerHTML += `<div class="page page-1">${}</div>`



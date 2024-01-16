import  { aloeVera, prayer, photos } from './plants.js';

console.log(aloeVera)

let links = document.querySelectorAll('a')
let titleElement = document.getElementById('title')
let subtitleElement = document.getElementById('subtitle')
let textContentElement = document.getElementById('text_content')


console.log(links);

links.forEach( function(link) {
  link.addEventListener('click', function () {
       
      
    links.forEach( function(link) {
      link.classList.remove('active');  
    });
    
    this.classList.add('active')

    let content = getContent(this.textContent)

    titleElement.innerHTML = content.title
    subtitleElement.innerHTML = content.subtitle
    textContentElement.innerHTML = content.text_content

    let imgElement = document.createElement('img');
    imgElement.src = content.image;
    document.querySelector('.container').appendChild(imgElement);


  });
});


function getContent(link) {

    let content = {
      'Aloe Vera': aloeVera,
      'Prayer': prayer,
      'Photos': photos
    };
  
    return content[link];
}
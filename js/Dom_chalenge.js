// let pageHeader = document.createElement('header');
// let pageHeaderH = document.createElement('h3')
// let pageHeaderText = document.createTextNode("Scorpion");
// let navHeader = document.createElement('ul');
// let list1 = document.createElement('li');
// let list2 = document.createElement('li');
// let list3 = document.createElement('li');
// let list1text = document.createTextNode('list 1');
// let list2text = document.createTextNode('list 2');
// let list3text = document.createTextNode('list 3');

// document.body.appendChild(pageHeader);
// pageHeaderH.appendChild(pageHeaderText);
// pageHeader.appendChild(pageHeaderH)
// pageHeader.appendChild(navHeader);
// navHeader.appendChild(list1);
// list1.appendChild(list1text);
// navHeader.appendChild(list2);
// list2.appendChild(list2text);
// navHeader.appendChild(list3);
// list3.appendChild(list3text);
// // pageHeader.style.setProperty("display", "flex");
// // navHeader.style.setProperty("display", "flex" , "justify-content", "space-between");
// pageHeader.style.cssText = "display: flex; justify-content: space-between; margin: 20px;align-items: center;" ;
// navHeader.style.cssText = "display: flex; justify-content: space-between; margin: 20px;align-items: center;" ;

// DOM Challenge

// Creating Header

let header = document.createElement('header')
let logoDiv = document.createElement('div')
let logo = document.createElement('a')
let ul = document.createElement('ul')
let li1 = document.createElement('li')
let li2 = document.createElement('li')
let li3 = document.createElement('li')
let li4 = document.createElement('li')
let a1 = document.createElement('a')
let a2 = document.createElement('a')
let a3 = document.createElement('a')
let a4 = document.createElement('a')

let logotext = document.createTextNode('Elzero')
let text1 = document.createTextNode('Home')
let text2 = document.createTextNode('About')
let text3 = document.createTextNode('Service')
let text4 = document.createTextNode('Contact')

// Appending Elements Into The Header

document.body.appendChild(header)
header.appendChild(logoDiv)
header.appendChild(ul)
logoDiv.appendChild(logo)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
li1.appendChild(a1)
li2.appendChild(a2)
li3.appendChild(a3)
li4.appendChild(a4)
logo.appendChild(logotext)
a1.appendChild(text1)
a2.appendChild(text2)
a3.appendChild(text3)
a4.appendChild(text4)

// Styling Header

document.body.style.cssText = 'font-family: arial'
header.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px'
logo.style.cssText = 'color: green; font-weight: 700; font-size: 25px '
ul.style.cssText = 'display: flex; align-items:center;'
li1.style.cssText = 'list-style: none'
li2.style.cssText = 'list-style: none'
li3.style.cssText = 'list-style: none'
li4.style.cssText = 'list-style: none'
a1.style.cssText = 'color: gray; padding: 10px; cursor: pointer; margin-right: 10px'
a2.style.cssText = 'color: gray; padding: 10px; cursor: pointer; margin-right: 10px'
a3.style.cssText = 'color: gray; padding: 10px; cursor: pointer; margin-right: 10px'
a4.style.cssText = 'color: gray; padding: 10px; cursor: pointer; margin-right: 10px'

// Creating Content

let Content = document.createElement('div')
Content.className = 'content'
header.after(Content)
for(let i = 1; i <  16; i++){
  let product = document.createElement('div')
  let span = document.createElement('span')
  span.textContent = i
  let product_text = document.createTextNode('Product')
  product.className = 'product'

  // Appending Elmenets
  Content.append(product)
  product.prepend(span)
  product.append(product_text)

  // Styling Content
  Content.style.cssText = 'display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; background-color: #f1f1f1; padding: 20px'
  product.style.cssText = 'background-color: white; display: flex; flex-direction: column; text-align: center; padding: 20px; border: 2px solid balck; border-radius: 5px; color: gray; font-size: 14px '
  span.style.cssText = 'font-size: 30px; color: black; margin-bottom: 10px'
  // product.lastChild.style.fontSize = '14px'
}

//  Footer Section

// Creating Footer

let footer = document.createElement('footer')
footer.textContent = "Copyright 2021"

// Styling Footer
  
footer.style.cssText = 'font-size: 25px; background-color: green; text-align: center; color: white; padding: 20px '

Content.after(footer)
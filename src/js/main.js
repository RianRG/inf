console.log('Inf-101')

const menu = document.querySelector('.hamburger');
const ul = document.querySelector('ul')
menu.addEventListener('click', () =>{
  ul.classList.toggle('active')
  menu.classList.toggle('active')
})

const removeMenuClass = () =>{
  ul.classList.remove('active');
  menu.classList.remove('active')
}
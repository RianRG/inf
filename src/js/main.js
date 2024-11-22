console.log('Inf-101')

const menu = document.querySelector('.hamburger');
const ul = document.querySelector('ul')
const h1 = document.querySelector('#home h1');

menu.addEventListener('click', () =>{
  ul.classList.toggle('active');
  menu.classList.toggle('active');
})

const removeMenuClass = () =>{
  ul.classList.remove('active');
  menu.classList.remove('active');
}

const macchine = (text) =>{
  const letters = text.innerHTML.split('');
  text.innerHTML='';

  letters.forEach((cont, k) =>{
    setTimeout(letter =>{
      h1.innerHTML+=cont;
    }, 120*k);
  })
}

macchine(h1);
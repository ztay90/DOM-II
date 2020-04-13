const navLink = document.querySelectorAll('.nav-link')

navLink.forEach((element) => {
  element.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
  })
})

const logoHeading = document.querySelector('.logo-heading')

logoHeading.addEventListener('click', (event) => {
  event.target.style.fontSize = '5rem';
})

const adventureImg = document.querySelectorAll('.img-content img')

adventureImg.forEach((element) => {
  element.addEventListener('mouseenter', (event) => {
      event.target.style.transform = 'scale(1.1)';
      event.target.style.transition = 'transform 1s';
    })
    element.addEventListener('mouseleave', (event) => {
      event.target.style.transform = 'scale(1)';
    })
})

const welcomeH2 = document.querySelector('h2')

welcomeH2.addEventListener('dblclick', (event) => {
  event.target.style.backgroundColor = 'red';
})

const letsGo = document.querySelector('.content-section h2')

letsGo.addEventListener('mouseup', (event) => {
  event.target.style.color = 'green';
})

const destinationH4 = document.querySelectorAll('h4')

destinationH4.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.stopPropagation();
    event.target.style.color = 'lightblue';
    event.target.style.backgroundColor = 'gray'
  })
})

const button = document.querySelectorAll('.btn')

button.forEach((element) => {
  element.addEventListener('click', (event) => {
    alert("Sorry Sign Up page is currently down");
  })
})

const funBusImg = document.querySelector('.home img')

funBusImg.addEventListener('mouseover', (event) => {
  event.target.style.transform = 'scale(1.1)';
  event.target.style.transition = 'transform 1s';
})
funBusImg.addEventListener('mouseout', (event) => {
  event.target.style.transform = 'scale(1)';
})

// STOP PROPAGATION CODE
const destinationBox = document.querySelectorAll('.destination')

destinationBox.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'slategray';
  })
})

// PREVENT DEFAULT
const homeLink = document.querySelector('.nav-link')

homeLink.addEventListener('click', (event) => {
  event.preventDefault();
})
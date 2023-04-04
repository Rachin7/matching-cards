const cardsContainer = document.querySelector('.container')
let cards = [
  {
    name: 'c07',
    img: 'images/clubs/clubs-r07.svg'
  },
  {
    name: 'cA',
    img: 'images/clubs/clubs-A.svg'
  },
  {
    name: 'dA',
    img: 'images/diamonds/diamonds-A.svg'
  },
  {
    name: 'dK',
    img: 'images/diamonds/diamonds-K.svg'
  },
  {
    name: 's02',
    img: 'images/spades/spades-r02.svg'
  },
  {
    name: 'h10',
    img: 'images/hearts/hearts-r10.svg'
  },
  {
    name: 'h03',
    img: 'images/hearts/hearts-r03.svg'
  },
  {
    name: 's08',
    img: 'images/spades/spades-r08.svg'
  },
]
const cardsPicklist = [...cards, ...cards]
const blockNum = cardsPicklist.length

let revealedNum = 0
let firstSelection = null
let secondSelection = false

function handleClick(evt) {
  let cardImg = evt.target.getAttribute('data-card')
  evt.target.style.backgroundImage = 'url('+ cardImg +')'
  evt.target.style.backgroundSize = 'cover'

  
  // console.log(evt)

}



init()

function buildBlock(card) {
  const element = document.createElement('div')
  element.classList.add('block')
  element.setAttribute('data-card', card.img)

  return element
}


function init() {
  for (let i = 0; i < blockNum; i++) {
    let randomIndx = Math.floor(Math.random() * cardsPicklist.length)
    let card = cardsPicklist[randomIndx]
    const block = buildBlock(card)

    cardsPicklist.splice(randomIndx, 1)
    cardsContainer.appendChild(block)
    block.addEventListener('click', handleClick)
  }
}

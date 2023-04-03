const cardsContainer = document.querySelector('.container')
let cards = ["c07", "dA", "cA", "dK", "s02", "h10", "h03", "s08"]
const cardsPicklist = [...cards, ...cards]
const blockNum = cardsPicklist.length

let revealedNum = 0
let activeBlock = null
let awaitingMovement = false

function buildBlock(card) {
  const element = document.createElement('div')
  element.classList.add('block')
  element.setAttribute('data-card', card)
  return element
}

for (let i = 0; i < blockNum; i++) {
  let randomIndx = Math.floor(Math.random() * cardsPicklist.length)
  let card = cardsPicklist[randomIndx]

  cardsPicklist.splice(randomIndx, 1)
  console.log(card)
}
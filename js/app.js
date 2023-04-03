const cardsContainer = document.querySelector('.container')
let cards = ["c07", "dA", "cA", "dK", "s02", "h10", "h03", "s08"]
const cardsPicklist = [...cards, ...cards]
const blockNum = cardsPicklist.length

let revealedNum = 0
let activeBlock = null
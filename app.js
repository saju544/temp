const an = document.createAttribute('name')

const box = document.querySelector('.box')

an.value = 'hi'

box.setAttributeNode(an)

console.log(box)

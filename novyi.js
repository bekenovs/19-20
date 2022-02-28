let ul = document.querySelector('ul')

let header = document.createElement('h1')
let header2 = document.createElement('h1')
let li1 = document.createElement('li')
let li2 = document.createElement('li')


header.innerHTML = 'Это заголовок'
header2.innerHTML = 'Это второй заголовок'
li1.innerHTML = 'prepend li'
li2.innerHTML = 'apendd li'

ul.style.border = '2px solid red'

ul.before(header)
ul.after(header2)
ul.prepend(li1)
ul.append(li2)


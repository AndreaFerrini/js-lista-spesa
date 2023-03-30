// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basyta che si vedano) gli elementi della lista individualmente con un ciclo while.

const listaSpesa = [
    'uova',
    'acqua',
    'insalata',
    'carne'
]

const listaContainer = document.getElementById('lista-spesa')

let i = 0;

while( i < listaSpesa.length ){

    const item = listaSpesa[i]

    const listItem = document.createElement('li')
    listItem.innerText = item
    listaContainer.append(listItem)

    i++
}
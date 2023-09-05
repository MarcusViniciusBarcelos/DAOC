const data = [
    {nome: 'Marcus', idade: 25},
    {nome: 'Carlos', idade: 23},
    {nome: 'Carol', idade: 18}
]

function start() {
    const minhaLista = document.getElementById("minhaLista")

    minhaLista.innerHTML = MinhaListaComponent(data)
}

function MinhaListaComponent(data) {
    return data.map(item =>{
        return(
            `<li>${item.nome}</li>`
        )
    }).join("")
}
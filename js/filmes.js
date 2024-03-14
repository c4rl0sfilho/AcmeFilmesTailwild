export async function getFilmes(){
    const url = 'http://10.107.134.42:8080/v2/acmeFilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()

    return data.filmes 
}

export async function getFilmeByID(id){
    const url = `http://10.107.134.42:8080/v2/acmeFilmes/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.filme[0] 
}

export async function postFilme (filme){
    console.log(filme)
    const url = 'http://10.107.134.42:8080/v2/acmeFilmes/filmes'
    const options = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }

    const response = await fetch(url, options)

    return response.ok
}



//TESTES


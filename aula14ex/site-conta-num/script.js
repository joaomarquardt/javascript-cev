function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if (inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Mudando PASSO para 1...')
            p = 1
        }
        if (f > i) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
                if (c + p <= f) {
                    res.innerHTML += `&#x1F449 `
                }
            }
        } else if (i > f) {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
                if (c - p >= f) {
                    res.innerHTML += `&#x1F449 `
                }
            }
        }
        
        res.innerHTML += `&#x1F3C1`

        document.formulario.inicio.value = ''
        document.formulario.fim.value = ''
        document.formulario.passo.value = ''
        delete inicio
        delete fim
        delete passo 
    }
}
var idade = 53
if (idade < 18) {
    console.log('Menor de idade! Não vota')
} else {
    if (idade < 18 || idade >= 65) {
        console.log('Voto opcional!')
    } else {
        console.log('Maior de idade! Voto obrigatório')
    }
}
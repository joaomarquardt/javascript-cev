let num = [14, 2, 9, 6]
console.log(`Nosso vetor é o ${num} e tem ${num.length} números`)
console.log(`O vetor em ordem fica dessa maneira: ${num.sort()}\n`)

for (let c = 0; c < num.length; c++) {
    console.log(`O ${c + 1}° número do vetor é: ${num[c]}`)
}

for (let c in num) {
    console.log(`O ${c + 1}° número do vetor é: ${num[c]}`)
}
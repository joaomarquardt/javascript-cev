function calcular() {
    let numtxt = document.getElementById('numero')
    let res = document.getElementById('restab')
    if (numtxt.value.length == 0) {
        window.alert('Por favor digite um número')
    } else {
        res.innerHTML = ''
        let num = Number(numtxt.value)
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            res.appendChild(item)
        }
    }
}
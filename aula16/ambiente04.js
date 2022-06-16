let fat = function(n) {
    var tot = 1
    for (var c = n; c > 1; c--) {
        tot *= c
    }

    return tot
}

console.log(fat(5))
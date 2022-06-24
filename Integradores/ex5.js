// seu código vem aqui!
function calculaGostos(notas) {
    var dislike = 0
    var like = 0
    var med = 0
    for (var i = 0; i < notas.length; i++){
        if (notas[i] == 0 || notas[i] == 1 ) {
            dislike++
        }
        else if (notas[i] == 2 || notas[i] == 3 ) {
            med++
        }
        else if (notas[i] == 4 || notas[i] == 5 ) {
            like++
        }
    }
    return [dislike, med, like]
}
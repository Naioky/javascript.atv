// Seu código vem aqui
function transformaParaMaiusculo(palavras) {
    for (i = 0; i < palavras.length; i++)
    {
        palavras[i].Push(palavras[i].toUpperCase())
    }
    return palavras
}
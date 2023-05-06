// 1) Criando localStorage.
// 1.1) Faço uma variável que terá como parâmetro: key (nome do carrinho) e value(valo-
// res da Aray que advém do Cart).

export const setItem = (key, value)=>{ 
    //2) Aqui irá fazer setar o nome do localStorage e a array - isto é, todos os valo-
    // res do Cart. Vale dizer que nesta array, converto-a em String, necessário porque
    // o localStorage apenas aceita valores em tipo String.
    localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key)=>{
    // 3) Aqui irá, apenas, buscar esses elementos guardados no localStorage (lembrando 
    // que esses elementos estão em tipo string). Portanto, vale dizer, temo-nos que fa
    // -zer esses elementos que estou pegando em String, converter em array(sua forma o
    // -riginal).
    return JSON.parse(localStorage.getItem(key))
}
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (Fano.value == 0 || Number(Fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'homen-bebe.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src', 'homen-jovem.png')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src', 'homen-adulto.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'homen-idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'mulher-bebe.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src', 'mulher-jovem.png')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src', 'mulher-adulto.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'mulher-idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    
    }
}
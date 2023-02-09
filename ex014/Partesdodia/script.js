function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')  

    var data = new Date()
    var datas = data.getDate()
    var hora = data.getHours()
    msg.innerHTML = `Hoje é dia ${datas}.<br>Agora são ${hora} horas.`
    if(hora >= 0 && hora < 18){
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#eb9846f'
    }
    else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}
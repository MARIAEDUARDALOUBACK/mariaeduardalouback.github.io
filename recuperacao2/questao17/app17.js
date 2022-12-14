function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function gerarBotao() {
    var quadrado = document.createElement('div');
    quadrado.style.backgroundColor = '#FF0000';
    quadrado.style.height = '100px';
    quadrado.style.width = '100px';
    quadrado.style.margin = '15px';
    quadrado.onmouseover = function mudaCorBotao() {
        quadrado.style.backgroundColor = getRandomColor();
    }
    var corpoSite = document.body;
    corpoSite.appendChild(quadrado);
}
function botao(){

    let html = document.documentElement;

    if (html.classList.contains('light')) 
    {
        html.classList.remove('light');
    }
    else
    {
        html.classList.add('light');
    }
}

function botaolegenda(){

    var overlay = document.getElementById("imagem-legenda");
    overlay.style.display = "flex";

    overlay.onclick = function() {
        overlay.style.display = "none";
      }
}


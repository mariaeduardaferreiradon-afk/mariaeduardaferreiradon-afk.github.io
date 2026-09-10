function mostrarImagem(id) {

    const imagem = document.getElementById(id);

    if (imagem.style.display === "block") {

        imagem.style.display = "none";

    } else {

        imagem.style.display = "block";

    }

}
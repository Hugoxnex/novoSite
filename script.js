function mostrarVideo(url, titulo, descricao) {
    let videoSource = document.getElementById("video-source");
    let player = document.getElementById("player");
    let videoTitle = document.getElementById("video-title");
    let videoDescription = document.getElementById("video-description");

    videoSource.src = url;
    player.load();
    player.play();
    videoTitle.innerText = titulo;
    videoDescription.innerHTML = descricao;
}

function openTab(event, tabName) {
    let tabs = document.getElementsByClassName("container");
    for (let tab of tabs) {
        tab.style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";
}

// Exibir a primeira aba por padrão
document.getElementById("rh").style.display = "flex";

function typeWriter(element, text, speed) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

function openLetter() {
  // 1. Amplop terbuka
  document.querySelector(".arrow-down-closed").style.visibility = "hidden";
  document.querySelector(".arrow-up-open").style.visibility = "visible";
  document.querySelector(".media-btn").style.visibility = "visible";
  document.getElementById("audio").play();

  // 2. Tunggu beberapa detik sebelum munculkan message box
  setTimeout(() => {
    const messageBox = document.querySelector(".message-box-1");
    messageBox.style.visibility = "visible";

    const message =
      "Hai, Nindia Rachel Dwi Putri. \n" +
      "Hari ini, aku langitkan semua doa terbaik untukmu.\n" +
      "Semoga setiap hal yang pernah membuatmu jatuh turut menjadi alasanmu untuk tetap tumbuh lebih kuat.\n" +
      "Semoga dunia senantiasa menjagamu di mana pun kamu berada, dan melindungi setiap langkahmu.\n" +
      "Semoga setiap langkahmu dimudahkan, hingga tercapai semua mimpi dan harapanmu.\n" +
      "Dirayakan ataupun tidak, semoga semesta selalu membahagiakanmu bagaimanapun caranya.\n" +
      "Barakallah fi umrik, terima kasih sudah bertahan sampai sejauh ini.\n" +
      "Wish you all the best, semoga senyum selalu menyertai setiap harimu.";

    const greetingEl = document.getElementById("greeting-text");
    greetingEl.innerHTML = "";
    typeWriter(greetingEl, message, 100);
  }, 2000); // << Jeda 2000ms = 2 detik
}

let isPlaying = true;

function mediaBtn() {
  if (isPlaying) {
    document.getElementById("audio").pause();
    document.getElementById("media-button").innerHTML =
      '<i class="fas fa-play"></i>';
  } else {
    document.getElementById("audio").play();
    document.getElementById("media-button").innerHTML =
      '<i class="fas fa-pause"></i>';
  }
  isPlaying = !isPlaying;
}

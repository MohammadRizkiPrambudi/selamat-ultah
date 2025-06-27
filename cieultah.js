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
      "Hari ini, saya langitkan semua doa terbaik saya untuk kamu.\n" +
      "Semoga hal-hal yang membuat kamu runtuh turut menjadi alasan kamu untuk tetap tumbuh lebih kuat.\n" +
      "Semoga dunia senantiasa menjaga kamu di mana pun kamu berada, dan melindungi setiap langkahmu.\n" +
      "Semoga hari-hari kamu selalu diiringi cinta yang tak pernah ada batasnya.\n" +
      "Semoga setiap langkahmu dimudahkan, hingga tercapai semua mimpi dan harapanmu.\n" +
      "Dirayakan ataupun tidak, semoga semesta selalu membahagiakan kamu bagaimanapun caranya.\n" +
      "Barakallah fi umrik, terima kasih sudah bertahan sampai sejauh ini.\n" +
      "Wish you all the best, semoga senyum selalu menyertai setiap harimu.";

    const greetingEl = document.getElementById("greeting-text");
    greetingEl.innerHTML = "";
    typeWriter(greetingEl, message, 50);
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

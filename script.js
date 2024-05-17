"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const backgroundMusicNo = new Audio("https://dl.dropbox.com/scl/fi/upt3t8hiqk2l0jgyiq1mz/man-crying-meme.mp3?rlkey=cwb52f475hfso3xv42armmgsj&st=ghusv1cz&dl=0");
const backgroundMusicYes = new Audio("https://dl.dropbox.com/scl/fi/teiv2dhl0ad1dql38fv0g/ssstik-mp3cut.net.mp3?rlkey=0nuutwqt66fhs3y4oqhhm7bwe&st=m3ktaxtn&dl=0");
backgroundMusicYes.loop = true; // agar musik "Yes" terus berulang

const TOTAL_IMAGES = 12; // Total jumlah gambar yang tersedia

let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  noCount++;
  const imageIndex = noCount % TOTAL_IMAGES; // Menggunakan modulus untuk loop gambar
  changeImage(imageIndex);
  resizeYesButton();
  updateNoButtonText();
  backgroundMusicNo.loop = true; // Mengatur loop untuk musik "No"
  backgroundMusicNo.play(); // Memulai memutar musik "No" saat tombol "No" ditekan
});

function handleYesClick() {
  titleElement.innerHTML = "CIEEE CIEEE CIEEEEEE 🤣🤣🤣🤣";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  backgroundMusicYes.play(); // Memulai memutar musik "Yes" saat tombol "Yes" ditekan
  backgroundMusicNo.pause(); // Menghentikan pemutaran musik "No" saat tombol "Yes" ditekan
  backgroundMusicNo.currentTime = 0; // Mengatur ulang waktu pemutaran musik "No" ke awal
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.3;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [,
      "Ngga? :((",
      "Yakin kamu?",
      "Seriusan ini?",
      "sama Nurmin masa gak kangen?",
      "Coba di pikir lagi",
      "Kangen pasti",
      "masa yang merah terus di pencet",
      "Sekali-kali kangen bisa kali",
      "ya masa gak kangen sama sekali",
      "kangen kan sebenernya?",
      "gak ya?",
      "yakin banget gak kangen nih?",
      "udah yakin banget gak nih?",
      "fix?",
      "fix beneran ini?",
      "TIDAAAAKKKKK!!",
      "Gak akan selesai ini kalo ijo gak di pencet :(",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

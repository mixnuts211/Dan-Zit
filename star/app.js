const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const stars = [];
let count = 0;

canvas.width = innerWidth;
canvas.height = innerHeight;

class Star {
  constructor(x, y, randomImg, randomCount) {
    this.x = x;
    this.y = y;
    this.randomImg = randomImg;
    this.randomCount = randomCount;
    this.draw();
  }

  draw() {
    const getImg = new Image();
    getImg.src = this.randomImg;
    ctx.globalAlpha = 0.9;
    ctx.drawImage(getImg, this.x, this.y, this.randomCount, this.randomCount);
    console.log(stars);
  }
}

function moving() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let star;
  for (let i = 0; i < stars.length; i++) {
    star = stars[i];
    star.x -= 0.3;
    star.y += 0.3;
    star.draw();
    if (star.x < -30 || star.y < -30) {
      stars.splice(i, 1);
    }
  }

  requestAnimationFrame(moving);
}

function getPos(e) {
  const posX = e.layerX;
  const posY = e.layerY;

  if (count % 10 === 0) {
    const imgArr = [
      "img/star-1.png",
      "img/star-2.png",
      "img/star-3.png",
      "img/star-4.png",
      "img/star-5.png",
    ];
    const randomImg = imgArr[Math.floor(Math.random() * imgArr.length)];
    const randomCount = Math.floor(Math.random() * 30) + 20;

    stars.push(new Star(posX, posY, randomImg, randomCount));
  }
  count++;
}

canvas.addEventListener("mousemove", getPos);

moving();

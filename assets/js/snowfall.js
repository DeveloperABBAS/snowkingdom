// snowfall.js

document.addEventListener('DOMContentLoaded', () => {
  const snowfall = document.querySelector('.snow-fall');

  function createSnowFlake() {
    const snowFlake = document.createElement('div');
    snowFlake.classList.add('snowFlake');
    snowFlake.textContent = '❄';
    snowFlake.style.left = `${Math.random() * 100}vw`;
    snowFlake.style.fontSize = `${Math.random() * 10 + 10}px`;
    snowFlake.style.opacity = Math.random();
    snowFlake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowfall.appendChild(snowFlake);
    setTimeout(() => snowFlake.remove(), 5000);
  }

  setInterval(createSnowFlake, 50);
});

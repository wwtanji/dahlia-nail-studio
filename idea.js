const ART_SELECTOR = '.dahlia';
const SWATCH_SELECTOR = '.swatch';
const SHADES = [['#a4245a', '#d85c8c', '#f4a9c4', '#fdf0f3', '#5b1840', '#e0809f'], ['#d9503f', '#f08a6e', '#f9c3a8', '#fdf0f3', '#6b2418', '#f2a58f'], ['#6f4aa6', '#9b7fcf', '#cdbdf0', '#fdf0f3', '#33204f', '#b59ae0'], ['#c9780f', '#eba73f', '#f8d98a', '#fdf0f3', '#5a3508', '#f0bc5c'], ['#5b1840', '#8f3a6a', '#c98aac', '#fdf0f3', '#2a0b1e', '#a8567f']];
const ART_VARIABLES = ['--art-1', '--art-2', '--art-3', '--art-4', '--art-5', '--art-6'];

const art = document.querySelector(ART_SELECTOR);
const swatches = [...document.querySelectorAll(SWATCH_SELECTOR)];

function applyShade(index) {
  ART_VARIABLES.forEach((name, position) => art.style.setProperty(name, SHADES[index][position]));
  swatches.forEach((swatch, position) => swatch.setAttribute('aria-pressed', String(position === index)));
}

swatches.forEach((swatch, index) => swatch.addEventListener('click', () => applyShade(index)));

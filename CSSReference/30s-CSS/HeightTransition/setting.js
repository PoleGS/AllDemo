const el = document.querySelector('.el');
const height = el.scrollHeight;console.log(height)
el.style.setProperty('--max-height', height + 'px');
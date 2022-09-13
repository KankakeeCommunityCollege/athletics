// Lazy load function
// ex. <img data-src="/path/to/image.jpg" alt="">
function lzFunction() {
  document.querySelectorAll('img[data-src]').forEach(img => {
    img.src = img.getAttribute('data-src');
    img.onload = () => img.removeAttribute('data-src');
  });
}

export default lzFunction;

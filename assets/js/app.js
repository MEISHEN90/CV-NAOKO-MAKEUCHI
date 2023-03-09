<a href="path/to/cv.pdf" class="btn-descargar">Descargar CV</a>

<script>
const enlace = document.querySelector('.btn-descargar');
enlace.addEventListener('click', function(event) {
  event.preventDefault();
  const archivo = this.getAttribute('href');
  const nombreArchivo = archivo.split('/').pop(); 
  const linkDescarga = document.createElement('a');
  linkDescarga.setAttribute('download', nombreArchivo);
  linkDescarga.setAttribute('href', archivo);
  linkDescarga.click();
});
</script>

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      //Mostrar una vista previa de la imagen 
      const reader = new FileReader();
      reader.onload = function(e) {
        // Crea un elemento para mostrar la vista previa (opcional)
        // const preview = document.createElement('img');
        // preview.src = e.target.result;
        // preview.style.maxWidth = '100%';
        // preview.style.maxHeight = '200px';
        // document.querySelector('.upload-box').appendChild(preview);
        
        console.log('Imagen cargada:', file.name);
        alert('Imagen cargada correctamente: ' + file.name);
      };
      reader.readAsDataURL(file);
    }
  });
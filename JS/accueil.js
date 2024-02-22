document.addEventListener("DOMContentLoaded", function() {
    const imageGrid = document.getElementById('imageGrid');

    // Chemin vers le répertoire contenant les images
    const imagePath = 'images/accueil/';

    // Nombre total d'images que vous souhaitez afficher
    const totalImages = 6;

    // Modèle de nommage des images (par exemple, image1.jpg, image2.jpg, etc.)
    const imageNamePattern = 'element-';
  
    // Générer les balises d'image
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = imagePath + imageNamePattern + i + '.png';
        img.alt = 'Image ' + i;
        
        const div = document.createElement('div');
        
        if (i % 3 === 0) {
            div.classList.add('last-child');
        }
        else {
            div.classList.add('flex-item');
        }
      
        div.appendChild(img);
      
        imageGrid.appendChild(div);
    }

  });
  
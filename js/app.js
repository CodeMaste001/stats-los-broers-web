document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('broers-grid');

  if (gridContainer && typeof broesData !== 'undefined') {
    renderGrid(broesData, gridContainer);
  }
});

function renderGrid(data, container) {
  container.innerHTML = ''; // Limpiar contenido previo

  data.forEach(broe => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.onclick = () => verBroe(broe.id);
    
    // Set CSS variable for the theme color
    card.style.setProperty('--bro-color', broe.themeColor || '#00ffcc');

    // Crear contenido de la tarjeta
    const img = document.createElement('img');
    img.src = broe.avatar;
    img.alt = broe.name;
    // Fallback por si la imagen no existe
    img.onerror = function() {
        this.src = 'https://via.placeholder.com/400/111/FFFFFF?text=' + broe.name;
    };

    const nameSpan = document.createElement('span');
    nameSpan.textContent = broe.name;

    card.appendChild(img);
    card.appendChild(nameSpan);
    container.appendChild(card);
  });
}

function verBroe(id) {
  window.location.href = `broe.html?id=${id}`;
}

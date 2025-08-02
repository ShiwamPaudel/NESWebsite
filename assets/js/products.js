const products = {
  'product-01': {
    title: 'Facial Cleanser',
    image: './assets/images/product-01.jpg',
    oldPrice: '$39.00',
    newPrice: '$29.00',
    description: 'Gentle daily cleanser that removes dirt and oil without drying your skin.',
    specs: {
      brand: 'Hindware Italian Collection',
      warranty: '10 Years',
      size: '69 × 36 × 74 cm',
      flushing: '2/4 Liters Flush',
      trapSize: 'S220'
    }
  },
  'product-02': {
    title: 'Bio-shroom Rejuvenating Serum',
    image: './assets/images/product-02.jpg',
    newPrice: '$29.00',
    description: 'Infused with botanical extracts to smooth and brighten your skin.',
    specs: {
      brand: 'Hindware Italian Collection',
      warranty: '8 Years',
      size: '60 × 30 × 70 cm',
      flushing: '2/4 Liters Flush',
      trapSize: 'S200'
    }
  },
  'product-03': {
    title: 'Coffee Bean Caffeine Eye Cream',
    image: './assets/images/product-03.jpg',
    newPrice: '$29.00',
    description: 'Reduces puffiness and dark circles with a boost of caffeine.',
    specs: {
      brand: 'Hindware Italian Collection',
      warranty: '5 Years',
      size: '50 × 28 × 65 cm',
      flushing: '2/4 Liters Flush',
      trapSize: 'S180'
    }
  }
};

function getProductId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

function renderProduct() {
  const id = getProductId();
  const product = products[id];
  const container = document.getElementById('product-container');

  if (!product) {
    container.innerHTML = '<p>Product not found.</p>';
    return;
  }

  container.innerHTML = `
    <div style="display: flex; flex-wrap: wrap; gap: 2rem;">
      <img src="${product.image}" alt="${product.title}" style="width: 300px; border-radius: 8px;" />
      <div>
        <h2>${product.title}</h2>
        <p style="font-size: 1.1rem;">${product.description}</p>
        <p style="font-size: 1.2rem; color: #e91e63;"><strong>${product.newPrice}</strong></p>

        <div style="background: #fdf6dc; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
            <div><strong style="color: gray;">Catalogue No.</strong><br>${product.specs.catalogueNo}</div>
            <div><strong style="color: gray;">Brand</strong><br>${product.specs.brand}</div>
            <div><strong style="color: gray;">Warranty</strong><br>${product.specs.warranty}</div>
            <div><strong style="color: gray;">Size</strong><br>${product.specs.size}</div>
            <div><strong style="color: gray;">Flushing</strong><br>${product.specs.flushing}</div>
            <div><strong style="color: gray;">Trap Size</strong><br>${product.specs.trapSize}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderRelatedProducts(currentId) {
  const relatedContainer = document.getElementById('related-products');

  Object.entries(products).forEach(([id, product]) => {
    if (id === currentId) return; // skip current product

    const card = document.createElement('div');
    card.style.cssText = 'flex: 0 0 auto; display: flex; background: #fafafa; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; width: 600px;';

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" style="width: 200px; object-fit: cover;" />
      <div style="padding: 1rem;">
        <h3 style="margin: 0 0 0.5rem;">${product.title}</h3>
        <p style="margin: 0 0 0.5rem;">${product.description}</p>
        <div style="background: #fdf6dc; padding: 0.5rem; border-radius: 6px;">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem;">
            <div><strong style="color: gray;">Cat. No.</strong><br>${product.specs.catalogueNo}</div>
            <div><strong style="color: gray;">Brand</strong><br>${product.specs.brand}</div>
            <div><strong style="color: gray;">Warranty</strong><br>${product.specs.warranty}</div>
          </div>
        </div>
      </div>
    `;

    relatedContainer.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const id = getProductId();
  renderProduct();
  renderRelatedProducts(id);
});

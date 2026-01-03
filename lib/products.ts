import productsData from '../data/products.json';

export type Product = typeof productsData[number];

export async function getProducts() {
  // in a real app fetch from CMS or API
  return productsData;
}

export async function getProduct(id: string) {
  return productsData.find((p) => p.id === id);
}

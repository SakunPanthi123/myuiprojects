'use client'
import ProductCard from '@components/hamro/ProductCard';

const products = [
  { id: 1, name: 'Hammer', price: 15, image: '/assets/hammer.jpg' },
  { id: 2, name: 'Chisel', price: 10, image: '/assets/chisel.jpg' },
  { id: 3, name: 'Stove', price: 50, image: '/assets/stove.jpg' },
];

function Hamro() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Hamro;

import { useEffect, useState } from "react";

function Produk() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const getImagePath = (p) => {
  let kategori = p.category?.nama?.toLowerCase(); 
  return `/images/${kategori}/${p.gambar}`;      
};
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id} className="mb-6 flex items-center space-x-4">
            <img
              src={getImagePath(p)}
              alt={p.nama}
              className="w-20 h-20"
            />
            <div>
              <div className="font-semibold">{p.nama}</div>
              <div className="text-gray-600">Rp {p.harga}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produk;
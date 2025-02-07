import { Product } from "@/types/product.types";

interface Props {
  title: string;
  data: Product[];
  viewAllLink: string;
  addToCart: (product: Product) => void; // ✅ Props me add kiya
}

export default function ProductListSec({ title, data, viewAllLink, addToCart }: Props) {
  
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-500">${product.price}</p>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => addToCart(product)} // ✅ Add to cart button kaam karega
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

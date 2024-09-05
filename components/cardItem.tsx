import Image from "next/image";
import { useCart } from "../contexts/CartContext";
import addToCartIcon from "../assets/images/carticon.svg";
import { useState } from "react";

export default function CardItem({
  id,
  title,
  price,
  image,
}: {
  id: number;
  title: string;
  price: number;
  image: string;
}) {
  const { addItemToCart } = useCart();
  const [itemCount, setItemCount] = useState(0);

  const handleAddToCart = () => {
    addItemToCart({ id, title, price, image, quantity: 1 });
    setItemCount(itemCount + 1);
  };
  return (
    <div className="w-[330px] flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <div className="flex flex-col items-center">
            <Image
              src={image}
              alt={title}
              width={147}
              height={188}
              className="rounded-lg"
            />
            <h2 className="mt-4 text-lg font-bold text-black">{title}</h2>
            <p className="mt-2 text-md font-semibold text-black">
              R$ {price.toFixed(2)}
            </p>
            <button
              onClick={handleAddToCart}
              className={`mt-4 flex items-center py-2 px-4 rounded hover:bg-green-600 transition-colors w-full justify-center ${
                itemCount > 0 ? "bg-green-500" : "bg-blue-500"
              } text-white`}
            >
              <Image
                src={addToCartIcon}
                alt="adicionar ao carrinho"
                width={14}
                height={14}
                className="mr-2"
              />
              <span className="mr-2">{itemCount}</span>
              ADICIONAR AO CARRINHO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

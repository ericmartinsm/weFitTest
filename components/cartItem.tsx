import Image from "next/image";
import Add from "../assets/images/plusIcon.svg";
import Decrease from "../assets/images/minusIcon.svg";
import Delete from "../assets/images/deleteicon.svg";
import { useCart } from "../contexts/CartContext";

export default function CartItemDesk({
  id,
  title,
  price,
  image,
  quantity,
}: {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}) {
  const { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } =
    useCart();

  return (
    <>
      <div className=" Desk md:grid md:grid-cols-4 gap-4 items-center mb-6 hidden">
        <div className="flex items-center">
          <Image
            src={image}
            alt={title}
            width={64}
            height={64}
            className="rounded"
          />
          <div className="ml-4">
            <h2 className="text-lg font-bold">{title}</h2>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2 lg:mt-0">
          <button
            className="text-xl text-blue-500"
            onClick={() => decreaseItemQuantity(id)}
          >
            <Image
              src={Decrease}
              alt={title}
              width={18}
              height={18}
              className="rounded"
            />
          </button>
          <span
            className="mx-2 text-lg w-[59px] border-2 rounded text-center"
            style={{ border: "1px solid #D9D9D9" }}
          >
            {quantity}
          </span>
          <button
            className="text-xl text-blue-500"
            onClick={() => increaseItemQuantity(id)}
          >
            <Image
              src={Add}
              alt={title}
              width={18}
              height={18}
              className="rounded"
            />
          </button>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold hidden md:block">
            {(price * quantity).toFixed(2)}
          </p>
        </div>
        <div className="flex justify-end lg:justify-end items-center mt-2 lg:mt-0">
          <button
            className="text-blue-500"
            onClick={() => removeItemFromCart(id)}
          >
            <Image src={Delete} alt="Remover" width={18} height={18} />
          </button>
        </div>
      </div>
      <div className=" Mobile flex items-center mb-6 md:hidden ">
        <Image
          src={image}
          alt={title}
          width={64}
          height={64}
          className="rounded"
        />
        <div className="flex flex-col ml-4 flex-grow gap-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="flex items-center mt-2 relative">
            <button
              className="text-xl text-blue-500"
              onClick={() => decreaseItemQuantity(id)}
            >
              <Image
                src={Decrease}
                alt={title}
                width={18}
                height={18}
                className="rounded"
              />
            </button>
            <span
              className="mx-2 text-lg w-[59px] border-2 rounded text-center"
              style={{ border: "1px solid #D9D9D9" }}
            >
              {quantity}
            </span>
            <button
              className="text-xl text-blue-500"
              onClick={() => increaseItemQuantity(id)}
            >
              <Image
                src={Add}
                alt={title}
                width={18}
                height={18}
                className="rounded"
              />
            </button>
            <div className="text-sm font-bold absolute left-48 top-0">
              <span className="text-gray-400">SUBTOTAL</span>
              <p>R$ {(price * quantity).toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="text-right h-full self-baseline">
          <p className="text-lg font-bold ">R$ {price.toFixed(2)}</p>
        </div>
        <button
          className="ml-4 text-blue-500 self-baseline"
          onClick={() => removeItemFromCart(id)}
        >
          <Image
            src={Delete}
            alt={title}
            width={16}
            height={178}
            className="rounded mt-1"
          />
        </button>
      </div>
    </>
  );
}

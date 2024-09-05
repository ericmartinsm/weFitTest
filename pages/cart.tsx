import Navbar from "../components/navBar";
import { useCart } from "../contexts/CartContext";
import { useRouter } from "next/router";
import CartItem from "../components/cartItem";

export default function Cart() {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();

  const handleCartFinish = () => {
    clearCart();
    router.push("/cartFinished");
  };

  return (
    <>
      <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6">
        <Navbar />
        <div className="w-full  mx-auto  text-white">
          <div className="bg-white text-black rounded-lg p-6 ">
            <div className="py-4 rounded-lg md:grid grid-cols-3 g:grid-cols gap-4 hidden ">
              <div className="">
                <p className="font-bold text-gray-400 ">PRODUTO</p>
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-400">QTD</p>
              </div>
              <div className="text-start">
                <p className="font-bold text-gray-400">SUBTOTAL</p>
              </div>
            </div>

            {cartItems.map((item) => (
              <>
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                />
              </>
            ))}
            <hr className="bg-black" />
            <div className="mt-4 bg-white text-black rounded-lg p-4 lg:flex lg:flex-row-reverse lg:justify-between">
              <div className="flex lg:justify-end justify-between items-center ">
                <span className="text-lg font-bold text-gray-400">TOTAL</span>
                <span className="text-xl font-bold lg:px-4 text-black">
                  R${" "}
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleCartFinish}
                className="w-full lg:w-44 mt-4 btn-primary font-bold py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                FINALIZAR PEDIDO
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

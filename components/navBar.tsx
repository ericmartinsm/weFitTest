import Image from "next/image";
import BagIcon from "../assets/images/bagIcon.svg";
import { useRouter } from "next/router";
import { useCart } from "../contexts/CartContext";



export default function NavBar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const router = useRouter();

  const handleCartClick = () => {
    if (!totalItems) {
      router.push("/cartEmpty");
    } else {
      router.push("/cart");
    }
  };
  const hangleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="h-20 flex items-center justify-between bg-aliceblue ">
      <div
        className="text-2xl font-bold leading-[27px]"
        onClick={hangleBackToHome}
      >
        WeMovies
      </div>
      <div
        className="flex items-center justify-between space-x-2"
        onClick={handleCartClick}
      >
        <div className="text-left md:text-right">
          <h3 className="text-sm leading-5 hidden md:block">Meu Carrinho</h3>
          <p className="text-xs text-gray-500 font-semibold leading-4 mr-2">
            {totalItems} {totalItems === 1 ? "item" : "itens"}
          </p>
        </div>
        <div className="w-10 h-10 flex justify-center items-center">
          <Image
            src={BagIcon}
            alt="Veja sua sacola"
            width={24}
            height={20}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

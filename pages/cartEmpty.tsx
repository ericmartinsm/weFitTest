import Image from "next/image";
import Navbar from "../components/navBar";
import Emptycart from "../assets/images/cartEmpty.svg";
import { useRouter } from "next/router";


export default function CartEmpty() {
  const router = useRouter();

  const hangleBackToHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded">
          <h3 className="w-[180px] sm:w-auto title-common mb-6 text-center">
            Parece que não há nada por aqui :({" "}
          </h3>
          <div style={{ borderBottom: "1px solid #3F3D56" }} className="mb-4 w-[447px] flex justify-center">
            <Image
              src={Emptycart}
              alt="Carrinho vazio..."
              width={178}
              height={188}
            />
          </div>
          <button onClick={hangleBackToHome} className="btn-primary my-6 px-4 rounded hover:bg-blue-600 transition-colors font-bold">
            Recarregar página
          </button>
        </div>
      </div>
    </>
  );
}

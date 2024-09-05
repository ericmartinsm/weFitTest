import Image from "next/image";
import Navbar from "../components/navBar";
import Emptycart from "../assets/images/cartFinishedImage.svg";
import { useRouter } from "next/router";


export default function CartFinished() {
  const router = useRouter();

  const handleToHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded">
          <h3 className="w-[180px] sm:w-auto title-common mb- text-center">
            Compra realizada com sucesso!
          </h3>
          <div className="w-[238px] h-[247px] lg:w-[295px] lg:h-[307px]">
            <Image
              src={Emptycart}
              alt="Pedido completo!"
              width={295}
              height={307}
            />
          </div>
          <button
            onClick={handleToHome}
            className="btn-primary w-44 my-6 px-4 rounded hover:bg-blue-600 transition-colors font-bold"
          >
            VOLTAR
          </button>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import SpinnerLoading from "../assets/images/spinImage.png";

export default function LoadingSpinner() {

  return (
    <div className="">
      <Image
        src={SpinnerLoading}
        alt={"Carregando..."}
        width={147}
        height={188}
        className="rounded-lg animate-spin"
      />
    </div>
  );
}

import { Inter } from "@next/font/google";
import Button from "../components/Button";
import Page from "../components/Pagina/pagina";
import SecondCard from "../components/SecordCard/second";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-skin-fill">
      <p className="text-skin-base">saasdsadsadsadsadsadsa</p>
      <Button>Olá</Button>
    </div>
  );
}

import MeteoWidget from "@/components/MeteoWidget";
import Title from "@/components/Title";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 min-h-dvh" >


      <Title level={1} >Meteo widgets</Title>


      <div className="flex gap-4 justify-center flex-wrap">
        <MeteoWidget city="santiago" />
        <MeteoWidget city="Sarlat-la-Canéda" />
        <MeteoWidget city="Chemillé-en-Anjou" />
        <MeteoWidget city="Saint-Girons" />
        <MeteoWidget city="Corsica" />
        <MeteoWidget city="Pucon" />

      </div>
    </div>
  );
}

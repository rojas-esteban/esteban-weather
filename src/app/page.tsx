import Counter from "@/components/counter";
import MeteoWidget from "@/components/MeteoWidget";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 min-h-dvh" >



      <Title level={2} >Meteo widgets <Counter /> </Title>
      
      
      


      <div className="flex gap-4 justify-center flex-wrap">
        <MeteoWidget city="Santiago" />
        <MeteoWidget city="Sarlat-la-Canéda" />
        <MeteoWidget city="Chemillé-en-Anjou" />
        <MeteoWidget city="Saint-Girons" />
        <MeteoWidget city="Corsica" />
        <MeteoWidget city="Pucon" />

      </div>
    </div>
  );
}

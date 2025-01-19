
import Link from "next/link";


interface IMeteoWidget {
    city: string,
}

//https://api.openweathermap.org/data/2.5/weather?q=santiago&appid=47840f4f526d9cc69b4b575c52495860&units=metric

export default async function MeteoWidget({ city }: IMeteoWidget) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47840f4f526d9cc69b4b575c52495860&units=metric`)


    const data = await response.json()

    //console.log(data.main.temp);


    return (
        <Link href={`/meteo/${city}`} className="border p-4 rounded bg-gray-50/30 w-2/3 md:w-1/3 hover:bg-gray-50/50 flex justify-between">
            <h2 className="text-xl font-bold ">{city}</h2>
            <div className="text-2x1 font-bold">{data.main.temp}</div>
            <img
				src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
				alt={data.weather[0].main}
			/>
            
        </Link>
    )
}
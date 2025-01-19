import Title from "@/components/Title";



export default async function City ({
	params,
}: { params: Promise<{ city: string }> }){
    
    const {city} = await params
    console.log(city);
    
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47840f4f526d9cc69b4b575c52495860&units=metric`)


    const data = await response.json()
    console.log(data.weather[0]);
    

    return (
		<div className=" m-auto text-center border p-4 rounded bg-gray-50/30 w-2/3 md:w-1/3 hover:bg-gray-50/50 ">
			<Title level={2}>{city}</Title>
			<div className="text-2xl font-bold">{data.main.temp} °C</div>
			<img className="m-auto"
				src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
				alt={data.weather[0].main}
			/>
			<div>
				{data.weather[0].main} {data.weather[0].description}
			</div>
		</div>
	);
}
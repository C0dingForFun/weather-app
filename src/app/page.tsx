'use client'

import Image from "next/image";
import axios from "axios";
import {useState}  from "react";
import { BsSearch } from "react-icons/bs";
import Spinner from "../../components/spinner";
import Weather from '../../components/weather'

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data)
      console.log(response.data);
    })
    setCity('');
    setLoading(false)
  }

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className="min-h-screen p-8 ">
  
          {/* Background Overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]"></div>

          {/* Background image */}
            <Image 
              src="/Serene Seascape at Sunset.jpeg"
              alt="background img"
              layout="fill"
            />
  
          {/* Search */}
          <div className="relative flex justify-center items-center max-w-[500px] w-full m-auto pt-4 z-10">
            <form onSubmit={fetchWeather} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 rounded-2xl ">
              <div>
                <input 
                  type="text"
                  placeholder="Search city"
                  className="bg-transparent border-none focus:outline-none text-2xl placeholder:text-gray-200"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <button
                onClick={fetchWeather}
                className="cursor-pointer hover:text-white"
              >
                <BsSearch size={20} />
              </button>
            </form>
          </div>
          
          {/* Weather */}
          {weather.main && <Weather data={weather} />}
       </div> 
      );
  }
}

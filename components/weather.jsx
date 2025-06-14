'use client'

import Image from 'next/image';

export default function Weather({ data }) {
  const mile = 1.609;
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full m-auto p-4 text-gray-300 z-10 mb-10'>
      {/* Top */}
      <div className='relative flex justify-between pt-12'>
        <div className='flex flex-col items-center'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
          <p className='text-2xl'>{data.weather[0].main}</p>
        </div>
        <p className='text-9xl'>{data.main.temp.toFixed(0).slice(0, 2)}&#176;</p>
      </div>

      {/* Bottom */}
    <div className='bg-black/50 relative p-8 rounded-md mb-5 lg:top-50 top-30'>
        <p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
        <div className='flex justify-between text-center'>
            <div>
                <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0).slice(0, 2)}&#176;</p>
                <p className='text-xl'>Feels Like</p>
            </div>
            <div>
                <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                <p className='text-xl'>Humidity</p>
            </div>
            <div>
                <p className='font-bold text-2xl'>{mile.toFixed(0) * data.wind.speed.toFixed(0)} km/h</p>
                <p className='text-xl'>Winds</p>
            </div>
        </div>
      </div>
    </div>
  );
};
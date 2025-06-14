'use client'

import React from 'react';
import Image from 'next/image';
import spinner from '../public/spinner.gif'

const Spinner = () => {
  return (
    <div>
      <Image 
        src={spinner}
        alt="loading..."
        className="w-[200px] m-auto block"
        />
    </div>
  )
}

export default Spinner
import React from 'react'

const HeroSVG: React.FC = () => {
  return (
    <svg
      className='absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform lg:block'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
      aria-hidden='true'
    >
      <polygon points='0,0 90,0 50,100 0,100' fill='url(#blue-gradient)' />
      <defs>
        <linearGradient id='blue-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' style={{ stopColor: '#c9defd', stopOpacity: 1 }} />
          <stop
            offset='100%'
            style={{ stopColor: '#A1C7FF', stopOpacity: 1 }}
          />
        </linearGradient>
        <clipPath id='rounded-clip'>
          <path d='M0,0 H90 A10,10 0 0 1 100,10 V90 A10,10 0 0 1 90,100 H0 Z' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default HeroSVG

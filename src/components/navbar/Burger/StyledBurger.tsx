import React from 'react'
export const StyledBurger = ({children, onClick}: any) => (
  <button onClick={onClick} className="absolute top-3 left-8 flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-50 focus:outline-none">
    {children}
  </button>
)

export const StyledDiv = ({className}: {className:string}) => (
  <div className={`w-8 h-1 bg-gray-300 rounded-lg transition-all duration-300 ease-linear relative transform ${className}`} style={{transformOrigin: 1}} />
)
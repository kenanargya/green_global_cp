import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

export default function FloatingLabelInput({ label, id, className = '', ...props }: Props) {
  return (
    <div className={`relative mt-6 ${className}`}>
      <input
        id={id}
        {...props}
        className={`peer w-full rounded-lg border border-gray-200 bg-white px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition`} 
        placeholder={label}
      />
      <label htmlFor={id} className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-green-700 transition-all">{label}</label>
    </div>
  )
}

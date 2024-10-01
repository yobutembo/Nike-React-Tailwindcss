

const Button = ({iconURL, label, backgroundColor, textColor, borderColor, fullwidth}) => {
  return (
    <button
    className={`flex items-center justify-center
     gap-2 px-7 py-4 border font-montserrat 
     text-lg leading-none rounded-full ${fullwidth && 'w-full'}
     ${backgroundColor 
      ? `${backgroundColor} ${textColor} ${borderColor}`
      : 'bg-coral-red text-white border-coral-red'}
      `}
    >
       {label}
       {iconURL &&<img 
       className="ml-2 rounded-full w-5 h-5" 
       src={iconURL} 
       alt="Arrow Right Icon" />}
    </button>
  )
}

export default Button
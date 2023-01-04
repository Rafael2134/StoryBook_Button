const Button = ({size, children, backgroundColor, color}) => {
  return( <button type="button" 
                  className={` bg-red-400 font-bold text-white px-6 py-2 ${size} `}
                  >
                
      {children}
  </button>)
}

export default Button;
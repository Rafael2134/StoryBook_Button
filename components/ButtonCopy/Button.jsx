
export default function Button2 ({children, primary, ...props }) {
  return (
    <button type="button"
    className="w-32 h-10 bg-red-100 rounded-lg"
    {...props}   
    >
   
        {children}
    </button>
  );
};
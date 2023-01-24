
export default function Button2 ({children, primary, ...props }) {
  return (
    <button type="button"
    className="w-32 h-10 rounded-lg bg-slate-200 hover:bg-skin-button-accent-hover"
    {...props}   
    >
   
        {children}
    </button>
  );
};
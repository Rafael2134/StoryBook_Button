export default function Button3 ({children, primary, ...props }) {
  return (
    <button type="button"
    className="w-32 h-10 bg-orange-300 rounded-lg theme-neon hover:bg-skin-button-accent-hover "
    {...props}   
    >
        {children}
    </button>
  );
};
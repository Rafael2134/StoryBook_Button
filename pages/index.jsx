import { Inter } from "@next/font/google";
import { useTheme } from 'next-themes';
import SecondCard from '../components/SecondCard/second';
import ThirdCard from '../components/ThirdCard/third';
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const {theme, setTheme} = useTheme()
  return (
    <div>
    <div className="mx-auto my-0">
      <button className="w-24 h-10 bg-skin-button-muted hover:bg-skin-button-accent-hover text-skin-muted"  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Mudar Cor</button>
    </div>
  <SecondCard/>
  <div>
      <ThirdCard/>
  </div>
  </div>
  

  
  )
}

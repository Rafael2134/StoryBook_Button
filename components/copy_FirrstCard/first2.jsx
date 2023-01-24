import Image from 'next/image';
import Link from 'next/link';
import Button2 from '../ButtonCopy/Button';

export default function FirstCard({backgroundColor, color}) {
  return (

 <div id="post" data-theme="swiss">
 <div className="grid bg-skin-fill lg:grid-cols-2 2xl:grid-cols-5">
   <div className="max-w-md px-8 py-12 mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
     <div className="xl:max-w-xl">
     <table>
  <tr>       
         <td>
       <Image className="h-24" src="/img/monkey.gif" width={96}
 height={96} alt="Monkey" />
       </td>
       <td>
       <h1 class="mt-0 text-3xl static font-semibold antialiased leading-normal">Mon<a className="font-extrabold text-skin-base">key</a> Card</h1>
       </td>
       </tr>
     </table>
       <Image
         className="object-center mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"
         src="/img/jungle.jpg"
         alt="Jungle"
         width={1000}
         height={256}

       />
       <h1 className="mt-6 text-2xl font-semibold tracking-tight text-gray-900 font-headline sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
         Monkey <a className="font-extrabold text-skin-base">Monkey</a> Monkey
         <br className="hidden lg:inline" /> <span className="text-brand">Monkey Card</span>
       </h1>
       <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
       Monkeys are clever, social animals. They are known for running and leaping through trees with ease. Like apes and humans, monkeys belong to the group of mammals called primates.
       </p>
       <div className="mt-4 space-x-1 sm:mt-6">
       <Link href="https://www.crazygames.com/t/monkey" target="_blank"><Button2> Click </Button2></Link>
     
       </div>
     </div>
   </div>
   <div className="relative hidden lg:block 2xl:col-span-3">
     <Image
       className="absolute inset-0 object-cover object-center w-full h-full"
       src="/img/jungle.jpg"
       alt="Jungle"
       width={1000}
       height={1000}
     />
   </div>
 </div>
 </div>
  );
}